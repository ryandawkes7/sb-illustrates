import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

/* USAGE:
 *  <ArtCard item={<item>}/>
 */

export const ArtCard = (props) => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const item = props.item;
  const image = `${process.env.PUBLIC_URL}${item.image}`;

  const showModal = (el) => {
    setSelected(el);
    setShow(true);
  };

  const hideModal = () => {
    setSelected(null);
    setShow(false);
  };

  useEffect(() => {
    if (selected != null) {
      console.log(`new state: ${selected.id}`);
    }
  }, [selected]);

  return (
    <div
      className="art_box d-flex justify-content-center align-content-center col-6 col-md-4 col-xl-3"
      id={item.id}
    >
      <button
        className="art_inner d-flex flex-column col-12 col-xl-10 px-0 pb-0"
        type="button"
        data-toggle="modal"
        data-target="#art_modal"
        onClick={() => showModal(item)}
      >
        {/* Image */}
        <div className="image_container d-flex justify-content-center align-items-center col-11 m-auto">
          <img
            className="art_image"
            src={image}
            alt={item.title}
            style={{ pointerEvents: 'none' }}
          />
        </div>

        <footer className="d-flex flex-column justify-content-center w-100">
          {/* Title */}
          <div>
            <h3 className="mb-0 text-left">{item.title}</h3>
          </div>

          {/* Category & Style */}
          <div className="d-flex justify-content-between">
            <small>{item.category}</small>
            <span className="d-none d-lg-block">
              <em>{item.style}</em>
            </span>
          </div>
        </footer>

        {/* Hidden elements */}
        <div hidden>
          <span>{item.id}</span>
          <span>{item.etsy}</span>
          <span>{item.description}</span>
          <span>{item.style}</span>
        </div>
      </button>

      {/* Art Modal */}
      <Modal show={show} onHide={hideModal} size="xl" centered keyboard={false}>
        {/* Header */}
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>

        {/* Body */}
        <Modal.Body>
          {/* Image */}
          <div className="col-12 col-md-6">
            <img
              className="w-100"
              src={image}
              alt={item.title}
              style={{ pointerEvents: 'none' }}
            />
          </div>

          {/* Description */}
          <div className="col-6" />
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
