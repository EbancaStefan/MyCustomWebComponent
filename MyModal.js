class LoginModal extends HTMLElement {
  
  get visible() {
    return this.hasAttribute("visible");
  }

  set visible(value) {
    if (value) {
      this.setAttribute("visible", "");
    } else {
      this.removeAttribute("visible");
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this._attachEventHandlers();
  }

  static get observedAttributes() {
    return ["visible"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "visible" && this.shadowRoot) {
      if (newValue === null) {
        this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
        this.dispatchEvent(new CustomEvent("close"));
      } else {
        this.shadowRoot.querySelector(".wrapper").classList.add("visible");
        this.dispatchEvent(new CustomEvent("open"))
      }
    }
  }
  
  _render() {
    const wrapperClass = this.visible ? "wrapper visible" : "wrapper";
    const container = document.createElement("div");
    container.innerHTML = `

      <style>
    .login-form {
        padding: 10px;
        width: 20%;
        background-color:rgb(218, 212, 202);
        /* border-radius: 25px; */
        border: 2px solid white;
        margin: 5% auto 15% auto;
    }

    .container {
        text-align: center;
        margin: 24px 0 12px 0;
        position: relative;
    }

    .close {
        position: absolute;
        right: 0;
        bottom: 0;
        color: #000;
        font-size: 35px;
        font-weight: bold;
    }

    .close:hover {
        color: red;
        cursor: pointer;
    }
    
    .wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: gray;
      opacity: 0;
      visibility: hidden;
      transform: scale(1.1);
      transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
      z-index: 1;
    }

    .visible {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
    }
    
      </style>
      <div class='${wrapperClass}'>
        <form class="login-form"> 
            <div class="container">
                <span class="close" title="Close Modal">&times;</span>
            </div>
            <slot></slot>
        </form>
      </div>`;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(container);

  }

  _attachEventHandlers() {
    const closeButton = this.shadowRoot.querySelector(".close");
    closeButton.addEventListener('click', e => {
      this.dispatchEvent(new CustomEvent("close"))
      this.removeAttribute("visible");
    });

    const modal = document.querySelector("login-modal");

    open = document.querySelector(".open");
    open.addEventListener("click", function () {
      modal.visible = true;
    })
  }
}

window.customElements.define('login-modal', LoginModal);