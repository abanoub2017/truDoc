<template>
  <div class="footer py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="intro">
            <img
              class="logo pt-3 pb-5"
              src="@/assets/img/trudoc@2x.png"
              alt=""
            />
            <div class="social">
              <img class="mx-3 pt-3" src="@/assets/img/facebook.svg" alt="" />
              <img class="mx-3 pt-3" src="@/assets/img/instgram.svg" alt="" />
              <img class="mx-3 pt-3" src="@/assets/img/twitter.svg" alt="" />
            </div>
            <div class="copy">
              © 2019 AXA All right reseved.
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="contact-us">
            <h4 class="title">Contact Us</h4>
            <ul class="list-unstyled p-0">
              <li>
                <img  class="mx-2" src="@/assets/img/phone-2.svg" alt="" />
                <span>Hotline:  2564184841</span>
              </li>
              <li>
                <img  class="mx-2" src="@/assets/img/email.svg" alt="" />
                <span> Email:  exapm@gamil.com</span>
              </li>
              <li>
                <img  class="mx-2" src="@/assets/img/address-2.svg" alt="" />
                <span> Address: Office 155 , st syed </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-3">
          <div class="tru-doc">
            <h4 class="title">TRUDOC24X7</h4>
            <ul class="list-unstyled  p-0">
              <li>
                About Us
              </li>
              <li>
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="quick">
            <h4 class="title">QUICK ACCESS</h4>
            <ul class="list-unstyled p-0">
              <li>
                Book an appointment
              </li>
              <li>
                Contact us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  .title {
        color: #00acc5 !important;
    font-weight: 400;
    font-size: 16px !important;
    text-transform: uppercase;
  }
  .intro {
    .logo {
      height: 100%;
      width: 88%;
    }
    .social {
      img {
      }
    }
    .copy {
      font-size: 12px;
      color: #646f86;
      padding: 15px;
    }
  }
  .contact-us {
    ul {
      li {
        img {
        }
        span {
          color: #646f86;
    font-weight: 400;
    line-height: 2;
        }
      }
    }
  }
  .tru-doc,
  .quick {
    ul {
      li {
        color: #646f86;
    font-weight: 400;
    line-height: 2;
      }
    }
  }
}
</style>
