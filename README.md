# sugar.js

`sugar.js` is es module.

## import

main.js

```js
import {head, body, node, create, select, attr, style} from './.js';
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="./main.js" type="module"></script>
</head>
<body>
</body>
</html>
```

## func

### node(tagName, attr, ...any)

Create shadow dom.

```js
node('div', {id: 'foo', class: 'bar baz', name: 'qux'});

node('div', '#foo.bar.baz[name=qux]');


node('label', '', 
	node('input', '[type=checkbox]:checked#foo')
);
```

```js
body.append(
	node('div', '', 
		node('p', '.foo', 'hello'),
		node('p', '.bar', 'world'),
	)
);
```

### select

```js
select.id('foo');
select.cls('bar');
select.q('.select[type=password]')
select.qq(':checked')
```

### style

```js
// create style element
style.add('myStyle', `
	#foo {
		color: orange
	}
	.bar {
		font-size: 2rem
	}
`);

// replace target style element
style.rep('myStyle', `

`);

// replace target style remove
style.rm('myStyle');
```
