interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h1 className="my-10 font-bold text-3xl text-center">
      {text}
    </h1>
  );
};

export default PageTitle;