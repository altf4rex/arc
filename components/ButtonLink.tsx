import Link from "next/link";

const ButtonLink = ({slug, text}: {slug: string, text: string}) => {
  return (
    <Link
      href={slug}
      className="main-link relative flex"
    >
      <p className="mr-10 font-bold whitespace-nowrap text-sans text-main text-base ">
        {text}
      </p>
      <svg
        width="13"
        height="22"
        viewBox="0 0 13 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.322 11.0245L1.00001 0.999995" stroke="white" />
        <path d="M1 21L12.322 10.9755" stroke="white" />
      </svg>
    </Link>
  );
};

export default ButtonLink;
