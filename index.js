// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

//Reusable Utility Function
function createElement(tag, attributes = {}) {
  const element = document.createElement(tag)
  for (const [key, value] of Object.entries(attributes)) {
    if (key === 'textContent') {
      element.textContent = value
    } else {
      element.setAttribute(key, value)
    }
  }
  return element
}

//DOM Manipulation Functions
function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId)
  if (container) {
    container.textContent = content
  } else {
    showError(`Container with ID "${containerId}" not found`)
  }
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  } else {
    showError(`Element with ID "${elementId}" not found`)
  }
}

//Simulate User Behavior
function simulateClick(containerId, message) {
  // Pretend a user clicked a button
  addElementToDOM(containerId, message)
}

//Error Handling + Form Submission
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId)
  const input = form?.querySelector('#user-input')
  const errorMessage = document.getElementById('error-message')

  //Hide previous error message if any
  if (errorMessage) errorMessage.classList.add('hidden')

  if (!input || input.value.trim() === '') {
    showError('Input cannot be empty')
    return
  }

  //Update the DOM with the input value
  addElementToDOM(containerId, input.value)
  input.value = ''
}

//Helper: Show an error message
function showError(message) {
  const errorMessage = document.getElementById('error-message')
  if (errorMessage) {
    errorMessage.textContent = message
    errorMessage.classList.remove('hidden')
  }
}

//Export for Jest
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
  createElement,
}
