## LoginModal Custom Element Documentation

The `LoginModal` custom element is a reusable web component that provides a login modal with a customizable form.

### Installation

To use the `LoginModal` custom element, you can import the element's JavaScript file into your HTML page using a `script` tag:

```html
<script src="path/to/LoginModal.js"></script>
```

### Usage

Once the `LoginModal` custom element is imported into your HTML page, you can use it in your HTML code just like any other HTML element:

```html
<login-modal>
  <h2>Login Form</h2>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <button type="submit">Submit</button>
</login-modal>
```
In order to open the modal, a button with the ```open``` class must be used in the HTML file.

```html
<button class="open">Open Modal</button>
```

The `LoginModal` custom element takes a slot as its content, which can contain any HTML code that you want to include in the modal's form.

### Attributes

The `LoginModal` custom element has a single attribute:

- `visible`: A boolean attribute that determines whether the login modal is visible on the page. If the attribute is present, the modal is visible; if the attribute is absent, the modal is hidden.

You can set the `visible` attribute using JavaScript:

```javascript
const modal = document.querySelector("login-modal");
modal.visible = true; // shows the modal
modal.visible = false; // hides the modal
```

You can also listen for the `open` and `close` events to detect when the modal is shown or hidden:

```javascript
const modal = document.querySelector("login-modal");
modal.addEventListener("open", () => {
  console.log("Modal opened");
});
modal.addEventListener("close", () => {
  console.log("Modal closed");
});
```

### Styling

The `LoginModal` custom element comes with some default styling that you can customize using CSS.

To style the modal's form, you can use the `.login-form` class:

```css
login-modal .login-form {
  /* your custom styles here */
}
```

To style the modal's close button, you can use the `.close` class:

```css
login-modal .close {
  /* your custom styles here */
}
```

To style the modal's wrapper (the gray background that covers the page when the modal is shown), you can use the `.wrapper` class:

```css
login-modal .wrapper {
  /* your custom styles here */
}
```

