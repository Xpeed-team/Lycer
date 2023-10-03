function Header() {
document.getElementById("HEADER").innerHTML=`<nav class="navbar navbar-expand-lg fixed-top navbar-light">
<div class="container">
  <a class="navbar-brand" href="index.html"> <img src="./chnage/images/Logo.png" height="40px" width="60px"
      class="img-fluid rounded-4" alt=""></a>
  <button class="navbar-toggler" type="button" id="navbarNavBtn" data-bs-toggle="collapse"
    data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-line"></span>
    <span class="navbar-toggler-line"></span>
    <span class="navbar-toggler-line"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html#features">FEATURES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html#testimonials">TESTIMONIALS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html#pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="index.html#Info">INFO</a>
      </li>
    </ul>
  </div>
</div>
</nav>`
}
Header();
function Footer() {
  document.getElementById("FOOTER").innerHTML  = `<div class="container">
  <div class="row justify-content-between align-items-start">
    <div class="col-lg-4">
      <a class="navbar-brand footer-logo" href="index.html">lycer</a>
      <p class="footer-description">
        We have devised a water quality index for our country, Iraq, through
        laboratories and expertise, where we have made a new mathematical
        method that shortens the time and effort for specialists to calculate the
        index and facilitates the announcement of the state of water quality for
        decision -makers and non-specialized people. Eventually, this helps well
        in protecting the surface water.
      </p>
    </div>
    </li>
    <div class="col-lg-7">
      <h3 class="footer-links-title">Important Links</h3>
      <ul class="list-unstyled d-flex justify-content-between position-relative" style="top: 50px;">
        <li class="footer-link">
          <a href="index.html">Home</a>
        </li>
        <li class="footer-link">
          <a href="index.html#features">Features</a>
        </li>
        <li class="footer-link">
          <a href="index.html#testimonials">Testimonials</a>
        </li>
        <li class="footer-link">
          <a href="index.html#pricing">Pricing</a>
        </li>
        <li class="footer-link">
          <a href="index.html#Info">Info</a>
        </li>
      </ul>
    </div>

    <div class="footer-text text-center mt-5 py-3">
        <a href="https://xpeed-team.github.io/eco/">Copy right @2023 from <span class="fw-bold">eco soloutions</span></a>
    </div>
  </div>
</div>`;
}
Footer();


