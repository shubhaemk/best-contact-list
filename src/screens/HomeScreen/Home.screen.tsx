import { useState, useEffect } from 'react';
import FeedLayout from 'components/layout/FeedLayout';
import HeaderLayout from 'components/layout/HeaderLayout';

import ErrorScreen from 'screens/ErrorScreen';
import LoadingScreen from 'screens/LoadingScreen';

import useWebService from 'services/api/useWebService';

import { ContactApiHandlerTypes, ContactApiTypes } from 'services/api/ContactApi.type';

const PER_PAGE_RESULT: number = 15;

const HomeScreen = (props: any) => {
  const { setIsLoggedIn } = props;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [feedData, setFeedData] = useState<ContactApiTypes[]>([]);

  const apiHandler: ContactApiHandlerTypes = (data: any) => {
    const formattedData: ContactApiTypes[] = data.map((item: any) => {
      const { email, gender, location, name, phone, picture, dob } = item;
      return {
        id: `${name.first}${dob.age}${name.last}${phone}`,
        gender,
        firstName: name.first,
        lastName: name.last,
        city: location.city,
        email,
        age: dob.age,
        number: phone,
        photoUrl: picture.medium,
      };
    });

    return formattedData;
  };

  const { data, isLoading, error } = useWebService({
    pageNumber,
    apiHandler,
    url: `https://randomuser.me/api/?page=${pageNumber}&results=${PER_PAGE_RESULT}&inc=gender,name,location,email,phone,picture,dob`,
  });

  const incrementPageNumber = () => {
    setTimeout(() => {
      setPageNumber((previousPageNumber: number) => previousPageNumber + 1);
    }, 1000);
  };

  useEffect(() => {
    if (data) {
      setFeedData((previousFeedData: ContactApiTypes[]) => [...previousFeedData, ...data]);
    }
  }, [data]);

  return (
    <section className="home-screen">
      {isLoading && pageNumber == 1 && <LoadingScreen type="huge" />}
      {error && <ErrorScreen />}
      <HeaderLayout actionButtonClickHandler={() => setIsLoggedIn(false)} />
      <FeedLayout
        pageNumber={pageNumber}
        feedData={feedData}
        isLoading={isLoading}
        incrementPageNumber={incrementPageNumber}
      />
    </section>
  );
};

export default HomeScreen;
