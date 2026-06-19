const SideBarItem = ({ title, type, src }) => {
  return (
    <div>
      <button>
        <div>Logo</div>
        <div>{title}</div>
      </button>
    </div>
  );
};

export default SideBarItem;
