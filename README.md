# proto.school

If you're just interested in doing the workshops check
out https://proto.school.

## Developing Lessons

First, check out this repository and run the dev server locally.

```
npm install
npm run serve
```

Next copy `components/lessons/boiler.vue` to the number of your lesson.
Example:

```
cp components/lessons/boiler.vue components/lessons/03.vue
```

Replace anything in the boiler that reads "REPLACEME".

Create a `.md` file alongside your `.vue` and add the markdown formatted text
of the lesson.

Add your lesson to the routes in `main.js` and to the list of lessons in `Home.vue`.

## Boiler Explained

```javascript
import Lesson from '../Lesson'
import text from './REPLACEME.md'

const validate = async (result, ipfs) => {
  if (result) {
    return {'success': 'Happy Message!'}
  } else {
    return {'fail': 'Sad but useful message :('}
  }
}

// const code = `const run = async () => {}
// return run
// `

export default {
  components: {
    Lesson
  },
  data: () => {
    return {
      text, validate//, code
    }
  }
}
```

### validate(result, ipfs)

When the sample code area is eval'd it must return a function, usually an
async function. The result of that function is passed to your validation
function as `result`.

Each time the user's code is eval'd they get a new, clean, IPFS instance.
That instance is passed as the second argument, `ipfs`.

Validate must return an object with one of two properties: `fail` or
`success`. Each property should be used to give a detailed message of *why*
the sample code failed in order to help the user along.

### code

Code is a string property. It's the sample code used to populate the code
editor. If not set there's a default, used in the first lesson, that is used
instead.
