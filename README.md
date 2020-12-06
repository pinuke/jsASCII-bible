# This is the JSON ASCII bible

These JSON files currently contain every ascii byte/byte sequence defined by:
- [**ECMA-6**](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-006.pdf) - _**7-bit** coded character set_
- [**ECMA-43**](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-043.pdf) - _**8-bit** coded character set_

JSON structure:

```
(C0/SPACE/G0/DELETE/G1/G2/G3) : {
  "xx/yy" : "symbol"/"function"
}
```

- [**ECMA-48**](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-048.pdf) - _**control functions** for coded character sets_

JSON structure:

```
"sequences" : {
  (C0/C1/CSI/ESC/Control Strings) : {
    "filter-modifiers" : { ... },
    "functions" : {
      "_filter string_" : "function"
    }
  }
},
"names" : {
  "category" : {
    "function" : "description"
  }
}
```

`_filter string_` is a string that closely represents how the manual/standard represents the byte sequence.

`filter-modifiers` carries instructions for converting the following `_filter string_`s to regex.

### How to use/program for `filter-modifiers`:

if `filter-modifiers` is an array, it is an array of 2 `filter-modifiers`: first one for 7-bit, and the second one for 8-bit

`filter-modifiers` has 2 special keys (`^` and `$`):

`"^" : "beginning"` - means insert `"beginning"` at index 0 in the `_filter string_`s

`"$" : "end"` - means to append `"end"` to the `_filter string_`s

All other keys are to be interpreted as regex. These regex-keys will be used for modifying the keys of the associated `function` property in the `sequences` object tree

`filter-modifiers`'s properties can either be `string`s or `object`s

if the value for one of the keys is a `string`, wherever the key (regex-key) is found in the `_filter string_`s, it is replaced with that value.

if the value is an `object`, it is handled differently (described below).

this `object` has a few properties:

- master - used when several `filter-modifier`s have a common prototype; contains the name of the prototype
- name - name of the `filter-modifier`
- range - a range of allowable bytes in the regex-key
- - entire - the entire range of allowable bytes; contains either a string with a single byte or an array with the starting byte and ending byte of the range
- - subranges
- - - (named subrange) - used for labeling bytes that are in this subrange; contains either a string with a single byte or an array with the starting byte and ending byte of subrange
- - - delimeters
- - - - inter - contains range of bytes used as subdelimeters
- - - - inner - contains range of bytes used as delimeter to be placed between this occurence of the regex-key in the `_filter string_` and the next occurence in the same string
- remove - contains a singular string or array of strings with a property to remove from the master written in javascript format (`Tree.Branch.Apple`)
- regex - used for labeling/handling named capture groups captured by the regex-key; contains object with keys that contain capture group names and values for labeling/handling the capture group

"masters"/prototypes:

```
"filter-modifier-masters" : {
  "name of master/proto" : { ...(filter-modifier)... }
}
```
