export const pureNavbarCode = `
<nav class="navbar">

  <div class="container">

    <div class="logo">
      MyBrand
    </div>

    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Blog</a></li>
    </ul>

    <button class="contact-btn">
      Contact
    </button>

  </div>

</nav>

<style>

.navbar {
  background: white;
  border-bottom: 1px solid #eee;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
}

.contact-btn {
  background: black;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
}

</style>
`;