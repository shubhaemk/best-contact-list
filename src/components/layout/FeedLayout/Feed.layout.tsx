import { useRef } from 'react';

import UserCardComponent from 'components/user/UserCardComponent';

import { ContactApiTypes } from 'services/api/ContactApi.type';

import useScrollEnd from 'services/hooks/useSrollEnd';
import LoadingScreen from 'screens/LoadingScreen';

const FeedLayout = ({
  pageNumber,
  feedData,
  isLoading,
  incrementPageNumber,
}: {
  pageNumber: number;
  feedData: ContactApiTypes[] | null;
  isLoading: boolean;
  incrementPageNumber: () => void;
}) => {
  const FeedRef = useRef<HTMLElement | null>(null);

  useScrollEnd({ shouldTriggerCallback: !isLoading, callback: incrementPageNumber, containerRef: FeedRef });

  if (!feedData) return null;

  return (
    <main ref={FeedRef} className="feed home-screen-padding">
      {feedData.map((item) => {
        const { id } = item;
        return <UserCardComponent key={id} userData={item} />;
      })}
      {isLoading && pageNumber !== 1 && <LoadingScreen type="small" />}
    </main>
  );
};

export default FeedLayout;
