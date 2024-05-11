const accountsDatabase = {
  'toonigy.github.io/Login.html': [],
  'toonigy.github.io/Signup.html': []
};

function signUp(username, password) {
  accountsDatabase['toonigy.github.io/Signup.html'].push({ username, password });
}

function signIn(username, password) {
  const userAccount = accountsDatabase['toonigy.github.io/Signup.html'].find(account => account.username === username && account.password === password);
  if (userAccount) {
    console.log('User logged in successfully!');
  } else {
    console.log('Invalid username or password. Please try again.');
  }
}

// Example Usage
signUp('exampleUser', 'examplePassword');
signIn('exampleUser', 'examplePassword');
