import React from "react";
import { Modal } from "react-bootstrap";

interface ProfileModalProps {
  show: boolean;
  onHide: () => void;
  url: string;
  name: string;
  location: string;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  show,
  onHide,
  url,
  name,
  location,
}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName="profile-modal"
        centered
      >
        <Modal.Body id="profile-body">
          <div
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
          <div style={{ margin: "5% 0 0 6%", color: "#253858" }}>
            <div style={{ fontSize: "x-large", fontWeight: "bolder" }}>
              {name}
            </div>
            <div>{location}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
