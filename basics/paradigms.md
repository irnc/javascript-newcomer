- How to write in JavaScript?
  - Which programming paradigms JavaScript as a language endorses?

> A programming paradigm is a fundamental style of computer programming,
> serving as a way of building the structure and elements of computer programs.
>
> -- _Programming paradigm_ article on Wikipedia

So the paradigm determines the thought process you undergo when solving the
problem. Different problems require different models of thought.

## Linguistic definition

paradigm, noun.

> a set of linguistic items that form mutually exclusive choices in particular
> syntactic roles.
>
> _English determiners form a paradigm: we can say “a book” or “his book” but
> not “a his book.”_
>
> -- Google Translate

---

Open questions:

- Should there be a _lingua franca_ for computation? Or should specialized
  languages be created for each domain? One language and a lot of DSLs?
    - Think about national languages versus _lingua franca_ with varying
      dictionaries for different domains.

## Imperative

- You declare how to solve the problem.

### Procedural

- Using the language you describe, step by step, exactly the procedure that
  should, according to the particular programmer at least, be followed to solve
  a specific problem. (ref Wikipedia)

### Literate programming

- _a form of imperative programming_ (ref Wikipedia)
- see Jasmine

## Declarative

- You declare what the problem is.

> [...] the computer is told what the problem is, not how to solve the problem –
> the program is structured as a collection of properties to find in the
> expected result, not as a procedure to follow.
>
> (ref Wikipedia)

### Functional

- _a subset of declarative programming_ (ref Wikipedia)

> Programs written using this paradigm use functions, blocks of code intended to
> behave like mathematical functions. Functional languages discourage changes in
> the value of variables through assignment, making a great deal of use of
> recursion instead.
>
> (ref Wikipedia)

### Logic

- _[...] views computation as automated reasoning over a corpus of knowledge._
  (ref Wikipedia)

## Object-oriented

- You decompose system into a collection of objects interacting in explicitly
  defined ways.

## Symbolic

- _[...] describes programs able to manipulate formulas and program components
  as data._ (ref Wikipedia)
- LISP, Prolog

How this matches to `Symbol` in JavaScript?

- http://stackoverflow.com/questions/21724326/why-bring-symbols-to-javascript

## Machine code

- WebAssembly
- asm.js

## Additional Resources

- https://en.wikipedia.org/wiki/Programming_paradigm
- http://cs.brown.edu/~sk/Publications/Papers/Published/sk-teach-pl-post-linnaean/paper.pdf
- http://www.jswebtools.org/
  - https://github.com/brownplt
