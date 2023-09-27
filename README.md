# mock-data-generator

Generate mock data in Swedish
<a name="module_address"></a>

## Test

`npm run test`

## Generate docs

`npm run docs`

## Modules

<dl>
<dt><a href="#module_address">address</a></dt>
<dd></dd>
<dt><a href="#module_name">name</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#boolean">boolean()</a> ⇒ <code><a href="#boolean">boolean</a></code></dt>
<dd><p>True or false</p>
</dd>
<dt><a href="#email">email([options])</a> ⇒ <code>string</code></dt>
<dd><p>A random lower case email address</p>
</dd>
<dt><a href="#lorem">lorem([n])</a> ⇒ <code>String</code></dt>
<dd><p>Lorem ipsum sentences</p>
</dd>
<dt><a href="#number">number([min], [max])</a> ⇒ <code><a href="#number">number</a></code></dt>
<dd><p>Generates a random number</p>
</dd>
<dt><a href="#phone">phone()</a> ⇒ <code>string</code></dt>
<dd><p>A random phone number</p>
</dd>
</dl>

<a name="module_address"></a>

## address

- [address](#module_address)
  - [.city()](#module_address.city) ⇒ <code>string</code>
  - [.streetAddress()](#module_address.streetAddress) ⇒ <code>string</code>
  - [.zipCode()](#module_address.zipCode) ⇒ <code>string</code>

<a name="module_address.city"></a>

### address.city() ⇒ <code>string</code>

The name of a random city

**Kind**: static method of [<code>address</code>](#module_address)
<a name="module_address.streetAddress"></a>

### address.streetAddress() ⇒ <code>string</code>

A random street address

**Kind**: static method of [<code>address</code>](#module_address)
<a name="module_address.zipCode"></a>

### address.zipCode() ⇒ <code>string</code>

A random five digit zip code

**Kind**: static method of [<code>address</code>](#module_address)
<a name="module_name"></a>

## name

- [name](#module_name)
  - [~firstName()](#module_name..firstName) ⇒ <code>string</code>
  - [~lastName()](#module_name..lastName) ⇒ <code>string</code>
  - [~name()](#module_name..name) ⇒ <code>string</code>

<a name="module_name..firstName"></a>

### name~firstName() ⇒ <code>string</code>

A random first name

**Kind**: inner method of [<code>name</code>](#module_name)
<a name="module_name..lastName"></a>

### name~lastName() ⇒ <code>string</code>

A random last name

**Kind**: inner method of [<code>name</code>](#module_name)
<a name="module_name..name"></a>

### name~name() ⇒ <code>string</code>

A first name and a last name

**Kind**: inner method of [<code>name</code>](#module_name)
<a name="boolean"></a>

## boolean() ⇒ [<code>boolean</code>](#boolean)

True or false

**Kind**: global function
<a name="email"></a>

## email([options]) ⇒ <code>string</code>

A random lower case email address

**Kind**: global function

| Param            | Type                | Default         | Description                            |
| ---------------- | ------------------- | --------------- | -------------------------------------- |
| [options]        | <code>Object</code> | <code>{}</code> | Your preferred email details           |
| [options.prefix] | <code>string</code> |                 | Customize the left side of the @-sign  |
| [options.domain] | <code>string</code> |                 | Customize the right side of the @-sign |

<a name="lorem"></a>

## lorem([n]) ⇒ <code>String</code>

Lorem ipsum sentences

**Kind**: global function

| Param | Type                           | Default        | Description         |
| ----- | ------------------------------ | -------------- | ------------------- |
| [n]   | [<code>number</code>](#number) | <code>1</code> | Number of sentences |

<a name="number"></a>

## number([min], [max]) ⇒ [<code>number</code>](#number)

Generates a random number

**Kind**: global function

| Param | Type                           | Default             |
| ----- | ------------------------------ | ------------------- |
| [min] | [<code>number</code>](#number) | <code>0</code>      |
| [max] | [<code>number</code>](#number) | <code>min+10</code> |

<a name="phone"></a>

## phone() ⇒ <code>string</code>

A random phone number

**Kind**: global function
