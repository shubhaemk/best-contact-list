import IconComponent from 'components/basic/IconComponent/';
import { ContactApiTypes } from 'services/api/ContactApi.type';
import UserActionComponent from '../UserActionComponent';

const UserCardComponent = ({ userData }: { userData: ContactApiTypes }) => {
  const { photoUrl, gender, firstName, lastName, city, age, email, number } = userData;

  return (
    <section className="user-card">
      <div className="user-card-info">
        <div className="user-card-info-icon">
          <IconComponent url={photoUrl} altText={`${firstName} ${lastName}`} />
        </div>
        <div className="user-card-info-detail">
          <h3 className="title title-dark title-medium">{`${firstName} ${lastName}`}</h3>
          <div className="user-card-info-detail-list">
            <h4 className="title title-dark title-small title-capitalize">{`Age: ${age}`}</h4>
            <h4 className="title title-dark title-small title-capitalize">{`Gender: ${gender}`}</h4>
            <h4 className="title title-dark title-small title-capitalize">{`Location: ${city}`}</h4>
          </div>
        </div>
      </div>
      <div className="user-card-action">
        <UserActionComponent
          title={`Mail:  ${email}`}
          primaryAction="Send"
          primaryActionHandler={() => {
            document.location.href = 'mailto:' + email;
          }}
        />
        <UserActionComponent
          title={`Mobile: ${number}`}
          primaryAction="Call"
          primaryActionHandler={() => {
            document.location.href = 'tel:' + number;
          }}
        />
      </div>
    </section>
  );
};

export default UserCardComponent;
