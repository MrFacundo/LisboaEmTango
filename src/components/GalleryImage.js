import { styled } from 'twin.macro';

const Image = styled.div`
  position: absolute;
  transition: opacity 2s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 100 : 0)};
  border: 1px solid #fff;
`;

const GalleryImage = ({ image, isVisible }) => {
  return (
    <Image isVisible={isVisible}>
      <picture>
        <source
          srcSet={image.src}
          type={"image/webp"}
        />
        <img
          src={image.srcFallback}
          alt="aulas e prácticas de tango"
        />
      </picture>
    </Image>
  );
};

export default GalleryImage;