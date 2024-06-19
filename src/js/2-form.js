function saveToLS(key, value) {
  const json = json.stringify(value);
  localStorage.setItem(key, jsonData);
}
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
const formData = {
  email: '',
  message: '',
};
const loginForm = document.querySelector('.feedback-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('All form field must be filled in');
  } else {
    console.log({ email, message });
    form.reset();
  }
}
