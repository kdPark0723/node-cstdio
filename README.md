# node-cstdio

Implementation for C language's stdio for node.js

​    

## Install

```shell
npm i cstdio
```

​    

## Api

### printf

```js
printf(format, ...args);
```

​    

### fprintf

```js
fprintf(write_stream, format, ...args);
```

​    

### sprintf

```js
sprintf(format, ...args);
```

​    

### scanf

```js
scanf(format, ...args);
```

​    

### sscanf

```js
scanf(buffer, format, ...args);
```

​    

### doc

See the following packages

- printf: https://www.npmjs.com/package/printf
- scanf: https://www.npmjs.com/package/scanf

​    

## Example

### Hello, world!

```js
const cstdio = require('cstdio');

cstdio.printf('Hello, world!');
```

​    

### Scan and print

```js
const cstdio = require('cstdio');

const input = cstdio.scanf("%s");
cstdio.printf("input is %s", input);
```

