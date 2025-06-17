const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border bg-teal-200">
      <h1>Dashboard</h1>
      <div className="flex items-center gap-4">
        <h2>Profile</h2>
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Header;
