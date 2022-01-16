import React, { useState } from "react";
import { PlaceholderCards } from "./PlaceholderCards";
import { ProfileModal } from "./ProfileModal";

interface BodyProps {
  items: any;
  error?: any;
  loading: any;
}

export const Body: React.FC<BodyProps> = ({ items, error, loading }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div
      style={{
        flex: "1 1 80%",
      }}
    >
      {error ? (
        <div className="api-error">{error}</div>
      ) : (
        <div className="all-cards">
          {loading ? (
            <PlaceholderCards />
          ) : (
            items.map((each: any) => (
              <React.Fragment key={each.id}>
                <div
                  className="display-card"
                  style={{
                    backgroundImage: `url(${each.urls.full})`,
                  }}
                  onClick={() => {
                    setOpenModal(each.id);
                  }}
                >
                  <div className="display-card-name">{each.user.name}</div>
                  <div className="display-card-location">
                    {each.user.location}
                  </div>
                </div>
                <ProfileModal
                  show={openModal === each.id}
                  onHide={() => {
                    setOpenModal(null);
                  }}
                  url={each.urls.full}
                  name={each.user.name}
                  location={each.user.location}
                />
              </React.Fragment>
            ))
          )}
        </div>
      )}
    </div>
  );
};
