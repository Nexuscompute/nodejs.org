import type { FC, SVGProps } from 'react';

const Devbox: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 72 82"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 10C5.8203 10 0 15.8203 0 23V69C0 76.1797 5.8203 82 13 82H59C66.1797 82 72 76.1797 72 69V23C72 15.8203 66.1797 10 59 10H13ZM43.4517 27.3216L36.736 26C35.7684 30.5522 34.8025 35.0963 33.8373 39.6375C32.0633 47.984 30.2914 56.3205 28.5145 64.6784C30.6514 65.0972 32.7246 65.5057 34.8238 65.9194L35.2326 66C37.9763 53.0902 40.708 40.2361 43.4517 27.3216ZM17.2331 39.8993C19.3084 37.7699 21.3837 35.6405 23.4662 33.5048V33.5025C24.2473 34.2026 25.0175 34.8927 25.7871 35.5823C26.6771 36.3799 27.5665 37.1768 28.471 37.9877C27.9368 38.5369 27.4041 39.0844 26.8723 39.6311C24.7162 41.8475 22.5739 44.0496 20.3943 46.2892C22.0822 48.0264 23.7644 49.7572 25.4589 51.5006C26.4583 52.5288 27.4619 53.5614 28.4735 54.6023C27.1593 55.7919 25.8603 56.9699 24.5311 58.1753C24.1785 58.495 23.8238 58.8167 23.4662 59.1409C19.3181 54.8671 15.1892 50.6118 11 46.2938C13.0825 44.1581 15.1578 42.0287 17.2331 39.8993ZM51.721 36.7763C54.8139 39.9486 57.9016 43.1155 61 46.2915V46.2938C58.3761 48.9999 55.7608 51.6957 53.1384 54.3989C51.6078 55.9767 50.0748 57.557 48.5362 59.1433C48.0002 58.6574 47.4699 58.1768 46.9425 57.6989C45.8007 56.6641 44.6721 55.6414 43.5265 54.6023C44.5387 53.5611 45.5444 52.5265 46.5489 51.4931C48.2291 49.7646 49.9058 48.0397 51.6033 46.2938C48.9223 43.5344 46.2534 40.7889 43.529 37.9877C44.1996 37.3868 44.8634 36.7918 45.5271 36.1968C46.5207 35.3062 47.5143 34.4155 48.5314 33.5048C49.5956 34.5963 50.6586 35.6866 51.721 36.7763Z"
      fill="#280459"
    />
  </svg>
);

export default Devbox;
