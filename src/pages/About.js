import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { pageVariants } from "../styles/Animation";
import Portrait from "../img/portrait.png";

const magicHov = {
  hover: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  initial: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
};
const magicHove = {
  hover: {
    x: 4,
    y: -4,

    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  initial: {
    x: 0,
    y: 0,
    transition: {
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const AboutStyled = styled.div`
  margin: auto;
  width: 60%;

  /*IMAGE*/
  .portrait {
    max-width: 500px;
    position: relative;
    margin: 0px auto -150px;
    z-index: -10;
    transform: translateX(15%);
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #fff 2%, rgba(255, 255, 255, 0) 35%);
    }
    img {
      width: 100%;
      max-height: 600px;
      object-fit: contain;
    }
  }
  p {
    font-size: 25px;
    color: var(--clr-grey-dark);
    line-height: 40px;
  }
  /*ABOUT ME TEXT*/
  .about-me {
    margin: auto;
  }
  h1 {
    z-index: 99;
    font-size: 200px;
    color: var(--primary);
    font-weight: 500;
    letter-spacing: -10px;
    margin-left: -11px;
  }
  /*MAP*/
  .map {
    width: 100%;
    position: relative;
    height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    svg {
      position: absolute;
      right: -300px;
      width: 80%;
      transform: rotate(20deg);
    }
    svg g circle {
      transform-origin: center center;
      animation: loop 1s ease infinite;
    }
  }
  h2 {
    text-align: left;
    font-size: 35px;
    color: var(--primary);
  }
  h2.education {
    padding-bottom: 10px;
  }

  .exp-items {
    h2 {
      font-size: 30px;
      font-weight: 600;
    }
    h2 span {
      font-weight: 500;
      color: var(--clr-grey-light);
      font-size: 26px;
    }
    p {
      margin: 10px 0;
      font-size: 20px;
      line-height: 1.5em;
    }
    .date {
      color: var(--clr-grey-light);
    }
    .exp-item {
      margin: 30px 0;
    }
    .exp-item:first-child {
      margin-top: 15px;
    }
  }
  .see-more-btn {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 25px 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 280px;
    justify-content: center;
    font-size: 18px;
    color: var(--primary);
    margin-left: -7px;
    svg {
      height: 28px;
      width: 28px;
      margin-left: 10px;
      path {
        fill: var(--primary);
      }
    }
  }
  @media screen and (max-width: 940px) {
    width: 80%;
    left: 10%;
    right: 10%;
    .map svg {
      right: -150px;
      width: 80%;
      transform: rotate(20deg);
    }
    p.education {
      padding-right: 10%;
    }
  }
  @media screen and (max-width: 670px) {
    top: 0;
    .portrait {
      margin-bottom: -80px;
    }
    h1 {
      margin-left: 0;
      font-size: 100px;
      letter-spacing: -5px;
    }
    p {
      font-size: 22px;
      line-height: 30px;
    }
    .map svg {
      width: 100%;
      transform: translateY(20px) rotate(20deg);
    }
  }
  @media screen and (max-width: 540px) {
    .exp-items {
      h2 {
        font-size: 22px;
      }
      h2 span {
        font-size: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
  @keyframes loop {
    0% {
      opacity: 1;
      transform: translateX(0) translateY(0) scale(1);
    }

    100% {
      opacity: 0;
      transform: translateX(-3.5%) translateY(-18.8%) scale(1.9);
    }
  }
`;
const Ftr = styled.div`
  margin-top: 200px;
`;

function About() {
  return (
    <motion.div
      className="container"
      variants={pageVariants}
      animate="visible"
      exit="hidden"
      initial="hidden"
      transition="transition"
    >
      <Nav />

      <AboutStyled>
        <div className="portrait">
          <div className="overlay"></div>
          <img src={Portrait} alt="Portrait" />
        </div>
        <div className="about-me">
          <h1>Hello</h1>
          <p>
            My name is Kristian, and I love to design and make things. I am a
            Full-stack designer & developer slowly mutating into Entrepreneur.
          </p>
          <br />
          <p>
            Through time, I have grown to really enjoy the process of finding
            and iterating on new ideas that are requiring me to constantly
            challenge the limits of my knowledge, seek new ways to solve
            problems, and help others in the process.
          </p>
          <br />
          <p>
            In my spare time, I fiddle with robotics. Besides that, I enjoy some
            deep sci-fi movies, good music, and some quality time with my
            family.
          </p>
        </div>
        <div className="map">
          <h2 class="education">Education</h2>
          <p class="education">
            I am currenly finishing my Software Engineer degree in Mostar in
            beautiful Bosnia and Herzegovina.
          </p>
          <svg
            width="883"
            height="859"
            viewBox="0 0 883 859"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M700.151 136.021L738.99 136.282C750.221 136.358 761.027 131.991 769.053 124.135L773.102 120.172C774.633 118.673 776.457 117.509 778.46 116.75L785.893 113.936C787.982 113.146 790.341 113.838 791.672 115.631C793.05 117.489 795.524 118.157 797.65 117.246L799.371 116.508C800.894 115.855 802.594 115.735 804.193 116.168L823.013 121.254C825.928 122.042 828.329 124.108 829.542 126.873C831.01 130.218 830.53 134.097 828.293 136.985L824.441 141.956C821.704 145.489 820.193 149.817 820.137 154.286L820.067 159.932C819.973 167.405 817.642 174.68 813.375 180.816L808.421 187.939C806.984 190.005 806.153 192.431 806.021 194.944L806.009 195.167C805.826 198.643 804.255 201.899 801.649 204.206L800.992 204.788C798.481 207.01 797.105 210.245 797.246 213.595C797.36 216.305 796.481 218.963 794.775 221.071L781.218 237.812C779.907 239.432 777.881 240.299 775.805 240.129C772.258 239.84 769.174 242.541 768.994 246.095L768.754 250.829C768.668 252.52 768.977 254.207 769.656 255.758L773.052 263.506C775.102 268.185 774.204 273.632 770.762 277.405L766.374 282.214C764.935 283.791 764.76 286.147 765.951 287.919L767.596 290.369C768.059 291.057 767.897 291.988 767.229 292.48C766.791 292.802 766.555 293.332 766.606 293.873L766.726 295.133C766.842 296.349 767.767 297.332 768.974 297.522C770.583 297.774 771.594 299.394 771.115 300.95L770.695 302.316C770.28 303.665 770.624 305.134 771.596 306.158L781.167 316.249C782.186 317.323 783.825 317.522 785.071 316.722C786.705 315.674 788.889 316.377 789.604 318.181L789.941 319.029C790.428 320.255 791.511 321.146 792.808 321.386L798.943 322.522C800.581 322.825 802.269 322.397 803.563 321.35C805.201 320.027 807.434 319.714 809.372 320.536L811.885 321.602C814.581 322.746 816.658 324.988 817.594 327.763L823.642 345.708C824.603 348.561 827.155 350.58 830.153 350.859C832.471 351.074 834.563 352.339 835.832 354.291L838.269 358.04C839.437 359.837 841.773 360.463 843.683 359.492L844.129 359.265C845.393 358.622 846.921 358.817 847.983 359.756L848.635 360.332C849.684 361.258 849.798 362.854 848.891 363.92C847.933 365.048 848.123 366.75 849.307 367.638L851.273 369.112C852.444 369.991 853.157 371.348 853.235 372.81C853.35 374.949 853.536 377.864 853.723 378.3C853.962 378.856 862.538 381.56 866.048 382.647C866.99 382.938 867.763 383.61 868.182 384.502L868.802 385.822C869.631 387.588 872.038 387.845 873.222 386.293C874.209 384.998 876.131 384.92 877.221 386.131L879.903 389.111C880.882 390.198 881.423 391.61 881.423 393.073V395.108C881.423 398.714 878.538 401.657 874.933 401.727C872.628 401.772 870.513 403.013 869.349 405.002L867.201 408.672C866.684 409.555 866.073 410.379 865.379 411.131L865.161 411.367C862.855 413.866 859.858 415.624 856.551 416.417L855.99 416.552C854.749 416.85 853.48 417.022 852.204 417.067L850.236 417.136C847.106 417.245 843.974 416.973 840.909 416.326L820.423 412L809.555 408.568C802.414 406.313 795.439 412.463 796.783 419.83C796.876 420.342 797.01 420.847 797.183 421.339L800.223 430L804.823 445.6C805.92 452.635 809.492 459.047 814.896 463.683L820.807 468.755C822.993 470.631 825.55 472.024 828.311 472.846L839.413 476.148C841.888 476.884 843.547 479.208 843.438 481.788C843.365 483.502 844.077 485.155 845.372 486.28L848.448 488.953C850.582 490.808 852.109 493.262 852.831 495.996L858.913 519.033C859.275 520.401 858.025 521.65 856.656 521.288C855.157 520.891 853.866 522.409 854.499 523.826L857.452 530.433C858.289 532.306 857.972 534.493 856.637 536.05L855.963 536.837C854.724 538.282 852.947 539.155 851.046 539.251L846.823 539.466C843.966 539.611 841.392 541.235 840.03 543.75L837.823 547.823C837.352 548.694 836.353 549.138 835.391 548.904C834.412 548.667 833.723 547.791 833.723 546.784V544.334C833.723 542.732 832.998 541.215 831.75 540.21L826.603 536.062C824.743 534.564 822.094 534.551 820.22 536.033C819.502 536.601 818.645 536.965 817.738 537.089L812.992 537.736C808.391 538.363 804.094 540.391 800.684 543.543L797.127 546.83C790.056 553.365 780.768 556.974 771.14 556.926L748.724 556.816C746.573 556.806 744.476 556.148 742.704 554.928C738.216 551.837 732.122 552.61 728.549 556.725L725.581 560.142C725.154 560.634 724.578 560.973 723.941 561.107C722.369 561.438 721.34 562.954 721.614 564.538L722.094 567.316C722.368 568.903 723.278 570.309 724.613 571.21L733.04 576.894C737.226 579.718 740.625 583.562 742.916 588.063L756.279 614.323C757.942 617.59 756.339 621.573 752.877 622.777C751.194 623.362 749.855 624.66 749.217 626.323L748.592 627.954C747.833 629.931 746.455 631.61 744.663 632.739L738.181 636.823C737.696 637.128 737.109 637.225 736.552 637.091C735.597 636.862 734.923 636.007 734.923 635.025V634.477C734.923 633.608 734.523 632.788 733.838 632.253L728.555 628.132C726.961 626.887 726.449 624.7 727.326 622.878C728.003 621.472 727.865 619.809 726.965 618.534L724.933 615.655C723.328 613.382 720.872 611.856 718.124 611.424L714.814 610.904C709.74 610.106 704.654 612.266 701.705 616.472C700.856 617.682 699.814 618.745 698.62 619.616L675.063 636.811C671.894 639.124 671.202 643.569 673.517 646.736C675.113 648.918 675.331 651.817 674.08 654.213L666.147 669.405C662.776 675.86 662.468 683.485 665.308 690.19L670.916 703.434C672.57 707.342 671.02 711.869 667.317 713.941C666.075 714.635 664.676 715 663.254 715H648.974C640.525 715 632.715 719.5 628.477 726.81L626.74 729.807C623.913 734.685 623.67 740.643 626.091 745.735L626.159 745.88C627.381 748.45 627.918 751.292 627.717 754.13L627.53 756.76C627.334 759.534 626.021 762.11 623.892 763.9C621.624 765.806 620.289 768.599 620.231 771.562L620.136 776.32C620.062 780.038 620.988 783.708 622.817 786.946L634.2 807.096C635.461 809.328 636.123 811.847 636.123 814.409V814.75C636.123 817.394 636.887 819.981 638.323 822.2L639.831 824.53C640.283 825.228 640.523 826.042 640.523 826.874C640.523 828.926 639.079 830.694 637.068 831.103L634.323 831.661C631.111 832.314 628.87 835.232 629.067 838.504C629.167 840.172 629.898 841.739 631.112 842.887L637.272 848.716C638.022 849.426 638.243 850.531 637.824 851.474C637.313 852.622 636.013 853.194 634.822 852.793L630.6 851.374C627.624 850.373 624.342 851.378 622.438 853.874L622.162 854.235C620.688 856.167 618.397 857.3 615.967 857.3C613.213 857.3 610.663 855.846 609.26 853.475L608.594 852.348C607.784 850.978 606.439 850.009 604.884 849.674C603.201 849.311 601.772 848.208 600.994 846.671L600.377 845.451C598.931 842.594 596.013 840.78 592.811 840.748L579.694 840.616C578.657 840.605 577.629 840.803 576.671 841.198C573.5 842.504 569.848 841.565 567.699 838.893L561.978 831.78C560.573 830.032 558.685 828.734 556.549 828.049L555.121 827.591C552.957 826.896 551.186 825.321 550.243 823.253C549.22 821.009 547.227 819.355 544.832 818.764L544.646 818.718C542.052 818.077 539.911 816.249 538.873 813.787L538.445 812.772C537.523 810.586 535.9 808.771 533.831 807.611L524.292 802.268C521.875 800.914 520.297 798.44 520.086 795.678C519.811 792.063 517.215 789.049 513.681 788.241L490.817 783.01C489.659 782.745 488.634 782.076 487.924 781.123C486.664 779.43 486.605 777.128 487.775 775.372L487.905 775.177C488.373 774.475 488.623 773.65 488.623 772.806C488.623 771.711 488.202 770.657 487.448 769.863L485.62 767.939C483.876 766.103 482.825 763.72 482.644 761.195L482.413 757.962C482.353 757.124 482.195 756.295 481.941 755.494L480.482 750.894C480.025 749.452 478.727 748.44 477.216 748.348C476.694 748.316 476.17 748.397 475.682 748.585L473.998 749.233C472.237 749.91 470.858 751.322 470.223 753.1L470.093 753.383C469.789 754.04 469.263 754.568 468.608 754.874C468.287 755.023 467.943 755.116 467.591 755.148L465.923 755.3C463.874 755.234 461.854 754.792 459.965 753.996L449.076 749.412C445.888 748.069 442.207 748.751 439.712 751.147L438.017 752.774C435.661 755.035 431.952 755.07 429.553 752.854C425.843 749.425 427.599 743.234 432.557 742.264L437.32 741.331C438.765 741.048 440.113 740.401 441.237 739.451L442.444 738.43C447.876 733.838 449.246 726.019 445.7 719.853L434.88 701.04C431.432 695.046 426.515 690.028 420.591 686.459L392.557 669.572C389.381 667.659 387.028 664.635 385.954 661.087C384.903 657.614 382.626 654.642 379.547 652.722L374.96 649.861C369.488 646.449 365.293 641.329 363.021 635.294L354.214 611.887C352.501 607.333 351.623 602.507 351.623 597.642V587.335C351.623 581.561 348.999 576.1 344.49 572.493C342.274 570.72 339.688 569.466 336.924 568.823L321.712 565.284C318.341 564.5 315.115 563.186 312.154 561.393C310.404 560.333 308.757 559.112 307.234 557.745L300.723 551.9C296.542 548.383 292.852 544.32 289.751 539.821L289.323 539.2L289.185 538.933C287.29 535.269 284.813 531.935 281.851 529.063C280.435 527.69 278.893 526.414 277.282 525.275C272.861 522.152 269.075 518.111 266.269 513.482L265.075 511.513C262.259 506.868 258.711 502.708 254.569 499.194L232.348 480.344C227.75 476.443 224.694 471.03 223.73 465.077C222.881 459.826 220.399 454.976 216.638 451.214L197.823 432.4L186.888 422.732C183.261 419.525 180.078 415.849 177.423 411.8L172.523 403.3L171.534 400.957C170.953 399.581 169.826 398.51 168.423 398L160.923 394.5L157.627 393.224C153.675 391.694 150.119 389.294 147.223 386.2L142.423 379.7C137.445 374.125 133.23 367.913 129.887 361.228L129.723 360.9L124.023 352L119.496 346.68C114.628 340.96 111.6 333.904 110.809 326.434L110.653 324.956C110.368 322.267 109.686 319.635 108.628 317.146L104.976 308.549C104.181 306.677 104.241 304.551 105.142 302.728C106.68 299.613 105.695 295.842 102.829 293.878L101.325 292.848C98.6611 291.022 97.1666 287.92 97.4 284.699L97.6953 280.624C97.9049 277.732 96.9364 274.877 95.0099 272.71C93.3386 270.83 92.3801 268.423 92.3015 265.908L92.1624 261.457C91.9476 254.582 88.6715 248.163 83.2303 243.956L67.965 232.152C66.0363 230.661 64.8646 228.394 64.7631 225.958C64.6734 223.805 65.4283 221.702 66.8669 220.097L67.1059 219.831C70.1537 216.431 70.2271 211.305 67.278 207.819L49.8196 187.187C48.7585 185.933 47.8376 184.566 47.0734 183.112L45.8052 180.699C42.8457 175.068 37.1086 171.442 30.7522 171.184C26.2358 171.002 21.9576 169.109 18.784 165.891L9.4634 156.438C5.39083 152.307 4.46372 146.014 7.17209 140.885C8.50409 138.362 8.98993 135.478 8.55791 132.658L4.27344 104.692C3.95554 102.617 5.17899 100.615 7.17048 99.9509C9.02817 99.3317 10.2349 97.5378 10.1082 95.5838L9.75785 90.1783C9.66879 88.8043 9.33011 87.458 8.75841 86.2054L4.41465 76.6881C2.19936 71.8344 3.26377 66.1129 7.07636 62.3805C9.11437 60.3854 10.4193 57.7608 10.7797 54.9317L13.2835 35.2812C13.4427 34.0311 13.7428 32.8029 14.178 31.6202C16.1932 26.1429 20.9181 22.1122 26.6445 20.9853L38.2075 18.7099C40.7204 18.2154 43.2932 19.2143 44.8141 21.2749C46.8967 24.0965 50.8658 24.774 53.8044 22.8599C56.8931 20.848 61.0757 21.6542 63.1345 24.7119L77.7942 46.4837C78.9724 48.2336 79.468 50.3547 79.1872 52.4455C78.8895 54.6613 79.4645 56.9062 80.7908 58.7061L81.4331 59.5778C83.2309 62.0176 86.1591 63.3588 89.1808 63.1263C91.8602 62.9202 94.4866 63.9516 96.3099 65.9258L108.903 79.5618C109.802 80.5353 110.216 81.8611 110.032 83.1734C109.694 85.5704 111.35 87.7922 113.743 88.1552L122.324 89.4568C125.482 89.9359 128.707 89.2525 131.4 87.5335L135.898 84.6615C141.701 80.9569 145.897 75.2035 147.65 68.546L151.135 55.3135C151.88 52.4837 153.955 50.1933 156.698 49.1735C158.894 48.3569 160.685 46.7155 161.69 44.5986L169.423 28.3L170.032 26.414C170.932 23.6227 172.762 21.2244 175.217 19.6193C177.801 17.9301 180.907 17.2296 183.966 17.6467L202.632 20.1921C204.619 20.463 206.565 20.9766 208.426 21.7212C211.201 22.8311 214.155 23.4244 217.143 23.4721L227.032 23.6299C229.855 23.675 232.557 24.7833 234.599 26.7335L235.127 27.2383C237.038 29.0636 239.621 30.0138 242.259 29.8619L246.514 29.6171C249.533 29.4433 251.816 26.8147 251.565 23.8005C251.537 23.4676 251.54 23.1327 251.575 22.8004L251.959 19.0842C252.217 16.5925 254.42 14.7641 256.916 14.9693C258.639 15.1109 260.296 14.2754 261.207 12.8059L266.144 4.8397C267.493 2.66166 270.276 1.86462 272.575 2.99794C274.511 3.95288 275.611 6.04758 275.297 8.18378L275.278 8.31135C274.763 11.8242 277.871 14.794 281.356 14.1194L282.221 13.952C283.078 13.7862 283.961 13.8166 284.805 14.0411L292.119 15.9877C293.986 16.4844 294.811 18.6682 293.74 20.2751C292.784 21.7095 293.327 23.6586 294.888 24.3906L325.565 38.7781C327.832 39.8412 330.335 40.2991 332.832 40.107L343.05 39.321C344.681 39.1956 345.951 37.8541 345.986 36.2191C346.043 33.6248 349.015 32.1864 351.085 33.7513L363.558 43.1807C365.787 44.8655 368.566 45.6547 371.347 45.3926L379.626 44.6127C380.41 44.5389 381.161 44.2599 381.803 43.804L383.835 42.3614C385.621 41.0928 388.118 42.1479 388.453 44.313C388.668 45.701 389.833 46.7444 391.236 46.8061L395.134 46.9774C396.821 47.0515 398.295 48.1387 398.865 49.7283C399.661 51.9504 402.145 53.0646 404.334 52.181L407.759 50.7985C409.879 49.9427 412.301 50.3699 414 51.8992C414.801 52.6197 415.781 53.1107 416.837 53.3204L423.497 54.6426C426.607 55.26 429.728 53.6295 430.997 50.7239C431.997 48.4329 434.182 46.8826 436.675 46.695L438.007 46.5947C440.504 46.4069 442.965 47.2707 444.796 48.9774L456.722 60.0942C457.587 60.9003 458.821 61.175 459.946 60.8121C462.084 60.1223 464.263 61.7519 464.205 63.998L464.183 64.8562C464.146 66.2968 464.913 67.6384 466.173 68.3377L472.861 72.0488C478.605 75.2369 485.695 74.7096 490.905 70.7068L494.568 67.8924C497.305 65.7899 499.545 63.111 501.131 60.0458L506.223 50.2L508.815 46.412C509.644 45.2008 510.969 44.4214 512.43 44.2854C513.708 44.1665 514.982 44.5505 515.982 45.3558L519.014 47.7978C520.494 48.9903 522.638 48.8639 523.968 47.5057C525.302 46.1427 527.455 46.0208 528.935 47.2244L531.11 48.9935C532.641 50.2387 532.956 52.4526 531.833 54.0752C530.878 55.4534 530.947 57.2956 532 58.5997L534.223 61.3524C535.691 63.1702 537.843 64.304 540.172 64.4876L552.201 65.4357C555.109 65.6649 557.955 64.5064 559.876 62.3109L560.867 61.1781C562.277 59.567 562.79 57.3589 562.235 55.2913C561.466 52.4234 562.765 49.4022 565.376 47.988L566.2 47.542C567.446 46.8668 568.883 46.6281 570.28 46.8639L574.222 47.5288C575.445 47.7349 576.277 48.8816 576.094 50.1076C575.896 51.4411 576.894 52.6538 578.24 52.7157L582.896 52.9298C583.728 52.968 584.358 53.6933 584.281 54.5219C584.198 55.4067 584.919 56.1591 585.806 56.1135L608.87 54.9288C611.212 54.8085 613.11 56.8035 612.873 59.1363C612.721 60.6355 613.463 62.0843 614.768 62.8372L630.5 71.9096C631.168 72.2952 631.933 72.4818 632.704 72.4475L634.709 72.3584C635.473 72.3244 636.107 71.7558 636.223 71L636.323 70.2V69.3V68.4V67.1L636.423 65.3C636.479 64.3568 637.281 63.6325 638.224 63.6729L642.012 63.8353C643.002 63.8777 643.985 63.6561 644.86 63.1933L649.039 60.9845C649.979 60.4876 651.092 60.436 652.074 60.8436L652.905 61.1889C654.452 61.831 655.083 63.6863 654.247 65.1377C653.221 66.9187 654.42 69.1577 656.47 69.2926L664.462 69.8184C666.248 69.9358 667.938 70.6666 669.247 71.8869L678.801 80.794C679.863 81.7845 680.301 83.275 679.944 84.6828C679.318 87.1534 681.143 89.5677 683.691 89.639L687.106 89.7345C690.318 89.8243 692.793 92.5966 692.52 95.798L692.459 96.5047C692.372 97.5263 692.693 98.5409 693.353 99.326C694.967 101.248 694.356 104.174 692.107 105.289L690.243 106.213C687.408 107.618 686.336 111.116 687.897 113.867L688.048 114.134C688.556 115.029 688.816 116.042 688.803 117.07L688.709 124.353C688.656 128.466 690.801 132.296 694.336 134.4C696.095 135.448 698.103 136.007 700.151 136.021Z"
              stroke="url(#paint0_linear)"
              stroke-width="3"
            />
            <g className="point">
              <circle
                opacity="0.2"
                cx="474.917"
                cy="608.375"
                r="27.2293"
                fill="url(#paint1_linear)"
              />
            </g>
            <circle
              cx="474.917"
              cy="608.375"
              r="27.2293"
              fill="url(#paint2_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="462.19"
                y1="851.988"
                x2="97.0742"
                y2="-94.6842"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BBBBBB" />
                <stop offset="1" stop-color="#BBBBBB" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="474.917"
                y1="581.146"
                x2="474.917"
                y2="635.605"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E73C7E" />
                <stop offset="0.588542" stop-color="#23A6D5" />
                <stop offset="1" stop-color="#23D5AB" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="474.917"
                y1="581.146"
                x2="474.917"
                y2="635.605"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E73C7E" />
                <stop offset="0.9999" stop-color="#23A6D5" />
                <stop offset="1" stop-color="#23D5AB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="exp-items">
            <div className="exp-item">
              <h2>
                Freelance <span>Remote</span>
              </h2>
              <p>
                Managed a variety of cross-platform projects ranging from simple
                product websites to complex software solutions. I am used to
                working remotely and being responsible for the UI & UX design
                decision-making and consultancy, as well as diging into code.
              </p>
              <p className="date">2014 - Present</p>
            </div>
            <div className="exp-item">
              <h2>
                BrakePoint <span>Mostar, Bosnia and Herzegovina</span>
              </h2>
              <p>
                Worked with a team of awesome developers and managed a wide
                variety of design projects from problem analysis to publishing.
                Got a feel of working in-house and close to people in an agile
                environment.
              </p>
              <p className="date">Feb 2019 - Aug 2019</p>
            </div>
            <div className="exp-item">
              <h2>
                Dvlpmt Team <span>Belgrade, Serbia</span>
              </h2>
              <p>
                I was a part of an small, but strong team. My responsibilities
                we're mainly on the design part of the project. Depending on the
                clients needs, the responsibilities ranged from branding to UI &
                UX Design.
              </p>
              <p className="date">2016 - 2018</p>
            </div>
            <div className="exp-item">
              <h2>
                DataPrint <span>Zivinice, Bosnia and Herzegovina</span>
              </h2>
              <p>
                My first steps in the industry as a product designer, learning
                the basics of design, product markets, and working with clients.
              </p>
              <p className="date">2012 - 2014</p>
            </div>
          </div>
          <motion.a
            className="see-more-btn"
            href="/"
            variants={magicHov}
            whileHover="hover"
            initial="initial"
          >
            See more on Linkedin
            <motion.svg
              variants={magicHove}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2624 13.8059C14.3049 14.3675 14.7456 14.7506 15.31 14.6804C15.8743 14.6103 16.2795 14.1502 16.237 13.5886L15.7922 5.35687L7.53295 4.8846C6.97135 4.84213 6.48244 5.27612 6.44116 5.81164C6.37103 6.37601 6.78151 6.84417 7.31565 6.85918L12.8506 7.14519L4.97717 15.0187C4.65993 15.3359 4.64748 15.8426 4.94951 16.1446C5.25155 16.4467 5.75823 16.4342 6.07547 16.117L13.9201 8.27233L14.2624 13.8059Z"
                fill="white"
              />
            </motion.svg>
          </motion.a>
        </div>
      </AboutStyled>
      <Ftr>
        <Footer />
      </Ftr>
    </motion.div>
  );
}
export default About;
