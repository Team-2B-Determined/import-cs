export default {
  "Selection Sort":{
  "runtime": "n^2",
  "description": "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.",
  "href": "algorithms/sorting",
  "tags": [
    "sort"
  ]
},
"Merge Sort": {
    "runtime":"n log(n)",
    "description": "Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. It is an efficient, general-purpose, and comparison-based sorting algorithm.",
    "href": "algorithms/sorting",
    "tags": ["sort"]
  },
"Home": {
  "description": "Home page with links to various part of the importCS website.",
  "href": "/",
  "tags": [
    "home"
  ]},
  "Account": {
    "description": "Settings such as font, dark mode, and hotkey redirects.",
    "href": "/account",
    "tags": [
      "account"
    ]
  },
  "History": {
    "description": "Keeps track of all calculations submitted in the website.",
    "href": "/history",
    "tags": [
      "history"
    ]
  },
  "Data Structures": {
    "description": "List of all available data structures this website offers to calculate.",
    "href": "/datastructures",
    "tags": [
      "datastructures",
      "stack",
      "binary search tree",
      "linked-list"
    ]
  },
  "Algorithms": {
    "description": "List of all available algorithms this website offers to calculate.",
    "href": "/algorithms",
    "tags": [
      "algorithms",
      "sorting"
    ]
  },
  "Computations": {
    "description": "List of all available computations this website offers to calculate.",
    "href": "/computations",
    "tags": [
      "computations",
      "twos-complement",
      "addition"
    ]
  },
  "Conversions": {
    "description": "List of all available conversions this website offers to calculate.",
    "href": "/conversions",
    "tags": [
      "conversions",
      "binary",
      "decimal",
      "hexadecimal"
    ]
  },
  "Registration": {
    "description": "Registration page to create an account",
    "href": "/register",
    "tags": [
      "register"
    ]
  },
  "Login": {
    "description": "Login page to sign in to an existing account.",
    "href": "/login",
    "tags": [
      "login"
    ]
  },
  "Binary Search": {
    "runtime": "log n",
    "href": "#",
    "description": "A search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array. ",
    "tags": [
      "search"
    ]
  }
} as Record<string, Record<string,any>>