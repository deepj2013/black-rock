import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/whatsapp_image_2020__diUiE.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/whatsapp_image_2020__9vJrj.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/mb_05.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/mb_01.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/lving_03.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/living_2_view_04.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/living_2_view_01.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/living_001_03.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://musedesign.ae/wp-content/uploads/2021/06/girl_bedroom_01.jpg",
    width: 4,
    height: 3,
  },
];

const LightBoxGallary = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default LightBoxGallary;
