// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7]

// rest example
const [one, two, ...rest] = numbers

// better default example
const domain = 'example.org'

const [host, tld = 'net'] = domain.split('.')

// spread
const oddNumbers  = [1, 3, 5]
const evenNumbers = [2, 4, 6]

const combined = [ ...evenNumbers, ...oddNumbers, 6, 7, ]

// Objects
//////////////////
const profile = {
  first: 'Alex',
  last: 'Casio',
  occupation: 'secret agent',
  hrInfo: {
    employeeID: 17,
    departmentID: 34,
    payGrade: 'G:55',
    yearsOfService: 17
  },
  hobbies: [
    'drawing',
    'fortnite',
    'target practice',
    'fencing',
    'martini'
  ],
  address: 'Its a secret'
}

const { first, last } = profile
