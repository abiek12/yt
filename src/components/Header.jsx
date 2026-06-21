import ButtonList from "./ButtonList";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <div>
        <Search />
        <div>Right Itmes</div>
      </div>
      <ButtonList />
    </div>
  );
};

export default Header;
