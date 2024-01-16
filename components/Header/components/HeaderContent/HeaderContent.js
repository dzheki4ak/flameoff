import Button from '@/components/Button/Button';

const HeaderContent = ({ btnClickFn, mainText, secondaryText }) => {
  return (
    <div className="header__content_text header__text">
      <h1 className="header__text_main">{mainText}</h1>
      <p className="header__text_intro">{secondaryText}</p>
      <Button clickFn={btnClickFn} text="Get a free quote" />
    </div>
  );
};

export default HeaderContent;
