webpackJsonp([3],{

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
(function(factory){
  // AMD
  if(true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1003), !(function webpackMissingModule() { var e = new Error("Cannot find module \"./jquery.enjoyhint.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(1005)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // CommonJS
  else if (typeof require === 'function' && typeof exports === 'object') {
    module.exports = factory(require('jquery'), require('./jquery.enjoyhint.js'), require('jquery.scrollto'));
  }
  // Global
  else {
    window.EnjoyHint = factory(jQuery)
  }
})(function($){
  var EnjoyHint = function(configs) {
    var $event_element;
    var that = this;
    var _options = configs || {};
    var BTN_NEXT_TEXT = _options.btnNextText;
    var BTN_SKIP_TEXT = _options.btnSkipText;
  
    var SHAPE_BACKGROUND_COLOR = _options.backgroundColor || "rgba(0,0,0,0.6)";
  
    var body = "body"; // TODO: Is it possible case when we need to define enjoyhint somewhere else?
  
    var defaults = {
      onStart: function() {},
  
      onEnd: function() {},
  
      onSkip: function() {},
  
      onNext: function() {}
    };
  
    var options = $.extend(defaults, _options);
    var data = [];
    var current_step = 0;
  
    var $body = $(body);
  
    /********************* PRIVATE METHODS ***************************************/
  
    var init = function() {
      if ($(".enjoyhint")) {
        $(".enjoyhint").remove();
      }
  
      $body.css({ overflow: "hidden" });
  
      $(document).on("touchmove", lockTouch);
  
      $body.enjoyhint({
        onNextClick: function() {
          nextStep();
        },
        onPrevClick: function(){
          prevStep();
        },
        onSkipClick: function() {
          options.onSkip();
          skipAll();
        },
        fill: SHAPE_BACKGROUND_COLOR
      });
    };
  
    var lockTouch = function(e) {
      e.preventDefault();
    };
  
    var destroyEnjoy = function() {
      $(".enjoyhint").remove();
      $body.css({ overflow: "auto" });
      $(document).off("touchmove", lockTouch);
    };
  
    that.clear = function() {
      var $nextBtn = $(".enjoyhint_next_btn");
      var $skipBtn = $(".enjoyhint_skip_btn");
      var $prevBtn = $(".enjoyhint_prev_btn");

      $prevBtn.removeClass(that.prevUserClass);
      $nextBtn.removeClass(that.nextUserClass);
      $nextBtn.text(BTN_NEXT_TEXT);
      $skipBtn.removeClass(that.skipUserClass);
      $skipBtn.text(BTN_SKIP_TEXT);
    };
  
    function hideCurrentHint(){
      $body.enjoyhint("render_circle", []);
      $("#enjoyhint_label").remove();
      $("#enjoyhint_arrpw_line").remove();
      $body.enjoyhint("hide_prev");
      $body.enjoyhint("hide_next");
      $body.enjoyhint("hide_skip");
    };

    var stepAction = function() {
      if (!(data && data[current_step])) {
        $body.enjoyhint("hide");
        options.onEnd();
        destroyEnjoy();
        return;
      }
      
      options.onNext();
  
      var $enjoyhint = $(".enjoyhint");
  
      $enjoyhint.removeClass("enjoyhint-step-" + current_step);
      $enjoyhint.removeClass("enjoyhint-step-" + (current_step + 1));
      $enjoyhint.removeClass("enjoyhint-step-" + (current_step + 2));
      $enjoyhint.addClass("enjoyhint-step-" + (current_step + 1));
  
      var step_data = data[current_step];

      var scrollSpeed = step_data.scrollAnimationSpeed;
  
      if (
        step_data.onBeforeStart &&
        typeof step_data.onBeforeStart === "function"
      ) {
        step_data.onBeforeStart();
      }
  
      var timeout = step_data.timeout || 0;
  
      setTimeout(function() {
        if (!step_data.selector) {
          for (var prop in step_data) {
            if (step_data.hasOwnProperty(prop) && prop.split(" ")[1]) {
              step_data.selector = prop.split(" ")[1];
              step_data.event = prop.split(" ")[0];
  
              if (
                prop.split(" ")[0] == "next" ||
                prop.split(" ")[0] == "auto" ||
                prop.split(" ")[0] == "custom"
              ) {
                step_data.event_type = prop.split(" ")[0];
              }
  
              step_data.description = step_data[prop];
            }
          }
        }
  
        setTimeout(function() {
          that.clear();
        }, 250);

        var isHintInViewport = $(step_data.selector).get(0).getBoundingClientRect();
        if(isHintInViewport.top < 0 || isHintInViewport.bottom > (window.innerHeight || document.documentElement.clientHeight)){
            hideCurrentHint();
            $(document.body).scrollTo(step_data.selector, step_data.scrollAnimationSpeed || 250, {offset: -200});
        }
        else {
          // if previous button has been clicked and element are in viewport to prevent custom step scrollAnimationSpeed set scrollSpeed to default
          scrollSpeed = 250;
        }
  
        setTimeout(function() {
          var $element = $(step_data.selector);
          var event = makeEventName(step_data.event);
          $body.enjoyhint("show");
          $event_element = $element;
  
          if (step_data.event_selector) {
            $event_element = $(step_data.event_selector);
          }
          
          $event_element.off(event)
          $element.off("keydown");

          if (!step_data.event_type && step_data.event == "key") {
            $element.keydown(function(event) {
              if (event.which == step_data.keyCode) {
                current_step++;
                stepAction();
              }
            });
          }
  
          if (step_data.showNext !== true) {
            $body.enjoyhint("hide_next");
          }
          
          $body.enjoyhint("hide_prev");

          if(current_step !== 0) {
            $body.enjoyhint("show_prev");
          }

          if (step_data.showPrev == false) {
            $body.enjoyhint("hide_prev");
        }

          if (step_data.showSkip == false) {
            $body.enjoyhint("hide_skip");
          } else {
            $body.enjoyhint("show_skip");
          }
  
  
          if (step_data.nextButton) {
            var $nextBtn = $(".enjoyhint_next_btn");
  
            $nextBtn.addClass(step_data.nextButton.className || "");
            $nextBtn.text(step_data.nextButton.text || "Next");
            that.nextUserClass = step_data.nextButton.className;
          }

          if (step_data.prevButton) {
            var $prevBtn = $(".enjoyhint_prev_btn");

            $prevBtn.addClass(step_data.prevButton.className || "");
            $prevBtn.text(step_data.prevButton.text || "Previous");
            that.prevUserClass = step_data.prevButton.className;
          }

          if (step_data.skipButton) {
            var $skipBtn = $(".enjoyhint_skip_btn");
  
            $skipBtn.addClass(step_data.skipButton.className || "");
            $skipBtn.text(step_data.skipButton.text || "Skip");
            that.skipUserClass = step_data.skipButton.className;
          }
  
          if (step_data.event_type) {
            switch (step_data.event_type) {
              case "auto":
                $element[step_data.event]();
  
                switch (step_data.event) {
                  case "click":
                    break;
                }
                current_step++;
                stepAction();
                return;
  
              case "custom":
                on(step_data.event, function() {
                  current_step++;
                  off(step_data.event);
                  stepAction();
                });
  
                break;
  
              case "next":
                $body.enjoyhint("show_next");
                break;
            }
          } else {
            $event_element.on(event, function(e) {
              if (step_data.keyCode && e.keyCode != step_data.keyCode) {
                return;
              }
  
              current_step++;
              stepAction(); // clicked
            });
          }

          var max_habarites = Math.max(
            $element.outerWidth(),
            $element.outerHeight()
          );
          var radius = step_data.radius || Math.round(max_habarites / 2) + 5;
          var offset = $element.offset();
          var w = $element.outerWidth();
          var h = $element.outerHeight();
          var shape_margin =
            step_data.margin !== undefined ? step_data.margin : 10;
  
          var coords = {
            x: offset.left + Math.round(w / 2),
            y: offset.top + Math.round(h / 2) - $(document).scrollTop()
          };
  
          var shape_data = {
            enjoyHintElementSelector: step_data.selector,
            center_x: coords.x,
            center_y: coords.y,
            text: step_data.description,
            arrowColor: step_data.arrowColor,
            top: step_data.top,
            bottom: step_data.bottom,
            left: step_data.left,
            right: step_data.right,
            margin: step_data.margin,
            scroll: step_data.scroll
          };

          var customBtnProps = {
              nextButton: step_data.nextButton,
              prevButton: step_data.prevButton
          }

          if (shape_data.center_x === 0 && shape_data.center_y === 0) {
            $body.enjoyhint("hide");
            destroyEnjoy();
            return console.log("Error: Element position couldn't be reached");
          }
  
          if (step_data.shape && step_data.shape == "circle") {
            shape_data.shape = "circle";
            shape_data.radius = radius;
          } else {
            shape_data.radius = 0;
            shape_data.width = w + shape_margin;
            shape_data.height = h + shape_margin;
          }
  
          $body.enjoyhint("render_label_with_shape", shape_data, that.stop, customBtnProps);
          
        }, scrollSpeed + 20 || 270);
      }, timeout);
    };
  
    var nextStep = function() {
      current_step++;
      stepAction();
    };

    var prevStep = function() {
      current_step--;
      stepAction();
    };
  
    var skipAll = function() {
      var step_data = data[current_step];
      var $element = $(step_data.selector);
  
      off(step_data.event);
      $element.off(makeEventName(step_data.event));
  
      destroyEnjoy();
    };
  
    var makeEventName = function(name, is_custom) {
      return name + (is_custom ? "custom" : "") + ".enjoy_hint";
    };
  
    var on = function(event_name, callback) {
      $body.on(makeEventName(event_name, true), callback);
    };
  
    var off = function(event_name) {
      $body.off(makeEventName(event_name, true));
    };
  
    /********************* PUBLIC METHODS ***************************************/
  
    window.addEventListener(
      "resize",
      function() {
        if ($event_element != null) {
          $body.enjoyhint(
            "redo_events_near_rect",
            $event_element[0].getBoundingClientRect()
          );
        }
      },
      false
    );
  
    that.stop = function() {
      skipAll();
    };
  
    that.reRunScript = function(cs) {
      current_step = cs;
      stepAction();
    };
  
    that.runScript = function() {
      current_step = 0;
      options.onStart();
      stepAction();
    };
  
    that.resumeScript = function() {
      stepAction();
    };
  
    that.setCurrentStep = function(cs) {
      current_step = cs;
    };
  
    that.getCurrentStep = function() {
      return current_step;
    };
  
    that.trigger = function(event_name) {
      switch (event_name) {
        case "next":
          nextStep();
          break;
  
        case "skip":
          skipAll();
          break;
  
        default: $body.trigger(makeEventName(event_name, true));
      }
    };
  
    that.setScript = function(_data) {
      if (!(_data instanceof Array) && _data.length < 1) {
        throw new Error("Configurations list isn't correct.");
      }
  
      data = _data;
    };
  
    //support deprecated API methods
    /**
     * Configure data list
     */
    that.set = function(_data) {
      that.setScript(_data);
    };
  
    that.setSteps = function(_data) {
      that.setScript(_data);
    };
  
    that.run = function() {
      that.runScript();
    };
  
    that.resume = function() {
      that.resumeScript();
    };
  
    init();
  };
  return EnjoyHint;
})


;CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
};

(function(factory) {
  'use strict';
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1003), __webpack_require__(1006)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'), require('kinetic'));
	} else {
		// Global
		factory(jQuery, Kinetic);
	}
})(function($, Kinetic) {
  var that;
  var originalLabelLeft, originalLabelTop;
  var originalArrowLeft, originalArrowTop;
  var originalCenterX, originalCenterY;
  var originalSkipbuttonLeft, originalSkipbuttonTop;
  var prevWindowWidth, prevWindowHeight;
  var originalWidth = window.innerWidth,
    originalHeight = window.innerHeight;

  var methods = {
    init: function(options) {
      return this.each(function() {
        var defaults = {
          onNextClick: function() {},
          onSkipClick: function() {},
          onPrevClick: function() {},

          animation_time: 800
        };

        this.enjoyhint_obj = {};
        that = this.enjoyhint_obj;

        that.resetComponentStuff = function() {
          originalLabelLeft = null;
          originalLabelTop = null;
          originalArrowLeft = null;
          originalArrowTop = null;
          originalCenterX = null;
          originalCenterY = null;
          originalSkipbuttonLeft = null;
          originalSkipbuttonTop = null;
          prevWindowWidth = null;
          prevWindowHeight = null;
          originalWidth = window.innerWidth;
          originalHeight = window.innerHeight;
        };

        var $that = $(this);
        that.options = $.extend(defaults, options);

        //general classes
        that.gcl = {
          chooser: "enjoyhint"
        };

        // classes
        that.cl = {
          enjoy_hint: "enjoyhint",
          hide: "enjoyhint_hide",
          disable_events_element: "enjoyhint_disable_events",
          btn: "enjoyhint_btn",
          skip_btn: "enjoyhint_skip_btn",
          close_btn: "enjoyhint_close_btn",
          next_btn: "enjoyhint_next_btn",
          previous_btn: "enjoyhint_prev_btn",
          main_canvas: "enjoyhint_canvas",
          main_svg: "enjoyhint_svg",
          svg_wrapper: "enjoyhint_svg_wrapper",
          svg_transparent: "enjoyhint_svg_transparent",
          kinetic_container: "kinetic_container"
        };

        function makeSVG(tag, attrs) {
          var el = document.createElementNS("http://www.w3.org/2000/svg", tag);

          for (var k in attrs) {
            el.setAttribute(k, attrs[k]);
          }

          return el;
        }

        // =======================================================================
        // ========================---- enjoyhint ----==============================
        // =======================================================================

        that.canvas_size = {
          w: $(window).width() * 1.4,
          h: $(window).height() * 1.4
        };

        var canvas_id = "enj_canvas";

        that.enjoyhint = $("<div>", {
          class: that.cl.enjoy_hint + " " + that.cl.svg_transparent
        }).appendTo($that);
        that.enjoyhint_svg_wrapper = $("<div>", {
          class: that.cl.svg_wrapper + " " + that.cl.svg_transparent
        }).appendTo(that.enjoyhint);
        that.$stage_container = $(
          '<div id="' + that.cl.kinetic_container + '">'
        ).appendTo(that.enjoyhint);
        that.$canvas = $(
          '<canvas id="' +
            canvas_id +
            '" width="' +
            that.canvas_size.w +
            '" height="' +
            that.canvas_size.h +
            '" class="' +
            that.cl.main_canvas +
            '">'
        ).appendTo(that.enjoyhint);
        that.$svg = $(
          '<svg width="' +
            that.canvas_size.w +
            '" height="' +
            that.canvas_size.h +
            '" class="' +
            that.cl.main_canvas +
            " " +
            that.cl.main_svg +
            '">'
        ).appendTo(that.enjoyhint_svg_wrapper);

        var defs = $(makeSVG("defs"));
        var marker = $(
          makeSVG("marker", {
            id: "arrowMarker",
            viewBox: "0 0 36 21",
            refX: "21",
            refY: "10",
            markerUnits: "strokeWidth",
            orient: "auto",
            markerWidth: "16",
            markerHeight: "12"
          })
        );
        var polilyne = $(
          makeSVG("path", {
            style: "fill:none; stroke:rgb(255,255,255); stroke-width:2",
            d: "M0,0 c30,11 30,9 0,20",
            id: "poliline"
          })
        );

        defs.append(marker.append(polilyne)).appendTo(that.$svg);

        that.kinetic_stage = new Kinetic.Stage({
          container: that.cl.kinetic_container,
          width: that.canvas_size.w,
          height: that.canvas_size.h,
          scaleX: 1
        });

        that.layer = new Kinetic.Layer();

        that.rect = new Kinetic.Rect({
          fill: options.fill,
          width: that.canvas_size.w,
          height: that.canvas_size.h
        });

        var $top_dis_events = $("<div>", {
          class: that.cl.disable_events_element
        }).appendTo(that.enjoyhint);
        var $bottom_dis_events = $top_dis_events
          .clone()
          .appendTo(that.enjoyhint);
        var $left_dis_events = $top_dis_events.clone().appendTo(that.enjoyhint);
        var $right_dis_events = $top_dis_events
          .clone()
          .appendTo(that.enjoyhint);

        var stopPropagation = function(e) {
          e.stopImmediatePropagation();
        };

        $("button").focusout(stopPropagation);
        $top_dis_events.click(stopPropagation);
        $bottom_dis_events.click(stopPropagation);
        $left_dis_events.click(stopPropagation);
        $right_dis_events.click(stopPropagation);

        that.$skip_btn = $("<div>", { class: that.cl.skip_btn })
          .appendTo(that.enjoyhint)
          .html("Skip")
          .click(function(e) {
            that.hide();
            that.options.onSkipClick();
          });

        that.$next_btn = $("<div>", { class: that.cl.next_btn })
          .appendTo(that.enjoyhint)
          .html("Next")
          .click(function(e) {
            that.options.onNextClick();
          });

        that.$close_btn = $("<div>", { class: that.cl.close_btn })
          .appendTo(that.enjoyhint)
          .html("")
          .click(function(e) {
            that.hide();
            that.options.onSkipClick();
          });

        that.$prev_btn = $("<div>", { class: that.cl.previous_btn })
          .appendTo(that.enjoyhint)
          .html("Previous")
          .click(function(e) {
            that.options.onPrevClick();
          });


        that.$canvas.mousedown(function(e) {
          $("canvas").css({ left: "4000px" });

          var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
          $("canvas").css({ left: "0px" });

          $(BottomElement).click();

          return false;
        });

        var circle_r = 0;
        var shape_init_shift = 130;

        that.shape = new Kinetic.Shape({
          radius: circle_r,
          center_x: -shape_init_shift,
          center_y: -shape_init_shift,
          width: 0,
          height: 0,
          sceneFunc: function(context) {
            var ctx = this.getContext("2d")._context;
            var pos = this.pos;
            var def_comp = ctx.globalCompositeOperation;
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();

            var x = this.attrs.center_x - Math.round(this.attrs.width / 2);
            var y = this.attrs.center_y - Math.round(this.attrs.height / 2);
            ctx.roundRect(
              x,
              y,
              this.attrs.width,
              this.attrs.height,
              this.attrs.radius
            );

            ctx.fill();

            ctx.globalCompositeOperation = def_comp;
          }
        });

        that.shape.radius = circle_r;
        that.layer.add(that.rect);
        that.layer.add(that.shape);
        that.kinetic_stage.add(that.layer);

        var doit;

        $(window).on("resize", function() {
          clearTimeout(doit);
          $('.enjoyhint_next_btn').css('visibility', 'hidden');
          $('.enjoyhint_prev_btn').css('visibility', 'hidden');
          $('.enjoyhint_skip_btn').css('visibility', 'hidden');
          $('.enjoy_hint_label').remove()
          $("#enjoyhint_arrpw_line").remove()
          if (!$(that.stepData.enjoyHintElementSelector).is(":visible")) {
            that.stopFunction();
            $(window).off("resize");
            return;
          }

          var boundingClientRect = $(
            that.stepData.enjoyHintElementSelector
          )[0].getBoundingClientRect();
          
          that.shape.attrs.center_x = Math.round(
            boundingClientRect.left + boundingClientRect.width / 2
          );
          that.shape.attrs.center_y = Math.round(
            boundingClientRect.top + boundingClientRect.height / 2
          );
          that.shape.attrs.width = boundingClientRect.width + 11;
          that.shape.attrs.height = boundingClientRect.height + 11;

          function renderAfterResize(){
            var newDataCoords = $(that.stepData.enjoyHintElementSelector).get(0).getBoundingClientRect();

            that.stepData.center_x = newDataCoords.left + newDataCoords.width/2;
            that.stepData.center_y = newDataCoords.top + newDataCoords.height/2;
            that.stepData.width = newDataCoords.width + 11;
            that.stepData.height = newDataCoords.height + 11;

            that.renderLabelWithShape(that.stepData, that.customBtnProps);
            $('.enjoyhint_next_btn').css('visibility', 'visible');
            $('.enjoyhint_prev_btn').css('visibility', 'visible');
            $('.enjoyhint_skip_btn').css('visibility', 'visible');
          }

          doit = setTimeout(function() {
            if(boundingClientRect.top < 0 || boundingClientRect.bottom > (window.innerHeight || document.documentElement.clientHeight)){
              $(document.body).scrollTo(that.stepData.enjoyHintElementSelector, 150, {offset: -200, onAfter:renderAfterResize});
            }
            else renderAfterResize();
          }, 150);


          var newWidth = window.innerWidth;
          var newHeight = window.innerHeight;
          var scaleX = newWidth / originalWidth;
          var scaleY = newHeight / originalHeight;

          that.kinetic_stage.setAttr("width", originalWidth * scaleX);
          that.kinetic_stage.setAttr("height", originalHeight * scaleY);

          that.rect = new Kinetic.Rect({
            fill: options.fill,
            width: window.innerWidth,
            height: window.innerHeight
          });

          that.layer.removeChildren();
          that.layer.add(that.rect);
          that.layer.add(that.shape);
          that.kinetic_stage.draw();
        });

        var enjoyhint_elements = [
          that.enjoyhint,
          $top_dis_events,
          $bottom_dis_events,
          $left_dis_events,
          $right_dis_events
        ];

        that.show = function() {
          that.enjoyhint.removeClass(that.cl.hide);
        };

        that.hide = function() {
          that.enjoyhint.addClass(that.cl.hide);

          var tween = new Kinetic.Tween({
            node: that.shape,
            duration: 0.002,
            center_x: -shape_init_shift,
            center_y: -shape_init_shift
          });

          tween.play();
        };

        that.hide();

        that.hideNextBtn = function() {
          that.$next_btn.addClass(that.cl.hide);
          that.nextBtn = "hide";
        };

        that.hidePrevBtn = function() {
          that.$prev_btn.addClass(that.cl.hide);
          that.prevBtn = "hide";
        };

        that.showPrevBtn = function() {
          that.$prev_btn.removeClass(that.cl.hide);
          that.prevBtn = "show";
        };

        that.showNextBtn = function() {
          that.$next_btn.removeClass(that.cl.hide);
          that.nextBtn = "show";
        };

        that.hideSkipBtn = function() {
          that.$skip_btn.addClass(that.cl.hide);
        };

        that.showSkipBtn = function() {
          that.$skip_btn.removeClass(that.cl.hide);
        };

        that.renderCircle = function(data) {
          var r = data.r || 0;
          var x = data.x || 0;
          var y = data.y || 0;

          var tween = new Kinetic.Tween({
            node: that.shape,
            duration: 0.2,
            center_x: x,
            center_y: y,
            width: r * 2,
            height: r * 2,
            radius: r
          });

          tween.play();

          var left = x - r;
          var right = x + r;
          var top = y - r;
          var bottom = y + r;
          var margin = 20;

          return {
            x: x,
            y: y,
            left: left,
            right: right,
            top: top,
            bottom: bottom,
            conn: {
              left: {
                x: left - margin,
                y: y
              },
              right: {
                x: right + margin,
                y: y
              },
              top: {
                x: x,
                y: top - margin
              },
              bottom: {
                x: x,
                y: bottom + margin
              }
            }
          };
        };

        that.renderRect = function(data, timeout) {
          var r = data.r || 0;
          var x = data.x || 0;
          var y = data.y || 0;
          var w = data.w || 0;
          var h = data.h || 0;
          var margin = 20;

          var tween = new Kinetic.Tween({
            node: that.shape,
            duration: timeout,
            center_x: x,
            center_y: y,
            width: w,
            height: h,
            radius: r
          });

          tween.play();

          var half_w = Math.round(w / 2);
          var half_h = Math.round(h / 2);
          var left = x - half_w;
          var right = x + half_w;
          var top = y - half_h;
          var bottom = y + half_h;

          return {
            x: x,
            y: y,
            left: left,
            right: right,
            top: top,
            bottom: bottom,
            conn: {
              left: {
                x: left - margin,
                y: y
              },
              right: {
                x: right + margin,
                y: y
              },
              top: {
                x: x,
                y: top - margin
              },
              bottom: {
                x: x,
                y: bottom + margin
              }
            }
          };
        };

        that.renderLabel = function(data) {
          var x = data.x || 0;
          that.originalElementX = x;
          var y = data.y || 0;
          var text = data.text || 0;

          var label = that.getLabelElement({
            x: x,
            y: y,
            text: data.text
          });

          var label_w = label.width();
          var label_h = label.height();
          var label_left = label.offset().left;
          var label_right = label.offset().left + label_w;
          var label_top = label.offset().top - $(document).scrollTop();
          var label_bottom = label.offset().top - $(document).scrollTop() + label_h;

          var margin = 10;

          var conn_left = {
            x: label_left - margin,
            y: label_top + Math.round(label_h / 2)
          };

          var conn_right = {
            x: label_right + margin,
            y: label_top + Math.round(label_h / 2)
          };

          var conn_top = {
            x: label_left + Math.round(label_w / 2),
            y: label_top - margin
          };

          var conn_bottom = {
            x: label_left + Math.round(label_w / 2),
            y: label_bottom + margin
          };

          label.detach();

          setTimeout(function() {
            $("#enjoyhint_label").remove();
            label.appendTo(that.enjoyhint);
          }, that.options.animation_time / 2);

          return {
            label: label,
            left: label_left,
            right: label_right,
            top: label_top,
            bottom: label_bottom,
            conn: {
              left: conn_left,
              right: conn_right,
              top: conn_top,
              bottom: conn_bottom
            }
          };
        };

        that.setMarkerColor = function(color){

            function isValidColor(value) {
                const temp = new Option().style;
                temp.color = value;
                return temp.color !== '';
            }

            if (isValidColor(color)){
                return [$("#poliline"), $("#enjoyhint_arrpw_line")].forEach(function(element){
                    element.css("stroke", color);
                });
            }

            $("#poliline").css("stroke", "rgb(255,255,255)")
            console.log("Error: invalid color name property - " + color);
        }

        that.renderArrow = function(data) {
          var x_from = data.x_from || 0;
          var y_from = data.y_from || 0;
          var x_to = data.x_to || 0;
          var y_to = data.y_to || 0;
          var by_top_side = data.by_top_side;
          var control_point_x = 0;
          var control_point_y = 0;
  
          if (by_top_side === 'hor') {
            control_point_x = x_to
            control_point_y = y_from
          }
          else {
            control_point_x = x_from
            control_point_y = y_to
          }

          that.enjoyhint.addClass(that.cl.svg_transparent);

          setTimeout(function() {
            $("#enjoyhint_arrpw_line").remove();
            
            var d =
              "M" +
              x_from +
              "," +
              y_from +
              " Q" +
              control_point_x +
              "," +
              control_point_y +
              " " +
              x_to +
              "," +
              y_to;
            that.$svg.append(
              makeSVG("path", {
                style: "fill:none; stroke:rgb(255,255,255); stroke-width:3",
                "marker-end": "url(#arrowMarker)",
                d: d,
                id: "enjoyhint_arrpw_line"
              })
            );

            if(that.stepData.arrowColor) {
                that.setMarkerColor(that.stepData.arrowColor)
            } else {
                $("#poliline").css("stroke", "rgb(255, 255, 255)");
            }

            that.enjoyhint.removeClass(that.cl.svg_transparent);
          }, that.options.animation_time / 2);
        };

        that.getLabelElement = function(data) {
          return $("<div>", {
            class: "enjoy_hint_label",
            id: "enjoyhint_label"
          })
            .css({
              top: data.y + "px",
              left: data.x + "px"
            })
            .html(data.text)
            .appendTo(that.enjoyhint);
        };

        that.disableEventsNearRect = function(rect) {
          $top_dis_events
            .css({
              top: "0",
              left: "0"
            })
            .height(rect.top);

          $bottom_dis_events.css({
            top: rect.bottom + "px",
            left: "0"
          });

          $left_dis_events
            .css({
              top: "0",
              left: 0 + "px"
            })
            .width(rect.left);

          $right_dis_events.css({
            top: "0",
            left: rect.right + "px"
          });
        };

        (function($) {
          $.event.special.destroyed = {
            remove: function(o) {
              if (o.handler) {
                o.handler();
              }
            }
          };
        })($);

        that.renderLabelWithShape = function(data, customBtnProps) {
          that.stepData = data;
          that.customBtnProps = customBtnProps;

          function findParentDialog(element) {
            if (element.tagName === "MD-DIALOG") {
              return element;
            } else if (typeof element.tagName == "undefined") {
              return null;
            } else {
              return findParentDialog($(element).parent()[0]);
            }
          }

          var dialog = findParentDialog(
            $(that.stepData.enjoyHintElementSelector)[0]
          );

          if (dialog != null) {
            $(dialog).on("dialogClosing", function() {
              that.stopFunction();
              return;
            });
          }

          that.resetComponentStuff();

          var shape_type = data.shape || "rect";
          var shape_data = {};

          var half_w = 0;
          var half_h = 0;

          var shape_offsets = {
            top: data.top || 0,
            bottom: data.bottom || 0,
            left: data.left || 0,
            right: data.right || 0
          };

          switch (shape_type) {
            case "circle":
              half_w = half_h = data.radius;

              var sides_pos = {
                top: data.center_y - half_h + shape_offsets.top,
                bottom: data.center_y + half_h - shape_offsets.bottom,
                left: data.center_x - half_w + shape_offsets.left,
                right: data.center_x + half_w - shape_offsets.right
              };

              var width = sides_pos.right - sides_pos.left;
              var height = sides_pos.bottom - sides_pos.top;
              data.radius = Math.round(Math.min(width, height) / 2);

              //new half habarites
              half_w = half_h = Math.round(data.radius / 2);

              var new_half_w = Math.round(width / 2);
              var new_half_h = Math.round(height / 2);

              //new center_x and center_y
              data.center_x = sides_pos.left + new_half_w;
              data.center_y = sides_pos.top + new_half_h;

              shape_data = that.renderCircle({
                x: data.center_x,
                y: data.center_y,
                r: data.radius
              });

              break;

            case "rect":
              half_w = Math.round(data.width / 2);
              half_h = Math.round(data.height / 2);

              var sides_pos = {
                top: data.center_y - half_h + shape_offsets.top,
                bottom: data.center_y + half_h - shape_offsets.bottom,
                left: data.center_x - half_w + shape_offsets.left,
                right: data.center_x + half_w - shape_offsets.right
              };

              data.width = sides_pos.right - sides_pos.left;
              data.height = sides_pos.bottom - sides_pos.top;

              half_w = Math.round(data.width / 2);
              half_h = Math.round(data.height / 2);

              //new center_x and center_y
              data.center_x = sides_pos.left + half_w;
              data.center_y = sides_pos.top + half_h;

              shape_data = that.renderRect(
                {
                  x: data.center_x,
                  y: data.center_y,
                  w: data.width,
                  h: data.height,
                  r: data.radius
                },
                0.2
              );

              break;
          }

          var body_size = {
            w: that.enjoyhint.width(),
            h: that.enjoyhint.height()
          };

          var label = that.getLabelElement({
            x: 0,
            y: 0,
            text: data.text
          });

          var label_width = label.outerWidth();
          var label_height = label.outerHeight();
          label.remove();
          var top_offset = data.center_y - half_h;
          var bottom_offset = body_size.h - (data.center_y + half_h);
          var left_offset = data.center_x - half_w;
          var right_offset = body_size.w - (data.center_x + half_w);

          var label_shift = window.innerHeight < 670 ? 130 : 150;
          var label_margin = window.innerHeight < 670 ? 0 : 40;
          var label_shift_with_label_height =
            label_shift + label_height + label_margin;
          var label_ver_offset = half_h + label_shift;

          var areas_for_label = [
            {name: 'right_center', common_area: right_offset * window.innerHeight, width: right_offset, height: window.innerHeight},
            {name: 'right_top', common_area: right_offset * top_offset, width: right_offset, height: top_offset},
            {name: 'right_bottom', common_area: right_offset * bottom_offset, width: right_offset, height: bottom_offset},
            {name: 'left_center', common_area: left_offset * window.innerHeight, width: left_offset, height: window.innerHeight},
            {name: 'left_top', common_area: left_offset * top_offset, width: left_offset, height: top_offset},
            {name: 'left_bottom', common_area: left_offset * bottom_offset, width: left_offset, height: bottom_offset},
            {name: 'center_top', common_area: window.innerWidth * top_offset, width: window.innerWidth, height: top_offset},
            {name: 'center_bottom', common_area: window.innerWidth * bottom_offset, width: window.innerWidth, height: bottom_offset},
          ];
          var label_horizontal_space_required = label_width;
          var label_vertical_space_required = window.innerHeight <= 670 ? label_shift_with_label_height : label_shift_with_label_height + 20;

          var areas_priority = areas_for_label
            .sort(function(area1, area2){return area1.common_area - area2.common_area})

          var label_hor_side = 'oversized';
          for (var i = 0; i < areas_priority.length; i++) {
              var name = areas_priority[i].name;
              var area = areas_priority[i]
              if (
                area.width > label_horizontal_space_required
                && area.height > label_vertical_space_required
              ) {
                  label_hor_side = name;
              }
          }

          var data_width_size = data.shape === "circle" ? data.radius * 2 :
            data.width ? data.width : data.radius * 2;

          var data_height_size = data.shape === "circle" ? data.radius * 2 :
            data.height ? data.height : data.radius * 2;

          var right_position = data.center_x + data_width_size/2 + 80;
          var left_position = data.center_x - label_width - data_width_size/2 - 80;
          var central_position = window.innerWidth / 2 - label_width / 2;
          var top_position = data.center_y - label_ver_offset - label_height;
          var bottom_position = data.center_y + label_ver_offset;
          var central_ver_position = window.innerHeight/2 - label_vertical_space_required/2 + 20;
          
          var label_x, label_y, x_to, y_to, x_from, y_from;
          
          var by_top_side = "hor"

          switch(label_hor_side) {
            case "center_top":
                label_y = top_position;
                label_x = central_position;
                x_to = data.center_x;
                y_to = data.center_y - data_height_size/2 - 20;
                break;
            case "center_bottom":
                label_y = bottom_position;
                label_x = central_position;
                x_to = data.center_x;
                y_to = data.center_y + data_height_size/2 + 20;
                break;
            case 'left_center':
                label_y = central_ver_position;
                label_x = left_position;
                x_to = data.center_x - data_width_size/2 - 20;
                y_to = data.center_y;
                by_top_side = "ver";  
                break;
            case 'left_top':
                label_y = top_position;
                label_x = left_position;
                x_to = data.center_x - data_width_size/2;
                y_to = data.center_y - 20;
                break;
            case 'left_bottom':
                label_y = bottom_position;
                label_x = left_position;
                x_to = data.center_x - data_width_size/2;
                y_to = data.center_y + 20;
                by_top_side = "ver";  
                break;
            case 'right_center':
                label_y = central_ver_position;
                label_x = right_position;
                x_to = data.center_x + data_width_size/2 + 20;
                y_to = data.center_y;
                by_top_side = "ver";  
                break;
            case 'right_top':
                label_y = top_position;
                label_x = right_position;
                x_to = data.center_x + data_width_size/2;
                y_to = data.center_y - 20;
                break;            
            case 'right_bottom':
                label_y = bottom_position;
                label_x = right_position;
                x_to = data.center_x + data_width_size/2;
                y_to = data.center_y + 20;
                by_top_side = "ver";  
                break;
            case 'oversized':
              setTimeout(function(){
                $("#enjoyhint_arrpw_line").remove();
                $('.enjoy_hint_label').css({
                  'border-radius': '20px',
                  '-webkit-border-radius': '20px',
                  '-moz-border-radius': '20px',
                  'background-color': '#272A26',
                  '-webkit-transition': 'background-color ease-out 0.5s',
                  '-moz-transition': 'background-color ease-out 0.5s',
                  '-o-transition': 'background-color ease-out 0.5s',
                  'transition': 'background-color ease-out 0.5s'
                })
              }, 450)
                label_y = central_ver_position
                label_x = central_position;
                break;
          }

          x_from = label_x + label_width/2;
          y_from = (data.center_y > label_y + label_height/2) ? label_y + label_height : label_y;
          // if data center out of window y scale
          if(data.center_y < 0) {
            y_to = 20
          }
          else if ( data.center_y > window.innerHeight + 20 ) {
            y_to = window.innerHeight - 20
          };

          // if element at the same position as hint
          if(data.center_y >= label_y && data.center_y <= label_y + label_height) {
            x_from = data.center_x > label_x ? label_x + label_width : label_x;
            y_from = data.center_y;
          }

          that.renderLabel({
            x: label_x,
            y: label_y,
            text: data.text
          });

          setTimeout(function(){
            var summoryButtonWidth = that.$next_btn.width() + that.$skip_btn.width() + that.$prev_btn.width() + 30;
            var distance = label_x - 100;
            var ver_button_position = label_y + label_height + 40
            
            if (summoryButtonWidth + label_x > x_to) {
            distance = x_to >= x_from ? x_to + 20 : label_x + label_width/2
            }
              
            if (summoryButtonWidth + distance > window.innerWidth || distance < 0) {
              distance = 10;
              ver_button_position = y_from < y_to ? label_y - 80 : label_y + label_height + 40
            }

            var initial_distance = distance;
            var initial_ver_position = ver_button_position;

            if (window.innerWidth <= 640) {
              distance = 10;
              ver_button_position = 10;
              that.$next_btn.html('&#8250;');
              that.$prev_btn.html('&#8249;');
            }
            else {
              distance = initial_distance;
              ver_button_position = initial_ver_position;
			  that.$next_btn.html(customBtnProps.nextButton && customBtnProps.nextButton.text ? 
					customBtnProps.nextButton.text : 'Next');
			  that.$prev_btn.html(customBtnProps.prevButton && customBtnProps.prevButton.text ? 
					customBtnProps.prevButton.text : 'Previous');
            }

            that.$prev_btn.css({
              left: distance,
              top: ver_button_position
            });

            var left_next = distance + that.$prev_btn.width() + 10;
            var left_skip = distance + that.$prev_btn.width() + that.$next_btn.width() + 20;

            if (that.nextBtn === "hide") {
              left_skip = distance + that.$prev_btn.width() + 10;
            }

            if(that.prevBtn === "hide") {
              left_next = distance;
              left_skip = distance + that.$next_btn.width() + 10;
            }

            that.$next_btn.css({
              left: left_next,
              top: ver_button_position
            })

            that.$skip_btn.css({
              left: left_skip,
              top: ver_button_position
            });
          }, 0)

          that.$close_btn.css({
            right: 10,
            top: 10
          });

          that.disableEventsNearRect({
            top: shape_data.top,
            bottom: shape_data.bottom,
            left: shape_data.left,
            right: shape_data.right
          });

          that.renderArrow({
            x_from: x_from,
            y_from: y_from,
            x_to: x_to,
            y_to: y_to,
            by_top_side: by_top_side,
          });
        };

        that.clear = function() {
          that.ctx.clearRect(0, 0, 3000, 2000);
        };

        return this;
      });
    },

    set: function(val) {
      this.each(function() {
        this.enjoyhint_obj.setValue(val);
      });

      return this;
    },

    show: function() {
      this.each(function() {
        this.enjoyhint_obj.show();
      });

      return this;
    },

    hide: function() {
      this.each(function() {
        this.enjoyhint_obj.hide();
      });

      return this;
    },

    hide_next: function() {
      this.each(function() {
        this.enjoyhint_obj.hideNextBtn();
      });

      return this;
    },

    hide_prev: function() {
      this.each(function() {
        this.enjoyhint_obj.hidePrevBtn();
      });

      return this;
    },

    show_prev: function() {
      this.each(function() {
        this.enjoyhint_obj.showPrevBtn();
      });

      return this;
    },

    show_next: function() {
      this.each(function() {
        this.enjoyhint_obj.showNextBtn();
      });

      return this;
    },

    hide_skip: function() {
      this.each(function() {
        this.enjoyhint_obj.hideSkipBtn();
      });

      return this;
    },

    show_skip: function() {
      this.each(function() {
        this.enjoyhint_obj.showSkipBtn();
      });

      return this;
    },

    render_circle: function(x, y, r) {
      this.each(function() {
        this.enjoyhint_obj.renderCircle(x, y, r);
      });

      return this;
    },

    render_label: function(x, y, r) {
      this.each(function() {
        this.enjoyhint_obj.renderLabel(x, y, r);
      });

      return this;
    },

    render_label_with_shape: function(data, stopFunction, customBtnProps) {
      this.each(function() {
        that.stopFunction = stopFunction;
        this.enjoyhint_obj.renderLabelWithShape(data, customBtnProps);
      });

      return this;
    },

    redo_events_near_rect: function(rect) {
      that.disableEventsNearRect({
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      });
    },

    clear: function() {
      this.each(function() {
        this.enjoyhint_obj.clear();
      });

      return this;
    },

    close: function(val) {
      this.each(function() {
        this.enjoyhint_obj.closePopdown();
      });

      return this;
    }
  };

  $.fn.enjoyhint = function(method) {
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on $.numinput");
    }

    return this;
  };
});


/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery.scrollTo
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * https://github.com/flesler/jquery.scrollTo
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(factory) {
	'use strict';
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function($) {
	'use strict';

	var $scrollTo = $.scrollTo = function(target, duration, settings) {
		return $(window).scrollTo(target, duration, settings);
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: 0,
		limit:true
	};

	function isWin(elem) {
		return !elem.nodeName ||
			$.inArray(elem.nodeName.toLowerCase(), ['iframe','#document','html','body']) !== -1;
	}

	function isFunction(obj) {
		// Brought from jQuery since it's deprecated
		return typeof obj === 'function'
	}

	$.fn.scrollTo = function(target, duration, settings) {
		if (typeof duration === 'object') {
			settings = duration;
			duration = 0;
		}
		if (typeof settings === 'function') {
			settings = { onAfter:settings };
		}
		if (target === 'max') {
			target = 9e9;
		}

		settings = $.extend({}, $scrollTo.defaults, settings);
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.duration;
		// Make sure the settings are given right
		var queue = settings.queue && settings.axis.length > 1;
		if (queue) {
			// Let's keep the overall duration
			duration /= 2;
		}
		settings.offset = both(settings.offset);
		settings.over = both(settings.over);

		return this.each(function() {
			// Null target yields nothing, just like jQuery does
			if (target === null) return;

			var win = isWin(this),
				elem = win ? this.contentWindow || window : this,
				$elem = $(elem),
				targ = target,
				attr = {},
				toff;

			switch (typeof targ) {
				// A number will pass the regex
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						// We are done
						break;
					}
					// Relative/Absolute selector
					targ = win ? $(targ) : $(targ, elem);
					/* falls through */
				case 'object':
					if (targ.length === 0) return;
					// DOMElement / jQuery
					if (targ.is || targ.style) {
						// Get the real position of the target
						toff = (targ = $(targ)).offset();
					}
			}

			var offset = isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

			$.each(settings.axis.split(''), function(i, axis) {
				var Pos	= axis === 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					prev = $elem[key](),
					max = $scrollTo.max(elem, axis);

				if (toff) {// jQuery / DOMElement
					attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

					// If it's a dom element, reduce the margin
					if (settings.margin) {
						attr[key] -= parseInt(targ.css('margin'+Pos), 10) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width'), 10) || 0;
					}

					attr[key] += offset[pos] || 0;

					if (settings.over[pos]) {
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis === 'x'?'width':'height']() * settings.over[pos];
					}
				} else {
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) === '%' ?
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if (settings.limit && /^\d+$/.test(attr[key])) {
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				}

				// Don't waste time animating, if there's no need.
				if (!i && settings.axis.length > 1) {
					if (prev === attr[key]) {
						// No animation needed
						attr = {};
					} else if (queue) {
						// Intermediate animation
						animate(settings.onAfterFirst);
						// Don't animate this axis again in the next iteration.
						attr = {};
					}
				}
			});

			animate(settings.onAfter);

			function animate(callback) {
				var opts = $.extend({}, settings, {
					// The queue setting conflicts with animate()
					// Force it to always be true
					queue: true,
					duration: duration,
					complete: callback && function() {
						callback.call(elem, targ, settings);
					}
				});
				$elem.animate(attr, opts);
			}
		});
	};

	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function(elem, axis) {
		var Dim = axis === 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;

		if (!isWin(elem))
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();

		var size = 'client' + Dim,
			doc = elem.ownerDocument || elem.document,
			html = doc.documentElement,
			body = doc.body;

		return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
	};

	function both(val) {
		return isFunction(val) || $.isPlainObject(val) ? val : { top:val, left:val };
	}

	// Add special hooks so that window scroll properties can be animated
	$.Tween.propHooks.scrollLeft =
	$.Tween.propHooks.scrollTop = {
		get: function(t) {
			return $(t.elem)[t.prop]();
		},
		set: function(t) {
			var curr = this.get(t);
			// If interrupt is true and user scrolled, stop animating
			if (t.options.interrupt && t._last && t._last !== curr) {
				return $(t.elem).stop();
			}
			var next = Math.round(t.now);
			// Don't waste CPU
			// Browsers don't render floating point scroll
			if (curr !== next) {
				$(t.elem)[t.prop](next);
				t._last = this.get(t);
			}
		}
	};

	// AMD requirement
	return $scrollTo;
});


/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/*
 * KineticJS JavaScript Framework v5.2.0
 * http://lavrton.github.io/KineticJS/
 * Licensed under the MIT or GPL Version 2 licenses.
 * Date: 2015-01-22
 *
 * Original work Copyright (C) 2011 - 2013 by Eric Rowell
 * Modified work Copyright (C) 2014 - 2015 by Anton Lavrenov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @namespace Kinetic
 */
/*jshint -W079, -W020*/
var Kinetic = {};
(function(root) {
    var PI_OVER_180 = Math.PI / 180;

    Kinetic = {
        // public
        version: '5.2.0',

        // private
        stages: [],
        idCounter: 0,
        ids: {},
        names: {},
        shapes: {},
        listenClickTap: false,
        inDblClickWindow: false,

        // configurations
        enableTrace: false,
        traceArrMax: 100,
        dblClickWindow: 400,
        /**
         * Global pixel ratio configuration. KineticJS automatically detect pixel ratio of current device.
         * But you may override such property, if you want to use your value.
         * @property pixelRatio
         * @default undefined
         * @memberof Kinetic
         * @example
         * Kinetic.pixelRatio = 1;
         */
        pixelRatio: undefined,
        /**
         * Drag distance property. If you start to drag a node you may want to wait until pointer is moved to some distance from start point,
         * only then start dragging.
         * @property dragDistance
         * @default 0
         * @memberof Kinetic
         * @example
         * Kinetic.dragDistance = 10;
         */
        dragDistance : 0,
        /**
         * Use degree values for angle properties. You may set this property to false if you want to use radiant values.
         * @property angleDeg
         * @default true
         * @memberof Kinetic
         * @example
         * node.rotation(45); // 45 degrees
         * Kinetic.angleDeg = false;
         * node.rotation(Math.PI / 2); // PI/2 radian
         */
        angleDeg: true,
         /**
         * Show different warnings about errors or wrong API usage
         * @property showWarnings
         * @default true
         * @memberof Kinetic
         * @example
         * Kinetic.showWarnings = false;
         */
        showWarnings : true,



        /**
         * @namespace Filters
         * @memberof Kinetic
         */
        Filters: {},

        /**
         * Node constructor. Nodes are entities that can be transformed, layered,
         * and have bound events. The stage, layers, groups, and shapes all extend Node.
         * @constructor
         * @memberof Kinetic
         * @abstract
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         */
        Node: function(config) {
            this._init(config);
        },

        /**
         * Shape constructor.  Shapes are primitive objects such as rectangles,
         *  circles, text, lines, etc.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Node
         * @param {Object} config
         * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @example
         * var customShape = new Kinetic.Shape({
         *   x: 5,
         *   y: 10,
         *   fill: 'red',
         *   // a Kinetic.Canvas renderer is passed into the drawFunc function
         *   drawFunc: function(context) {
         *     context.beginPath();
         *     context.moveTo(200, 50);
         *     context.lineTo(420, 80);
         *     context.quadraticCurveTo(300, 100, 260, 170);
         *     context.closePath();
         *     context.fillStrokeShape(this);
         *   }
         *});
         */
        Shape: function(config) {
            this.__init(config);
        },

        /**
         * Container constructor.&nbsp; Containers are used to contain nodes or other containers
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Node
         * @abstract
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height

         */
        Container: function(config) {
            this.__init(config);
        },

        /**
         * Stage constructor.  A stage is used to contain multiple layers
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {String|Element} config.container Container id or DOM element
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * @example
         * var stage = new Kinetic.Stage({
         *   width: 500,
         *   height: 800,
         *   container: 'containerId'
         * });
         */
        Stage: function(config) {
            this.___init(config);
        },

        /**
         * BaseLayer constructor. 
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height

         * @example
         * var layer = new Kinetic.Layer();
         */
        BaseLayer: function(config) {
            this.___init(config);
        },

        /**
         * Layer constructor.  Layers are tied to their own canvas element and are used
         * to contain groups or shapes.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.BaseLayer
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height

         * @example
         * var layer = new Kinetic.Layer();
         */
        Layer: function(config) {
            this.____init(config);
        },

        /**
         * FastLayer constructor. Layers are tied to their own canvas element and are used
         * to contain shapes only.  If you don't need node nesting, mouse and touch interactions,
         * or event pub/sub, you should use FastLayer instead of Layer to create your layers.
         * It renders about 2x faster than normal layers.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.BaseLayer
         * @param {Object} config
         * @param {Boolean} [config.clearBeforeDraw] set this property to false if you don't want
         * to clear the canvas before each layer draw.  The default value is true.
         * @param {Boolean} [config.visible]
         * @param {String} [config.id] unique id
         * @param {String} [config.name] non-unique name
         * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
         * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height

         * @example
         * var layer = new Kinetic.FastLayer();
         */
        FastLayer: function(config) {
            this.____init(config);
        },

        /**
         * Group constructor.  Groups are used to contain shapes or other groups.
         * @constructor
         * @memberof Kinetic
         * @augments Kinetic.Container
         * @param {Object} config
         * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
         * * @param {Object} [config.clip] set clip
     * @param {Number} [config.clipX] set clip x
     * @param {Number} [config.clipY] set clip y
     * @param {Number} [config.clipWidth] set clip width
     * @param {Number} [config.clipHeight] set clip height

         * @example
         * var group = new Kinetic.Group();
         */
        Group: function(config) {
            this.___init(config);
        },

        /**
         * returns whether or not drag and drop is currently active
         * @method
         * @memberof Kinetic
         */
        isDragging: function() {
            var dd = Kinetic.DD;

            // if DD is not included with the build, then
            // drag and drop is not even possible
            if (dd) {
                return dd.isDragging;
            } else {
                return false;
            }
        },
        /**
        * returns whether or not a drag and drop operation is ready, but may
        *  not necessarily have started
        * @method
        * @memberof Kinetic
        */
        isDragReady: function() {
            var dd = Kinetic.DD;

            // if DD is not included with the build, then
            // drag and drop is not even possible
            if (dd) {
                return !!dd.node;
            } else {
                return false;
            }
        },
        _addId: function(node, id) {
            if(id !== undefined) {
                this.ids[id] = node;
            }
        },
        _removeId: function(id) {
            if(id !== undefined) {
                delete this.ids[id];
            }
        },
        _addName: function(node, name) {
            if(name !== undefined) {

                var names = name.split(/\s/g);
                for(var n = 0; n < names.length; n++) {
                    var subname = names[n];
                    if (subname) {
                        if(this.names[subname] === undefined) {
                            this.names[subname] = [];
                        }
                        this.names[subname].push(node);
                    }
                }
            }
        },
        _removeName: function(name, _id) {
            if(name !== undefined) {
                var nodes = this.names[name];
                if(nodes !== undefined) {
                    for(var n = 0; n < nodes.length; n++) {
                        var no = nodes[n];
                        if(no._id === _id) {
                            nodes.splice(n, 1);
                        }
                    }
                    if(nodes.length === 0) {
                        delete this.names[name];
                    }
                }
            }
        },
        getAngle: function(angle) {
            return this.angleDeg ? angle * PI_OVER_180 : angle;
        },
        _parseUA: function(userAgent) {
            var ua = userAgent.toLowerCase(),
                // jQuery UA regex
                match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                /(msie) ([\w.]+)/.exec( ua ) ||
                ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                [],

                // adding mobile flag as well
                mobile = !!(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)),
                ieMobile = !!(userAgent.match(/IEMobile/i));
                
            return {
                browser: match[ 1 ] || '',
                version: match[ 2 ] || '0',

                // adding mobile flab
                mobile: mobile,
                ieMobile: ieMobile  // If this is true (i.e., WP8), then Kinetic touch events are executed instead of equivalent Kinetic mouse events
            };
        },
        // user agent  
        UA: undefined
    };

    Kinetic.UA = Kinetic._parseUA((root.navigator && root.navigator.userAgent) || '');
    
})(this);

// Uses Node, AMD or browser globals to create a module.

// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module "returnExports" that depends another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.

// if the module has no dependencies, the above pattern can be simplified to
( function(root, factory) {
    if( true) {
        var KineticJS = factory();
        // runtime-check for browserify
        if(global.window === global) {
            Kinetic.document = global.document;
            Kinetic.window = global;
        } else {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like enviroments that support module.exports,
            // like Node.
            var Canvas = __webpack_require__(1007);
            var jsdom = __webpack_require__(1008).jsdom;

            Kinetic.document = jsdom('<!DOCTYPE html><html><head></head><body></body></html>');
            Kinetic.window = Kinetic.document.createWindow();
            Kinetic.window.Image = Canvas.Image;
            Kinetic._nodeCanvas = Canvas;
        }

        Kinetic.root = root;
        module.exports = KineticJS;
        return;
    }
    else if( typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    }
    Kinetic.document = document;
    Kinetic.window = window;
    Kinetic.root = root;

}(this, function() {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return Kinetic;
}));
;(function() {
    /**
     * Collection constructor.  Collection extends
     *  Array.  This class is used in conjunction with {@link Kinetic.Container#get}
     * @constructor
     * @memberof Kinetic
     */
    Kinetic.Collection = function() {
        var args = [].slice.call(arguments), length = args.length, i = 0;

        this.length = length;
        for(; i < length; i++) {
            this[i] = args[i];
        }
        return this;
    };
    Kinetic.Collection.prototype = [];
    /**
     * iterate through node array and run a function for each node.
     *  The node and index is passed into the function
     * @method
     * @memberof Kinetic.Collection.prototype
     * @param {Function} func
     * @example
     * // get all nodes with name foo inside layer, and set x to 10 for each
     * layer.get('.foo').each(function(shape, n) {
     *   shape.setX(10);
     * });
     */
    Kinetic.Collection.prototype.each = function(func) {
        for(var n = 0; n < this.length; n++) {
            func(this[n], n);
        }
    };
    /**
     * convert collection into an array
     * @method
     * @memberof Kinetic.Collection.prototype
     */
    Kinetic.Collection.prototype.toArray = function() {
        var arr = [],
            len = this.length,
            n;

        for(n = 0; n < len; n++) {
            arr.push(this[n]);
        }
        return arr;
    };
    /**
     * convert array into a collection
     * @method
     * @memberof Kinetic.Collection
     * @param {Array} arr
     */
    Kinetic.Collection.toCollection = function(arr) {
        var collection = new Kinetic.Collection(),
            len = arr.length,
            n;

        for(n = 0; n < len; n++) {
            collection.push(arr[n]);
        }
        return collection;
    };

    // map one method by it's name
    Kinetic.Collection._mapMethod = function(methodName) {
        Kinetic.Collection.prototype[methodName] = function() {
            var len = this.length,
                i;

            var args = [].slice.call(arguments);
            for(i = 0; i < len; i++) {
                this[i][methodName].apply(this[i], args);
            }

            return this;
        };
    };

    Kinetic.Collection.mapMethods = function(constructor) {
        var prot = constructor.prototype;
        for(var methodName in prot) {
            Kinetic.Collection._mapMethod(methodName);
        }
    };

    /*
    * Last updated November 2011
    * By Simon Sarris
    * www.simonsarris.com
    * sarris@acm.org
    *
    * Free to use and distribute at will
    * So long as you are nice to people, etc
    */

    /*
    * The usage of this class was inspired by some of the work done by a forked
    * project, KineticJS-Ext by Wappworks, which is based on Simon's Transform
    * class.  Modified by Eric Rowell
    */

    /**
     * Transform constructor
     * @constructor
     * @param {Array} [m] Optional six-element matrix
     * @memberof Kinetic
     */
    Kinetic.Transform = function(m) {
        this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0];
    };

    Kinetic.Transform.prototype = {
        /**
         * Copy Kinetic.Transform object
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Kinetic.Transform}
         */
        copy: function() {
            return new Kinetic.Transform(this.m);
        },
        /**
         * Transform point
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Object} point 2D point(x, y)
         * @returns {Object} 2D point(x, y)
         */
        point: function(point) {
            var m = this.m;
            return {
                x: m[0] * point.x + m[2] * point.y + m[4],
                y: m[1] * point.x + m[3] * point.y + m[5]
            };
        },
        /**
         * Apply translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} x
         * @param {Number} y
         * @returns {Kinetic.Transform}
         */
        translate: function(x, y) {
            this.m[4] += this.m[0] * x + this.m[2] * y;
            this.m[5] += this.m[1] * x + this.m[3] * y;
            return this;
        },
        /**
         * Apply scale
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} sx
         * @param {Number} sy
         * @returns {Kinetic.Transform}
         */
        scale: function(sx, sy) {
            this.m[0] *= sx;
            this.m[1] *= sx;
            this.m[2] *= sy;
            this.m[3] *= sy;
            return this;
        },
        /**
         * Apply rotation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} rad  Angle in radians
         * @returns {Kinetic.Transform}
         */
        rotate: function(rad) {
            var c = Math.cos(rad);
            var s = Math.sin(rad);
            var m11 = this.m[0] * c + this.m[2] * s;
            var m12 = this.m[1] * c + this.m[3] * s;
            var m21 = this.m[0] * -s + this.m[2] * c;
            var m22 = this.m[1] * -s + this.m[3] * c;
            this.m[0] = m11;
            this.m[1] = m12;
            this.m[2] = m21;
            this.m[3] = m22;
            return this;
        },
        /**
         * Returns the translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Object} 2D point(x, y)
         */
        getTranslation: function() {
            return {
                x: this.m[4],
                y: this.m[5]
            };
        },
        /**
         * Apply skew
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Number} sx
         * @param {Number} sy
         * @returns {Kinetic.Transform}
         */
        skew: function(sx, sy) {
            var m11 = this.m[0] + this.m[2] * sy;
            var m12 = this.m[1] + this.m[3] * sy;
            var m21 = this.m[2] + this.m[0] * sx;
            var m22 = this.m[3] + this.m[1] * sx;
            this.m[0] = m11;
            this.m[1] = m12;
            this.m[2] = m21;
            this.m[3] = m22;
            return this;
         },
        /**
         * Transform multiplication
         * @method
         * @memberof Kinetic.Transform.prototype
         * @param {Kinetic.Transform} matrix
         * @returns {Kinetic.Transform}
         */
        multiply: function(matrix) {
            var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
            var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];

            var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
            var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];

            var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
            var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];

            this.m[0] = m11;
            this.m[1] = m12;
            this.m[2] = m21;
            this.m[3] = m22;
            this.m[4] = dx;
            this.m[5] = dy;
            return this;
        },
        /**
         * Invert the matrix
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Kinetic.Transform}
         */
        invert: function() {
            var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
            var m0 = this.m[3] * d;
            var m1 = -this.m[1] * d;
            var m2 = -this.m[2] * d;
            var m3 = this.m[0] * d;
            var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
            var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
            this.m[0] = m0;
            this.m[1] = m1;
            this.m[2] = m2;
            this.m[3] = m3;
            this.m[4] = m4;
            this.m[5] = m5;
            return this;
        },
        /**
         * return matrix
         * @method
         * @memberof Kinetic.Transform.prototype
         */
        getMatrix: function() {
            return this.m;
        },
        /**
         * set to absolute position via translation
         * @method
         * @memberof Kinetic.Transform.prototype
         * @returns {Kinetic.Transform}
         * @author ericdrowell
         */
        setAbsolutePosition: function(x, y) {
            var m0 = this.m[0],
                m1 = this.m[1],
                m2 = this.m[2],
                m3 = this.m[3],
                m4 = this.m[4],
                m5 = this.m[5],
                yt = ((m0 * (y - m5)) - (m1 * (x - m4))) / ((m0 * m3) - (m1 * m2)),
                xt = (x - m4 - (m2 * yt)) / m0;

            return this.translate(xt, yt);
        }
    };

    // CONSTANTS
    var CONTEXT_2D = '2d',
        OBJECT_ARRAY = '[object Array]',
        OBJECT_NUMBER = '[object Number]',
        OBJECT_STRING = '[object String]',
        PI_OVER_DEG180 = Math.PI / 180,
        DEG180_OVER_PI = 180 / Math.PI,
        HASH = '#',
        EMPTY_STRING = '',
        ZERO = '0',
        KINETIC_WARNING = 'Kinetic warning: ',
        KINETIC_ERROR = 'Kinetic error: ',
        RGB_PAREN = 'rgb(',
        COLORS = {
            aqua: [0,255,255],
            lime: [0,255,0],
            silver: [192,192,192],
            black: [0,0,0],
            maroon: [128,0,0],
            teal: [0,128,128],
            blue: [0,0,255],
            navy: [0,0,128],
            white: [255,255,255],
            fuchsia: [255,0,255],
            olive:[128,128,0],
            yellow: [255,255,0],
            orange: [255,165,0],
            gray: [128,128,128],
            purple: [128,0,128],
            green: [0,128,0],
            red: [255,0,0],
            pink: [255,192,203],
            cyan: [0,255,255],
            transparent: [255,255,255,0]
        },

        RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;

    /**
     * @namespace Util
     * @memberof Kinetic
     */
    Kinetic.Util = {
        /*
         * cherry-picked utilities from underscore.js
         */
        _isElement: function(obj) {
            return !!(obj && obj.nodeType == 1);
        },
        _isFunction: function(obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        },
        _isObject: function(obj) {
            return (!!obj && obj.constructor == Object);
        },
        _isArray: function(obj) {
            return Object.prototype.toString.call(obj) == OBJECT_ARRAY;
        },
        _isNumber: function(obj) {
            return Object.prototype.toString.call(obj) == OBJECT_NUMBER;
        },
        _isString: function(obj) {
            return Object.prototype.toString.call(obj) == OBJECT_STRING;
        },
        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time. Normally, the throttled function will run
        // as much as it can, without ever going more than once per `wait` duration;
        // but if you'd like to disable the execution on the leading edge, pass
        // `{leading: false}`. To disable execution on the trailing edge, ditto.
        _throttle: function(func, wait, opts) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            var options = opts || {};
            var later = function() {
                previous = options.leading === false ? 0 : new Date().getTime();
                timeout = null;
                result = func.apply(context, args);
                context = args = null;
            };
            return function() {
                var now = new Date().getTime();
                if (!previous && options.leading === false) {
                    previous = now;
                }
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                  clearTimeout(timeout);
                  timeout = null;
                  previous = now;
                  result = func.apply(context, args);
                  context = args = null;
                } else if (!timeout && options.trailing !== false) {
                  timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },
        /*
         * other utils
         */
        _hasMethods: function(obj) {
            var names = [],
                key;

            for(key in obj) {
                if(this._isFunction(obj[key])) {
                    names.push(key);
                }
            }
            return names.length > 0;
        },
        createCanvasElement: function() {
            var canvas = Kinetic.document.createElement('canvas');
            // on some environments canvas.style is readonly
            try {
                canvas.style = canvas.style || {};
            } catch (e) {
            }
            return canvas;
        },
        isBrowser: function() {
            return (typeof exports !==  'object');
        },
        _isInDocument: function(el) {
            while(el = el.parentNode) {
                if(el == Kinetic.document) {
                    return true;
                }
            }
            return false;
        },
        _simplifyArray: function(arr) {
            var retArr = [],
                len = arr.length,
                util = Kinetic.Util,
                n, val;

            for (n=0; n<len; n++) {
                val = arr[n];
                if (util._isNumber(val)) {
                    val = Math.round(val * 1000) / 1000;
                }
                else if (!util._isString(val)) {
                    val = val.toString();
                }

                retArr.push(val);
            }

            return retArr;
        },
        /*
         * arg can be an image object or image data
         */
        _getImage: function(arg, callback) {
            var imageObj, canvas;

            // if arg is null or undefined
            if(!arg) {
                callback(null);
            }

            // if arg is already an image object
            else if(this._isElement(arg)) {
                callback(arg);
            }

            // if arg is a string, then it's a data url
            else if(this._isString(arg)) {
                imageObj = new Kinetic.window.Image();
                imageObj.onload = function() {
                    callback(imageObj);
                };
                imageObj.src = arg;
            }

            //if arg is an object that contains the data property, it's an image object
            else if(arg.data) {
                canvas = Kinetic.Util.createCanvasElement();
                canvas.width = arg.width;
                canvas.height = arg.height;
                var _context = canvas.getContext(CONTEXT_2D);
                _context.putImageData(arg, 0, 0);
                this._getImage(canvas.toDataURL(), callback);
            }
            else {
                callback(null);
            }
        },
        _getRGBAString: function(obj) {
            var red = obj.red || 0,
                green = obj.green || 0,
                blue = obj.blue || 0,
                alpha = obj.alpha || 1;

            return [
                'rgba(',
                red,
                ',',
                green,
                ',',
                blue,
                ',',
                alpha,
                ')'
            ].join(EMPTY_STRING);
        },
        _rgbToHex: function(r, g, b) {
            return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        _hexToRgb: function(hex) {
            hex = hex.replace(HASH, EMPTY_STRING);
            var bigint = parseInt(hex, 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255
            };
        },
        /**
         * return random hex color
         * @method
         * @memberof Kinetic.Util.prototype
         */
        getRandomColor: function() {
            var randColor = (Math.random() * 0xFFFFFF << 0).toString(16);
            while (randColor.length < 6) {
                randColor = ZERO + randColor;
            }
            return HASH + randColor;
        },
        /**
         * return value with default fallback
         * @method
         * @memberof Kinetic.Util.prototype
         */
        get: function(val, def) {
            if (val === undefined) {
                return def;
            }
            else {
                return val;
            }
        },
        /**
         * get RGB components of a color
         * @method
         * @memberof Kinetic.Util.prototype
         * @param {String} color
         * @example
         * // each of the following examples return {r:0, g:0, b:255}
         * var rgb = Kinetic.Util.getRGB('blue');
         * var rgb = Kinetic.Util.getRGB('#0000ff');
         * var rgb = Kinetic.Util.getRGB('rgb(0,0,255)');
         */
        getRGB: function(color) {
            var rgb;
            // color string
            if (color in COLORS) {
                rgb = COLORS[color];
                return {
                    r: rgb[0],
                    g: rgb[1],
                    b: rgb[2]
                };
            }
            // hex
            else if (color[0] === HASH) {
                return this._hexToRgb(color.substring(1));
            }
            // rgb string
            else if (color.substr(0, 4) === RGB_PAREN) {
                rgb = RGB_REGEX.exec(color.replace(/ /g,''));
                return {
                    r: parseInt(rgb[1], 10),
                    g: parseInt(rgb[2], 10),
                    b: parseInt(rgb[3], 10)
                };
            }
            // default
            else {
                return {
                    r: 0,
                    g: 0,
                    b: 0
                };
            }
        },
        // o1 takes precedence over o2
        _merge: function(o1, o2) {
            var retObj = this._clone(o2);
            for(var key in o1) {
                if(this._isObject(o1[key])) {
                    retObj[key] = this._merge(o1[key], retObj[key]);
                }
                else {
                    retObj[key] = o1[key];
                }
            }
            return retObj;
        },
        cloneObject: function(obj) {
            var retObj = {};
            for(var key in obj) {
                if(this._isObject(obj[key])) {
                    retObj[key] = this.cloneObject(obj[key]);
                }
                else if (this._isArray(obj[key])) {
                    retObj[key] = this.cloneArray(obj[key]);
                } else {
                    retObj[key] = obj[key];
                }
            }
            return retObj;
        },
        cloneArray: function(arr) {
            return arr.slice(0);
        },
        _degToRad: function(deg) {
            return deg * PI_OVER_DEG180;
        },
        _radToDeg: function(rad) {
            return rad * DEG180_OVER_PI;
        },
        _capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        error: function(str) {
            throw new Error(KINETIC_ERROR + str);
        },
        warn: function(str) {
            /*
             * IE9 on Windows7 64bit will throw a JS error
             * if we don't use window.console in the conditional
             */
            if(Kinetic.root.console && console.warn && Kinetic.showWarnings) {
                console.warn(KINETIC_WARNING + str);
            }
        },
        extend: function(child, parent) {
                function ctor() {
                    this.constructor = child;
                }
                ctor.prototype = parent.prototype;
                var old_proto = child.prototype;
                child.prototype = new ctor();
                for (var key in old_proto) {
                    if (old_proto.hasOwnProperty(key)) {
                        child.prototype[key] = old_proto[key];
                    }
                }
                child.__super__ = parent.prototype;
        },
        /**
         * adds methods to a constructor prototype
         * @method
         * @memberof Kinetic.Util.prototype
         * @param {Function} constructor
         * @param {Object} methods
         */
        addMethods: function(constructor, methods) {
            var key;

            for (key in methods) {
                constructor.prototype[key] = methods[key];
            }
        },
        _getControlPoints: function(x0, y0, x1, y1, x2, y2, t) {
            var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)),
                d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
                fa = t * d01 / (d01 + d12),
                fb = t * d12 / (d01 + d12),
                p1x = x1 - fa * (x2 - x0),
                p1y = y1 - fa * (y2 - y0),
                p2x = x1 + fb * (x2 - x0),
                p2y = y1 + fb * (y2 - y0);

            return [p1x ,p1y, p2x, p2y];
        },
        _expandPoints: function(p, tension) {
            var len = p.length,
                allPoints = [],
                n, cp;

            for (n=2; n<len-2; n+=2) {
                cp = Kinetic.Util._getControlPoints(p[n-2], p[n-1], p[n], p[n+1], p[n+2], p[n+3], tension);
                allPoints.push(cp[0]);
                allPoints.push(cp[1]);
                allPoints.push(p[n]);
                allPoints.push(p[n+1]);
                allPoints.push(cp[2]);
                allPoints.push(cp[3]);
            }

            return allPoints;
        },
        _removeLastLetter: function(str) {
            return str.substring(0, str.length - 1);
        }
    };
})();
;(function() {
    // calculate pixel ratio
    var canvas = Kinetic.Util.createCanvasElement(),
        context = canvas.getContext('2d'),
        // if using a mobile device, calculate the pixel ratio.  Otherwise, just use
        // 1.  For desktop browsers, if the user has zoom enabled, it affects the pixel ratio
        // and causes artifacts on the canvas.  As of 02/26/2014, there doesn't seem to be a way
        // to reliably calculate the browser zoom for modern browsers, which is why we just set
        // the pixel ratio to 1 for desktops
        _pixelRatio = Kinetic.UA.mobile ? (function() {
            var devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = context.webkitBackingStorePixelRatio
                || context.mozBackingStorePixelRatio
                || context.msBackingStorePixelRatio
                || context.oBackingStorePixelRatio
                || context.backingStorePixelRatio
                || 1;
            return devicePixelRatio / backingStoreRatio;
        })() : 1;

    /**
     * Canvas Renderer constructor
     * @constructor
     * @abstract
     * @memberof Kinetic
     * @param {Object} config
     * @param {Number} config.width
     * @param {Number} config.height
     * @param {Number} config.pixelRatio KineticJS automatically handles pixel ratio adjustments in order to render crisp drawings
     *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
     *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio 
     *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel 
     *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
     *  specified, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
     *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
     */
    Kinetic.Canvas = function(config) {
        this.init(config);
    };

    Kinetic.Canvas.prototype = {
        init: function(config) {
            var conf = config || {};

            var pixelRatio = conf.pixelRatio || Kinetic.pixelRatio || _pixelRatio;

            this.pixelRatio = pixelRatio;
            this._canvas = Kinetic.Util.createCanvasElement();

            // set inline styles
            this._canvas.style.padding = 0;
            this._canvas.style.margin = 0;
            this._canvas.style.border = 0;
            this._canvas.style.background = 'transparent';
            this._canvas.style.position = 'absolute';
            this._canvas.style.top = 0;
            this._canvas.style.left = 0;
        },
        /**
         * get canvas context
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {CanvasContext} context
         */
        getContext: function() {
            return this.context;
        },
        /**
         * get pixel ratio
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} pixel ratio
         */
        getPixelRatio: function() {
            return this.pixelRatio;
        },
        /**
         * get pixel ratio
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} pixelRatio KineticJS automatically handles pixel ratio adustments in order to render crisp drawings 
         *  on all devices. Most desktops, low end tablets, and low end phones, have device pixel ratios
         *  of 1.  Some high end tablets and phones, like iPhones and iPads (not the mini) have a device pixel ratio 
         *  of 2.  Some Macbook Pros, and iMacs also have a device pixel ratio of 2.  Some high end Android devices have pixel 
         *  ratios of 2 or 3.  Some browsers like Firefox allow you to configure the pixel ratio of the viewport.  Unless otherwise
         *  specificed, the pixel ratio will be defaulted to the actual device pixel ratio.  You can override the device pixel
         *  ratio for special situations, or, if you don't want the pixel ratio to be taken into account, you can set it to 1.
         */
        setPixelRatio: function(pixelRatio) {
            this.pixelRatio = pixelRatio;
            this.setSize(this.getWidth(), this.getHeight());
        },
        /**
         * set width
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} width
         */
        setWidth: function(width) {
            // take into account pixel ratio
            this.width = this._canvas.width = width * this.pixelRatio;
            this._canvas.style.width = width + 'px';
        },
        /**
         * set height
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} height
         */
        setHeight: function(height) {
            // take into account pixel ratio
            this.height = this._canvas.height = height * this.pixelRatio;
            this._canvas.style.height = height + 'px';
        },
        /**
         * get width
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} width
         */
        getWidth: function() {
            return this.width;
        },
        /**
         * get height
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @returns {Number} height
         */
        getHeight: function() {
            return this.height;
        },
        /**
         * set size
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {Number} width
         * @param {Number} height
         */
        setSize: function(width, height) {
            this.setWidth(width);
            this.setHeight(height);
        },
        /**
         * to data url
         * @method
         * @memberof Kinetic.Canvas.prototype
         * @param {String} mimeType
         * @param {Number} quality between 0 and 1 for jpg mime types
         * @returns {String} data url string
         */
        toDataURL: function(mimeType, quality) {
            try {
                // If this call fails (due to browser bug, like in Firefox 3.6),
                // then revert to previous no-parameter image/png behavior
                return this._canvas.toDataURL(mimeType, quality);
            }
            catch(e) {
                try {
                    return this._canvas.toDataURL();
                }
                catch(err) {
                    Kinetic.Util.warn('Unable to get data URL. ' + err.message);
                    return '';
                }
            }
        }
    };

    Kinetic.SceneCanvas = function(config) {
        var conf = config || {};
        var width = conf.width || 0,
            height = conf.height || 0;

        Kinetic.Canvas.call(this, conf);
        this.context = new Kinetic.SceneContext(this);
        this.setSize(width, height);
    };

    Kinetic.SceneCanvas.prototype = {
        setWidth: function(width) {
            var pixelRatio = this.pixelRatio,
                _context = this.getContext()._context;

            Kinetic.Canvas.prototype.setWidth.call(this, width);
            _context.scale(pixelRatio, pixelRatio);
        },
        setHeight: function(height) {
            var pixelRatio = this.pixelRatio,
                _context = this.getContext()._context;

            Kinetic.Canvas.prototype.setHeight.call(this, height);
            _context.scale(pixelRatio, pixelRatio);
        }
    };
    Kinetic.Util.extend(Kinetic.SceneCanvas, Kinetic.Canvas);

    Kinetic.HitCanvas = function(config) {
        var conf = config || {};
        var width = conf.width || 0,
            height = conf.height || 0;
            
        Kinetic.Canvas.call(this, conf);
        this.context = new Kinetic.HitContext(this);
        this.setSize(width, height);
        this.hitCanvas = true;
    };
    Kinetic.Util.extend(Kinetic.HitCanvas, Kinetic.Canvas);

})();
;(function() {
    var COMMA = ',',
        OPEN_PAREN = '(',
        CLOSE_PAREN = ')',
        OPEN_PAREN_BRACKET = '([',
        CLOSE_BRACKET_PAREN = '])',
        SEMICOLON = ';',
        DOUBLE_PAREN = '()',
        // EMPTY_STRING = '',
        EQUALS = '=',
        // SET = 'set',
        CONTEXT_METHODS = [
            'arc',
            'arcTo',
            'beginPath',
            'bezierCurveTo',
            'clearRect',
            'clip',
            'closePath',
            'createLinearGradient',
            'createPattern',
            'createRadialGradient',
            'drawImage',
            'fill',
            'fillText',
            'getImageData',
            'createImageData',
            'lineTo',
            'moveTo',
            'putImageData',
            'quadraticCurveTo',
            'rect',
            'restore',
            'rotate',
            'save',
            'scale',
            'setLineDash',
            'setTransform',
            'stroke',
            'strokeText',
            'transform',
            'translate'
        ];

    /**
     * Canvas Context constructor
     * @constructor
     * @abstract
     * @memberof Kinetic
     */
    Kinetic.Context = function(canvas) {
        this.init(canvas);
    };

    Kinetic.Context.prototype = {
        init: function(canvas) {
            this.canvas = canvas;
            this._context = canvas._canvas.getContext('2d');

            if (Kinetic.enableTrace) {
                this.traceArr = [];
                this._enableTrace();
            }
        },
        /**
         * fill shape
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */
        fillShape: function(shape) {
            if(shape.getFillEnabled()) {
                this._fill(shape);
            }
        },
        /**
         * stroke shape
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */
        strokeShape: function(shape) {
            if(shape.getStrokeEnabled()) {
                this._stroke(shape);
            }
        },
        /**
         * fill then stroke
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Kinetic.Shape} shape
         */
        fillStrokeShape: function(shape) {
            var fillEnabled = shape.getFillEnabled();
            if(fillEnabled) {
                this._fill(shape);
            }
            if(shape.getStrokeEnabled()) {
                this._stroke(shape);
            }
        },
        /**
         * get context trace if trace is enabled
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Boolean} relaxed if false, return strict context trace, which includes method names, method parameters
         *  properties, and property values.  If true, return relaxed context trace, which only returns method names and
         *  properites.
         * @returns {String}
         */
        getTrace: function(relaxed) {
            var traceArr = this.traceArr,
                len = traceArr.length,
                str = '',
                n, trace, method, args;

            for (n=0; n<len; n++) {
                trace = traceArr[n];
                method = trace.method;

                // methods
                if (method) {
                    args = trace.args;
                    str += method;
                    if (relaxed) {
                        str += DOUBLE_PAREN;
                    }
                    else {
                        if (Kinetic.Util._isArray(args[0])) {
                            str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                        }
                        else {
                            str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                        }
                    }
                }
                // properties
                else {
                    str += trace.property;
                    if (!relaxed) {
                        str += EQUALS + trace.val;
                    }
                }

                str += SEMICOLON;
            }

            return str;
        },
        /**
         * clear trace if trace is enabled
         * @method
         * @memberof Kinetic.Context.prototype
         */
        clearTrace: function() {
            this.traceArr = [];
        },
        _trace: function(str) {
            var traceArr = this.traceArr,
                len;
 
            traceArr.push(str);
            len = traceArr.length;

            if (len >= Kinetic.traceArrMax) {
                traceArr.shift();
            }
        },
        /**
         * reset canvas context transform
         * @method
         * @memberof Kinetic.Context.prototype
         */
        reset: function() {
            var pixelRatio = this.getCanvas().getPixelRatio();
            this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
        },
        /**
         * get canvas
         * @method
         * @memberof Kinetic.Context.prototype
         * @returns {Kinetic.Canvas}
         */
        getCanvas: function() {
            return this.canvas;
        },
        /**
         * clear canvas
         * @method
         * @memberof Kinetic.Context.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         */
        clear: function(bounds) {
            var canvas = this.getCanvas();
            
            if (bounds) {
                this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
            }
            else {
                this.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
            }
        },
        _applyLineCap: function(shape) {
            var lineCap = shape.getLineCap();
            if(lineCap) {
                this.setAttr('lineCap', lineCap);
            }
        },
        _applyOpacity: function(shape) {
            var absOpacity = shape.getAbsoluteOpacity();
            if(absOpacity !== 1) {
                this.setAttr('globalAlpha', absOpacity);
            }
        },
        _applyLineJoin: function(shape) {
            var lineJoin = shape.getLineJoin();
            if(lineJoin) {
                this.setAttr('lineJoin', lineJoin);
            }
        },
        setAttr: function(attr, val) {
            this._context[attr] = val;
        },

        // context pass through methods
        arc: function() {
            var a = arguments;
            this._context.arc(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        beginPath: function() {
            this._context.beginPath();
        },
        bezierCurveTo: function() {
            var a = arguments;
            this._context.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        clearRect: function() {
            var a = arguments;
            this._context.clearRect(a[0], a[1], a[2], a[3]);
        },
        clip: function() {
            this._context.clip();
        },
        closePath: function() {
            this._context.closePath();
        },
        createImageData: function() {
            var a = arguments;
            if(a.length === 2) {
                return this._context.createImageData(a[0], a[1]);
            }
            else if(a.length === 1) {
                return this._context.createImageData(a[0]);
            }
        },
        createLinearGradient: function() {
            var a = arguments;
            return this._context.createLinearGradient(a[0], a[1], a[2], a[3]);
        },
        createPattern: function() {
            var a = arguments;
            return this._context.createPattern(a[0], a[1]);
        },
        createRadialGradient: function() {
            var a = arguments;
            return this._context.createRadialGradient(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        drawImage: function() {
            var a = arguments,
                _context = this._context;

            if(a.length === 3) {
                _context.drawImage(a[0], a[1], a[2]);
            }
            else if(a.length === 5) {
                _context.drawImage(a[0], a[1], a[2], a[3], a[4]);
            }
            else if(a.length === 9) {
                _context.drawImage(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
            }
        },
        fill: function() {
            this._context.fill();
        },
        fillText: function() {
            var a = arguments;
            this._context.fillText(a[0], a[1], a[2]);
        },
        getImageData: function() {
            var a = arguments;
            return this._context.getImageData(a[0], a[1], a[2], a[3]);
        },
        lineTo: function() {
            var a = arguments;
            this._context.lineTo(a[0], a[1]);
        },
        moveTo: function() {
            var a = arguments;
            this._context.moveTo(a[0], a[1]);
        },
        rect: function() {
            var a = arguments;
            this._context.rect(a[0], a[1], a[2], a[3]);
        },
        putImageData: function() {
            var a = arguments;
            this._context.putImageData(a[0], a[1], a[2]);
        },
        quadraticCurveTo: function() {
            var a = arguments;
            this._context.quadraticCurveTo(a[0], a[1], a[2], a[3]);
        },
        restore: function() {
            this._context.restore();
        },
        rotate: function() {
            var a = arguments;
            this._context.rotate(a[0]);
        },
        save: function() {
            this._context.save();
        },
        scale: function() {
            var a = arguments;
            this._context.scale(a[0], a[1]);
        },
        setLineDash: function() {
            var a = arguments,
                _context = this._context;

            // works for Chrome and IE11
            if(this._context.setLineDash) {
                _context.setLineDash(a[0]);
            }
            // verified that this works in firefox
            else if('mozDash' in _context) {
                _context.mozDash = a[0];
            }
            // does not currently work for Safari
            else if('webkitLineDash' in _context) {
                _context.webkitLineDash = a[0];
            }

            // no support for IE9 and IE10
        },
        setTransform: function() {
            var a = arguments;
            this._context.setTransform(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        stroke: function() {
            this._context.stroke();
        },
        strokeText: function() {
            var a = arguments;
            this._context.strokeText(a[0], a[1], a[2]);
        },
        transform: function() {
            var a = arguments;
            this._context.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
        },
        translate: function() {
            var a = arguments;
            this._context.translate(a[0], a[1]);
        },
        _enableTrace: function() {
            var that = this,
                len = CONTEXT_METHODS.length,
                _simplifyArray = Kinetic.Util._simplifyArray,
                origSetter = this.setAttr,
                n, args;

            // to prevent creating scope function at each loop
            var func = function(methodName) {
                    var origMethod = that[methodName],
                        ret;

                    that[methodName] = function() {
                        args = _simplifyArray(Array.prototype.slice.call(arguments, 0));
                        ret = origMethod.apply(that, arguments);
           
                        that._trace({
                            method: methodName,
                            args: args
                        });
                 
                        return ret;
                    };
            };
            // methods
            for (n=0; n<len; n++) {
                func(CONTEXT_METHODS[n]);
            }

            // attrs
            that.setAttr = function() {
                origSetter.apply(that, arguments);
                that._trace({
                    property: arguments[0],
                    val: arguments[1]
                });
            };
        }
    };

    Kinetic.SceneContext = function(canvas) {
        Kinetic.Context.call(this, canvas);
    };

    Kinetic.SceneContext.prototype = {
        _fillColor: function(shape) {
            var fill = shape.fill()
                || Kinetic.Util._getRGBAString({
                    red: shape.fillRed(),
                    green: shape.fillGreen(),
                    blue: shape.fillBlue(),
                    alpha: shape.fillAlpha()
                });

            this.setAttr('fillStyle', fill);
            shape._fillFunc(this);
        },
        _fillPattern: function(shape) {
            var fillPatternImage = shape.getFillPatternImage(),
                fillPatternX = shape.getFillPatternX(),
                fillPatternY = shape.getFillPatternY(),
                fillPatternScale = shape.getFillPatternScale(),
                fillPatternRotation = Kinetic.getAngle(shape.getFillPatternRotation()),
                fillPatternOffset = shape.getFillPatternOffset(),
                fillPatternRepeat = shape.getFillPatternRepeat();

            if(fillPatternX || fillPatternY) {
                this.translate(fillPatternX || 0, fillPatternY || 0);
            }
            if(fillPatternRotation) {
                this.rotate(fillPatternRotation);
            }
            if(fillPatternScale) {
                this.scale(fillPatternScale.x, fillPatternScale.y);
            }
            if(fillPatternOffset) {
                this.translate(-1 * fillPatternOffset.x, -1 * fillPatternOffset.y);
            }

            this.setAttr('fillStyle', this.createPattern(fillPatternImage, fillPatternRepeat || 'repeat'));
            this.fill();
        },
        _fillLinearGradient: function(shape) {
            var start = shape.getFillLinearGradientStartPoint(),
                end = shape.getFillLinearGradientEndPoint(),
                colorStops = shape.getFillLinearGradientColorStops(),
                grd = this.createLinearGradient(start.x, start.y, end.x, end.y);

            if (colorStops) {
                // build color stops
                for(var n = 0; n < colorStops.length; n += 2) {
                    grd.addColorStop(colorStops[n], colorStops[n + 1]);
                }
                this.setAttr('fillStyle', grd);
                this.fill();
            }
        },
        _fillRadialGradient: function(shape) {
            var start = shape.getFillRadialGradientStartPoint(),
                end = shape.getFillRadialGradientEndPoint(),
                startRadius = shape.getFillRadialGradientStartRadius(),
                endRadius = shape.getFillRadialGradientEndRadius(),
                colorStops = shape.getFillRadialGradientColorStops(),
                grd = this.createRadialGradient(start.x, start.y, startRadius, end.x, end.y, endRadius);
           
            // build color stops
            for(var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            this.setAttr('fillStyle', grd);
            this.fill();
        },
        _fill: function(shape) {
            var hasColor = shape.fill() || shape.fillRed() || shape.fillGreen() || shape.fillBlue(),
                hasPattern = shape.getFillPatternImage(),
                hasLinearGradient = shape.getFillLinearGradientColorStops(),
                hasRadialGradient = shape.getFillRadialGradientColorStops(),
                fillPriority = shape.getFillPriority();

            // priority fills
            if(hasColor && fillPriority === 'color') {
                this._fillColor(shape);
            }
            else if(hasPattern && fillPriority === 'pattern') {
                this._fillPattern(shape);
            }
            else if(hasLinearGradient && fillPriority === 'linear-gradient') {
                this._fillLinearGradient(shape);
            }
            else if(hasRadialGradient && fillPriority === 'radial-gradient') {
                this._fillRadialGradient(shape);
            }
            // now just try and fill with whatever is available
            else if(hasColor) {
                this._fillColor(shape);
            }
            else if(hasPattern) {
                this._fillPattern(shape);
            }
            else if(hasLinearGradient) {
                this._fillLinearGradient(shape);
            }
            else if(hasRadialGradient) {
                this._fillRadialGradient(shape);
            }
        },
        _stroke: function(shape) {
            var dash = shape.dash(),
                strokeScaleEnabled = shape.getStrokeScaleEnabled();

            if(shape.hasStroke()) {
                if (!strokeScaleEnabled) {
                    this.save();
                    this.setTransform(1, 0, 0, 1, 0, 0);
                }

                this._applyLineCap(shape);
                if(dash && shape.dashEnabled()) {
                    this.setLineDash(dash);
                }

                this.setAttr('lineWidth', shape.strokeWidth());
                this.setAttr('strokeStyle', shape.stroke()
                    || Kinetic.Util._getRGBAString({
                        red: shape.strokeRed(),
                        green: shape.strokeGreen(),
                        blue: shape.strokeBlue(),
                        alpha: shape.strokeAlpha()
                    }));

                shape._strokeFunc(this);
                
                if (!strokeScaleEnabled) {
                    this.restore();
                }
            }
        },
        _applyShadow: function(shape) {
            var util = Kinetic.Util,
                absOpacity = shape.getAbsoluteOpacity(),
                color = util.get(shape.getShadowColor(), 'black'),
                blur = util.get(shape.getShadowBlur(), 5),
                shadowOpacity = util.get(shape.getShadowOpacity(), 1),
                offset = util.get(shape.getShadowOffset(), {
                    x: 0,
                    y: 0
                });

            if(shadowOpacity) {
                this.setAttr('globalAlpha', shadowOpacity * absOpacity);
            }

            this.setAttr('shadowColor', color);
            this.setAttr('shadowBlur', blur);
            this.setAttr('shadowOffsetX', offset.x);
            this.setAttr('shadowOffsetY', offset.y);
        
        }
    };
    Kinetic.Util.extend(Kinetic.SceneContext, Kinetic.Context);

    Kinetic.HitContext = function(canvas) {
        Kinetic.Context.call(this, canvas);
    };

    Kinetic.HitContext.prototype = {
        _fill: function(shape) {
            this.save();
            this.setAttr('fillStyle', shape.colorKey);
            shape._fillFuncHit(this);
            this.restore();
        },
        _stroke: function(shape) {
            if(shape.hasStroke()) {
                this._applyLineCap(shape);
                this.setAttr('lineWidth', shape.strokeWidth());
                this.setAttr('strokeStyle', shape.colorKey);
                shape._strokeFuncHit(this);
            }
        }
    };
    Kinetic.Util.extend(Kinetic.HitContext, Kinetic.Context);
})();
;/*jshint unused:false */
(function() {
    // CONSTANTS
    var GET = 'get',
        RGB = 'RGB',
        SET = 'set';

    Kinetic.Factory = {
        addGetterSetter: function(constructor, attr, def, validator, after) {
            this.addGetter(constructor, attr, def);
            this.addSetter(constructor, attr, validator, after);
            this.addOverloadedGetterSetter(constructor, attr);
        },
        addGetter: function(constructor, attr, def) {
            var method = GET + Kinetic.Util._capitalize(attr);

            constructor.prototype[method] = function() {
                var val = this.attrs[attr];
                return val === undefined ? def : val;
            };
        },
        addSetter: function(constructor, attr, validator, after) {
            var method = SET + Kinetic.Util._capitalize(attr);

            constructor.prototype[method] = function(val) {
                if (validator) {
                    val = validator.call(this, val);
                }

                this._setAttr(attr, val);

                if (after) {
                    after.call(this);
                }

                return this;
            };
        },
        addComponentsGetterSetter: function(constructor, attr, components, validator, after) {
            var len = components.length,
                capitalize = Kinetic.Util._capitalize,
                getter = GET + capitalize(attr),
                setter = SET + capitalize(attr),
                n, component;

            // getter
            constructor.prototype[getter] = function() {
                var ret = {};

                for (n=0; n<len; n++) {
                    component = components[n];
                    ret[component] = this.getAttr(attr + capitalize(component));
                }

                return ret;
            };

            // setter
            constructor.prototype[setter] = function(val) {
                var oldVal = this.attrs[attr],
                    key;

                if (validator) {
                    val = validator.call(this, val);
                }

                for (key in val) {
                    this._setAttr(attr + capitalize(key), val[key]);
                }

                this._fireChangeEvent(attr, oldVal, val);
                
                if (after) {
                    after.call(this);
                }

                return this;
            };

            this.addOverloadedGetterSetter(constructor, attr);
        },
        addOverloadedGetterSetter: function(constructor, attr) {
            var capitalizedAttr = Kinetic.Util._capitalize(attr),
                setter = SET + capitalizedAttr,
                getter = GET + capitalizedAttr;

            constructor.prototype[attr] = function() {
                // setting
                if (arguments.length) {
                    this[setter](arguments[0]);
                    return this;
                }
                // getting
                else {
                    return this[getter]();
                }
            };
        },
        backCompat: function(constructor, methods) {
            var key;

            for (key in methods) {
                constructor.prototype[key] = constructor.prototype[methods[key]];
            }
        },
        afterSetFilter: function() {
            this._filterUpToDate = false;
        }
    };

    Kinetic.Validators = {
        /**
         * @return {number}
         */
        RGBComponent: function(val) {
            if (val > 255) {
                return 255;
            } else if (val < 0) {
                return 0;
            } else {
                return Math.round(val);
            }
        },
        alphaComponent: function(val) {
            if (val > 1) {
                return 1;
            }
            // chrome does not honor alpha values of 0
            else if (val < 0.0001) {
                return 0.0001;
            }
            else {
                return val;
            }
        }
    };
})();;(function() {
    // CONSTANTS
    var ABSOLUTE_OPACITY = 'absoluteOpacity',
        ABSOLUTE_TRANSFORM = 'absoluteTransform',
        CHANGE = 'Change',
        CHILDREN = 'children',
        DOT = '.',
        EMPTY_STRING = '',
        GET = 'get',
        ID = 'id',
        KINETIC = 'kinetic',
        LISTENING = 'listening',
        MOUSEENTER = 'mouseenter',
        MOUSELEAVE = 'mouseleave',
        NAME = 'name',
        SET = 'set',
        SHAPE = 'Shape',
        SPACE = ' ',
        STAGE = 'stage',
        TRANSFORM = 'transform',
        UPPER_STAGE = 'Stage',
        VISIBLE = 'visible',
        CLONE_BLACK_LIST = ['id'],

        TRANSFORM_CHANGE_STR = [
            'xChange.kinetic',
            'yChange.kinetic',
            'scaleXChange.kinetic',
            'scaleYChange.kinetic',
            'skewXChange.kinetic',
            'skewYChange.kinetic',
            'rotationChange.kinetic',
            'offsetXChange.kinetic',
            'offsetYChange.kinetic',
            'transformsEnabledChange.kinetic'
        ].join(SPACE);


    Kinetic.Util.addMethods(Kinetic.Node, {
        _init: function(config) {
            var that = this;
            this._id = Kinetic.idCounter++;
            this.eventListeners = {};
            this.attrs = {};
            this._cache = {};
            this._filterUpToDate = false;
            this.setAttrs(config);

            // event bindings for cache handling
            this.on(TRANSFORM_CHANGE_STR, function() {
                this._clearCache(TRANSFORM);
                that._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
            });
            this.on('visibleChange.kinetic', function() {
                that._clearSelfAndDescendantCache(VISIBLE);
            });
            this.on('listeningChange.kinetic', function() {
                that._clearSelfAndDescendantCache(LISTENING);
            });
            this.on('opacityChange.kinetic', function() {
                that._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
            });
        },
        _clearCache: function(attr){
            if (attr) {
                delete this._cache[attr];
            }
            else {
                this._cache = {};
            }
        },
        _getCache: function(attr, privateGetter){
            var cache = this._cache[attr];

            // if not cached, we need to set it using the private getter method.
            if (cache === undefined) {
                this._cache[attr] = privateGetter.call(this);
            }

            return this._cache[attr];
        },
        /*
         * when the logic for a cached result depends on ancestor propagation, use this
         * method to clear self and children cache
         */
        _clearSelfAndDescendantCache: function(attr) {
            this._clearCache(attr);

            if (this.children) {
                this.getChildren().each(function(node) {
                    node._clearSelfAndDescendantCache(attr);
                });
            }
        },
        /**
        * clear cached canvas
        * @method
        * @memberof Kinetic.Node.prototype
        * @returns {Kinetic.Node}
        * @example
        * node.clearCache();
        */
        clearCache: function() {
            delete this._cache.canvas;
            this._filterUpToDate = false;
            return this;
        },
        /**
        * cache node to improve drawing performance, apply filters, or create more accurate
        *  hit regions
        * @method
        * @memberof Kinetic.Node.prototype
        * @param {Object} config
        * @param {Number} [config.x]
        * @param {Number} [config.y]
        * @param {Number} [config.width]
        * @param {Number} [config.height]
        * @param {Boolean} [config.drawBorder] when set to true, a red border will be drawn around the cached
        *  region for debugging purposes
        * @returns {Kinetic.Node}
        * @example
        * // cache a shape with the x,y position of the bounding box at the center and
        * // the width and height of the bounding box equal to the width and height of
        * // the shape obtained from shape.width() and shape.height()
        * image.cache();
        *
        * // cache a node and define the bounding box position and size
        * node.cache({
        *   x: -30,
        *   y: -30,
        *   width: 100,
        *   height: 200
        * });
        *
        * // cache a node and draw a red border around the bounding box
        * // for debugging purposes
        * node.cache({
        *   x: -30,
        *   y: -30,
        *   width: 100,
        *   height: 200,
        *   drawBorder: true
        * });
        */
        cache: function(config) {
            var conf = config || {},
                x = conf.x || 0,
                y = conf.y || 0,
                width = conf.width || this.width(),
                height = conf.height || this.height(),
                drawBorder = conf.drawBorder || false;

            if (width === 0 || height === 0) {
                Kinetic.Util.warn('Width or height of caching configuration equals 0. Cache is ignored.');
                return;
            }
            var cachedSceneCanvas = new Kinetic.SceneCanvas({
                    pixelRatio: 1,
                    width: width,
                    height: height
                }),
                cachedFilterCanvas = new Kinetic.SceneCanvas({
                    pixelRatio: 1,
                    width: width,
                    height: height
                }),
                cachedHitCanvas = new Kinetic.HitCanvas({
                    width: width,
                    height: height
                }),
                sceneContext = cachedSceneCanvas.getContext(),
                hitContext = cachedHitCanvas.getContext();

            cachedHitCanvas.isCache = true;

            this.clearCache();
   
            sceneContext.save();
            hitContext.save();

            // this will draw a red border around the cached box for
            // debugging purposes
            if (drawBorder) {
                sceneContext.save();
                sceneContext.beginPath();
                sceneContext.rect(0, 0, width, height);
                sceneContext.closePath();
                sceneContext.setAttr('strokeStyle', 'red');
                sceneContext.setAttr('lineWidth', 5);
                sceneContext.stroke();
                sceneContext.restore();
            }

            sceneContext.translate(x * -1, y * -1);
            hitContext.translate(x * -1, y * -1);

            // don't need to translate canvas if shape is not added to layer
            if (this.nodeType === 'Shape') {
                sceneContext.translate(this.x() * -1, this.y() * -1);
                hitContext.translate(this.x() * -1, this.y() * -1);
            }

            this.drawScene(cachedSceneCanvas, this);
            this.drawHit(cachedHitCanvas, this);

            sceneContext.restore();
            hitContext.restore();

            this._cache.canvas = {
                scene: cachedSceneCanvas,
                filter: cachedFilterCanvas,
                hit: cachedHitCanvas
            };

            return this;
        },
        _drawCachedSceneCanvas: function(context) {
            context.save();
            this.getLayer()._applyTransform(this, context);
            context._applyOpacity(this);
            context.drawImage(this._getCachedSceneCanvas()._canvas, 0, 0);
            context.restore();
        },
        _getCachedSceneCanvas: function() {
            var filters = this.filters(),
                cachedCanvas = this._cache.canvas,
                sceneCanvas = cachedCanvas.scene,
                filterCanvas = cachedCanvas.filter,
                filterContext = filterCanvas.getContext(),
                len, imageData, n, filter;

            if (filters) {
                if (!this._filterUpToDate) {
                    try {
                        len = filters.length;
                        filterContext.clear();
                        // copy cached canvas onto filter context
                        filterContext.drawImage(sceneCanvas._canvas, 0, 0);
                        imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());

                        // apply filters to filter context
                        for (n=0; n<len; n++) {
                            filter = filters[n];
                            filter.call(this, imageData);
                            filterContext.putImageData(imageData, 0, 0);
                        }
                    }
                    catch(e) {
                        Kinetic.Util.warn('Unable to apply filter. ' + e.message);
                    }

                    this._filterUpToDate = true;
                }

                return filterCanvas;
            }
            else {
                return sceneCanvas;
            }
        },
        _drawCachedHitCanvas: function(context) {
            var cachedCanvas = this._cache.canvas,
                hitCanvas = cachedCanvas.hit;

            context.save();
            this.getLayer()._applyTransform(this, context);
            context.drawImage(hitCanvas._canvas, 0, 0);
            context.restore();
        },
        /**
         * bind events to the node. KineticJS supports mouseover, mousemove,
         *  mouseout, mouseenter, mouseleave, mousedown, mouseup, mousewheel, click, dblclick, touchstart, touchmove,
         *  touchend, tap, dbltap, dragstart, dragmove, and dragend events. The Kinetic Stage supports
         *  contentMouseover, contentMousemove, contentMouseout, contentMousedown, contentMouseup,
         *  contentClick, contentDblclick, contentTouchstart, contentTouchmove, contentTouchend, contentTap,
         *  and contentDblTap.  Pass in a string of events delimmited by a space to bind multiple events at once
         *  such as 'mousedown mouseup mousemove'. Include a namespace to bind an
         *  event by name such as 'click.foobar'.
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} evtStr e.g. 'click', 'mousedown touchstart', 'mousedown.foo touchstart.foo'
         * @param {Function} handler The handler function is passed an event object
         * @returns {Kinetic.Node}
         * @example
         * // add click listener
         * node.on('click', function() {
         *   console.log('you clicked me!');
         * });
         *
         * // get the target node
         * node.on('click', function(evt) {
         *   console.log(evt.target);
         * });
         *
         * // stop event propagation
         * node.on('click', function(evt) {
         *   evt.cancelBubble = true;
         * });
         *
         * // bind multiple listeners
         * node.on('click touchstart', function() {
         *   console.log('you clicked/touched me!');
         * });
         *
         * // namespace listener
         * node.on('click.foo', function() {
         *   console.log('you clicked/touched me!');
         * });
         *
         * // get the event type
         * node.on('click tap', function(evt) {
         *   var eventType = evt.type;
         * });
         *
         * // get native event object
         * node.on('click tap', function(evt) {
         *   var nativeEvent = evt.evt;
         * });
         *
         * // for change events, get the old and new val
         * node.on('xChange', function(evt) {
         *   var oldVal = evt.oldVal;
         *   var newVal = evt.newVal;
         * });
         */
        on: function(evtStr, handler) {
            var events = evtStr.split(SPACE),
                len = events.length,
                n, event, parts, baseEvent, name;

             /*
             * loop through types and attach event listeners to
             * each one.  eg. 'click mouseover.namespace mouseout'
             * will create three event bindings
             */
            for(n = 0; n < len; n++) {
                event = events[n];
                parts = event.split(DOT);
                baseEvent = parts[0];
                name = parts[1] || EMPTY_STRING;

                // create events array if it doesn't exist
                if(!this.eventListeners[baseEvent]) {
                    this.eventListeners[baseEvent] = [];
                }

                this.eventListeners[baseEvent].push({
                    name: name,
                    handler: handler
                });
            }

            return this;
        },
        /**
         * remove event bindings from the node. Pass in a string of
         *  event types delimmited by a space to remove multiple event
         *  bindings at once such as 'mousedown mouseup mousemove'.
         *  include a namespace to remove an event binding by name
         *  such as 'click.foobar'. If you only give a name like '.foobar',
         *  all events in that namespace will be removed.
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} evtStr e.g. 'click', 'mousedown touchstart', '.foobar'
         * @returns {Kinetic.Node}
         * @example
         * // remove listener
         * node.off('click');
         *
         * // remove multiple listeners
         * node.off('click touchstart');
         *
         * // remove listener by name
         * node.off('click.foo');
         */
        off: function(evtStr) {
            var events = (evtStr || '').split(SPACE),
                len = events.length,
                n, t, event, parts, baseEvent, name;

            if (!evtStr) {
                // remove all events
                for(t in this.eventListeners) {
                    this._off(t);
                }
            }
            for(n = 0; n < len; n++) {
                event = events[n];
                parts = event.split(DOT);
                baseEvent = parts[0];
                name = parts[1];

                if(baseEvent) {
                    if(this.eventListeners[baseEvent]) {
                        this._off(baseEvent, name);
                    }
                }
                else {
                    for(t in this.eventListeners) {
                        this._off(t, name);
                    }
                }
            }
            return this;
        },
        // some event aliases for third party integration like HammerJS
        dispatchEvent: function(evt) {
            var e = {
              target: this,
              type: evt.type,
              evt: evt
            };
            this.fire(evt.type, e);
        },
        addEventListener: function(type, handler) {
            // we have to pass native event to handler
            this.on(type, function(evt){
                handler.call(this, evt.evt);
            });
        },
        removeEventListener : function(type) {
            this.off(type);
        },
        /**
         * remove self from parent, but don't destroy
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         * @example
         * node.remove();
         */
        remove: function() {
            var parent = this.getParent();

            if(parent && parent.children) {
                parent.children.splice(this.index, 1);
                parent._setChildrenIndices();
                delete this.parent;
            }

            // every cached attr that is calculated via node tree
            // traversal must be cleared when removing a node
            this._clearSelfAndDescendantCache(STAGE);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
            this._clearSelfAndDescendantCache(VISIBLE);
            this._clearSelfAndDescendantCache(LISTENING);
            this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);

            return this;
        },
        /**
         * remove and destroy self
         * @method
         * @memberof Kinetic.Node.prototype
         * @example
         * node.destroy();
         */
        destroy: function() {
            // remove from ids and names hashes
            Kinetic._removeId(this.getId());
            Kinetic._removeName(this.getName(), this._id);

            this.remove();
        },
        /**
         * get attr
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} attr
         * @returns {Integer|String|Object|Array}
         * @example
         * var x = node.getAttr('x');
         */
        getAttr: function(attr) {
            var method = GET + Kinetic.Util._capitalize(attr);
            if(Kinetic.Util._isFunction(this[method])) {
                return this[method]();
            }
            // otherwise get directly
            else {
                return this.attrs[attr];
            }
        },
        /**
        * get ancestors
        * @method
        * @memberof Kinetic.Node.prototype
        * @returns {Kinetic.Collection}
        * @example
        * shape.getAncestors().each(function(node) {
        *   console.log(node.getId());
        * })
        */
        getAncestors: function() {
            var parent = this.getParent(),
                ancestors = new Kinetic.Collection();

            while (parent) {
                ancestors.push(parent);
                parent = parent.getParent();
            }

            return ancestors;
        },
        /**
         * get attrs object literal
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        getAttrs: function() {
            return this.attrs || {};
        },
        /**
         * set multiple attrs at once using an object literal
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config object containing key value pairs
         * @returns {Kinetic.Node}
         * @example
         * node.setAttrs({
         *   x: 5,
         *   fill: 'red'
         * });
         */
        setAttrs: function(config) {
            var key, method;

            if(config) {
                for(key in config) {
                    if (key === CHILDREN || config[key] instanceof Kinetic.Node) {

                    }
                    else {
                        method = SET + Kinetic.Util._capitalize(key);
                        // use setter if available
                        if(Kinetic.Util._isFunction(this[method])) {
                            this[method](config[key]);
                        }
                        // otherwise set directly
                        else {
                            this._setAttr(key, config[key]);
                        }
                    }
                }
            }
            return this;
        },
        /**
         * determine if node is listening for events by taking into account ancestors.
         *
         * Parent    | Self      | isListening
         * listening | listening | 
         * ----------+-----------+------------
         * T         | T         | T 
         * T         | F         | F
         * F         | T         | T 
         * F         | F         | F
         * ----------+-----------+------------
         * T         | I         | T
         * F         | I         | F
         * I         | I         | T
         *
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        isListening: function() {
            return this._getCache(LISTENING, this._isListening);
        },
        _isListening: function() {
            var listening = this.getListening(),
                parent = this.getParent();

            // the following conditions are a simplification of the truth table above.
            // please modify carefully
            if (listening === 'inherit') {
                if (parent) {
                    return parent.isListening();
                }
                else {
                    return true;
                }
            }
            else {
                return listening;
            }
        },
        /**
         * determine if node is visible by taking into account ancestors.
         *
         * Parent    | Self      | isVisible
         * visible   | visible   | 
         * ----------+-----------+------------
         * T         | T         | T 
         * T         | F         | F
         * F         | T         | T 
         * F         | F         | F
         * ----------+-----------+------------
         * T         | I         | T
         * F         | I         | F
         * I         | I         | T

         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        isVisible: function() {
            return this._getCache(VISIBLE, this._isVisible);
        },
        _isVisible: function() {
            var visible = this.getVisible(),
                parent = this.getParent();

            // the following conditions are a simplification of the truth table above.
            // please modify carefully
            if (visible === 'inherit') {
                if (parent) {
                    return parent.isVisible();
                }
                else {
                    return true;
                }
            }
            else {
                return visible;
            }
        },
        /**
         * determine if listening is enabled by taking into account descendants.  If self or any children
         * have _isListeningEnabled set to true, then self also has listening enabled.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        shouldDrawHit: function(canvas) {
            var layer = this.getLayer();
            return  (canvas && canvas.isCache) || (layer && layer.hitGraphEnabled())
                && this.isListening() && this.isVisible();
        },
        /**
         * show node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        show: function() {
            this.setVisible(true);
            return this;
        },
        /**
         * hide node.  Hidden nodes are no longer detectable
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        hide: function() {
            this.setVisible(false);
            return this;
        },
        /**
         * get zIndex relative to the node's siblings who share the same parent
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getZIndex: function() {
            return this.index || 0;
        },
        /**
         * get absolute z-index which takes into account sibling
         *  and ancestor indices
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getAbsoluteZIndex: function() {
            var depth = this.getDepth(),
                that = this,
                index = 0,
                nodes, len, n, child;

            function addChildren(children) {
                nodes = [];
                len = children.length;
                for(n = 0; n < len; n++) {
                    child = children[n];
                    index++;

                    if(child.nodeType !== SHAPE) {
                        nodes = nodes.concat(child.getChildren().toArray());
                    }

                    if(child._id === that._id) {
                        n = len;
                    }
                }

                if(nodes.length > 0 && nodes[0].getDepth() <= depth) {
                    addChildren(nodes);
                }
            }
            if(that.nodeType !== UPPER_STAGE) {
                addChildren(that.getStage().getChildren());
            }

            return index;
        },
        /**
         * get node depth in node tree.  Returns an integer.
         *  e.g. Stage depth will always be 0.  Layers will always be 1.  Groups and Shapes will always
         *  be >= 2
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Integer}
         */
        getDepth: function() {
            var depth = 0,
                parent = this.parent;

            while(parent) {
                depth++;
                parent = parent.parent;
            }
            return depth;
        },
        setPosition: function(pos) {
            this.setX(pos.x);
            this.setY(pos.y);
            return this;
        },
        getPosition: function() {
            return {
                x: this.getX(),
                y: this.getY()
            };
        },
        /**
         * get absolute position relative to the top left corner of the stage container div
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        getAbsolutePosition: function() {
            var absoluteMatrix = this.getAbsoluteTransform().getMatrix(),
                absoluteTransform = new Kinetic.Transform(),
                offset = this.offset();

            // clone the matrix array
            absoluteTransform.m = absoluteMatrix.slice();
            absoluteTransform.translate(offset.x, offset.y);

            return absoluteTransform.getTranslation();
        },
        /**
         * set absolute position
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Node}
         */
        setAbsolutePosition: function(pos) {
            var origTrans = this._clearTransform(),
                it;

            // don't clear translation
            this.attrs.x = origTrans.x;
            this.attrs.y = origTrans.y;
            delete origTrans.x;
            delete origTrans.y;

            // unravel transform
            it = this.getAbsoluteTransform();

            it.invert();
            it.translate(pos.x, pos.y);
            pos = {
                x: this.attrs.x + it.getTranslation().x,
                y: this.attrs.y + it.getTranslation().y
            };

            this.setPosition({x:pos.x, y:pos.y});
            this._setTransform(origTrans);

            return this;
        },
        _setTransform: function(trans) {
            var key;

            for(key in trans) {
                this.attrs[key] = trans[key];
            }

            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        },
        _clearTransform: function() {
            var trans = {
                x: this.getX(),
                y: this.getY(),
                rotation: this.getRotation(),
                scaleX: this.getScaleX(),
                scaleY: this.getScaleY(),
                offsetX: this.getOffsetX(),
                offsetY: this.getOffsetY(),
                skewX: this.getSkewX(),
                skewY: this.getSkewY()
            };

            this.attrs.x = 0;
            this.attrs.y = 0;
            this.attrs.rotation = 0;
            this.attrs.scaleX = 1;
            this.attrs.scaleY = 1;
            this.attrs.offsetX = 0;
            this.attrs.offsetY = 0;
            this.attrs.skewX = 0;
            this.attrs.skewY = 0;

            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);

            // return original transform
            return trans;
        },
        /**
         * move node by an amount relative to its current position
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} change
         * @param {Number} change.x
         * @param {Number} change.y
         * @returns {Kinetic.Node}
         * @example
         * // move node in x direction by 1px and y direction by 2px
         * node.move({
         *   x: 1,
         *   y: 2)
         * });
         */
        move: function(change) {
            var changeX = change.x,
                changeY = change.y,
                x = this.getX(),
                y = this.getY();

            if(changeX !== undefined) {
                x += changeX;
            }

            if(changeY !== undefined) {
                y += changeY;
            }

            this.setPosition({x:x, y:y});
            return this;
        },
        _eachAncestorReverse: function(func, top) {
            var family = [],
                parent = this.getParent(),
                len, n;

            // if top node is defined, and this node is top node,
            // there's no need to build a family tree.  just execute
            // func with this because it will be the only node
            if (top && top._id === this._id) {
                func(this);
                return true;
            }

            family.unshift(this);

            while(parent && (!top || parent._id !== top._id)) {
                family.unshift(parent);
                parent = parent.parent;
            }

            len = family.length;
            for(n = 0; n < len; n++) {
                func(family[n]);
            }
        },
        /**
         * rotate node by an amount in degrees relative to its current rotation
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Number} theta
         * @returns {Kinetic.Node}
         */
        rotate: function(theta) {
            this.setRotation(this.getRotation() + theta);
            return this;
        },
        /**
         * move node to the top of its siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveToTop: function() {
            if (!this.parent) {
                Kinetic.Util.warn('Node has no parent. moveToTop function is ignored.');
                return;
            }
            var index = this.index;
            this.parent.children.splice(index, 1);
            this.parent.children.push(this);
            this.parent._setChildrenIndices();
            return true;
        },
        /**
         * move node up
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveUp: function() {
            if (!this.parent) {
                Kinetic.Util.warn('Node has no parent. moveUp function is ignored.');
                return;
            }
            var index = this.index,
                len = this.parent.getChildren().length;
            if(index < len - 1) {
                this.parent.children.splice(index, 1);
                this.parent.children.splice(index + 1, 0, this);
                this.parent._setChildrenIndices();
                return true;
            }
            return false;
        },
        /**
         * move node down
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveDown: function() {
            if (!this.parent) {
                Kinetic.Util.warn('Node has no parent. moveDown function is ignored.');
                return;
            }
            var index = this.index;
            if(index > 0) {
                this.parent.children.splice(index, 1);
                this.parent.children.splice(index - 1, 0, this);
                this.parent._setChildrenIndices();
                return true;
            }
            return false;
        },
        /**
         * move node to the bottom of its siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Boolean}
         */
        moveToBottom: function() {
            if (!this.parent) {
                Kinetic.Util.warn('Node has no parent. moveToBottom function is ignored.');
                return;
            }
            var index = this.index;
            if(index > 0) {
                this.parent.children.splice(index, 1);
                this.parent.children.unshift(this);
                this.parent._setChildrenIndices();
                return true;
            }
            return false;
        },
        /**
         * set zIndex relative to siblings
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Integer} zIndex
         * @returns {Kinetic.Node}
         */
        setZIndex: function(zIndex) {
            if (!this.parent) {
                Kinetic.Util.warn('Node has no parent. zIndex parameter is ignored.');
                return;
            }
            var index = this.index;
            this.parent.children.splice(index, 1);
            this.parent.children.splice(zIndex, 0, this);
            this.parent._setChildrenIndices();
            return this;
        },
        /**
         * get absolute opacity
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Number}
         */
        getAbsoluteOpacity: function() {
            return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
        },
        _getAbsoluteOpacity: function() {
            var absOpacity = this.getOpacity();
            if(this.getParent()) {
                absOpacity *= this.getParent().getAbsoluteOpacity();
            }
            return absOpacity;
        },
        /**
         * move node to another container
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Container} newContainer
         * @returns {Kinetic.Node}
         * @example
         * // move node from current layer into layer2
         * node.moveTo(layer2);
         */
        moveTo: function(newContainer) {
            // do nothing if new container is already parent
            if (this.getParent() !== newContainer) {
                this.remove();
                newContainer.add(this);
            }
            return this;
        },
        /**
         * convert Node into an object for serialization.  Returns an object.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Object}
         */
        toObject: function() {
            var type = Kinetic.Util,
                obj = {},
                attrs = this.getAttrs(),
                key, val, getter, defaultValue;

            obj.attrs = {};

            // serialize only attributes that are not function, image, DOM, or objects with methods
            for(key in attrs) {
                val = attrs[key];
                if (!type._isFunction(val) && !type._isElement(val) && !(type._isObject(val) && type._hasMethods(val))) {
                    getter = this[key];
                    // remove attr value so that we can extract the default value from the getter
                    delete attrs[key];
                    defaultValue = getter ? getter.call(this) : null;
                    // restore attr value
                    attrs[key] = val;
                    if (defaultValue !== val) {
                        obj.attrs[key] = val;
                    }
                }
            }

            obj.className = this.getClassName();
            return obj;
        },
        /**
         * convert Node into a JSON string.  Returns a JSON string.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}}
         */
        toJSON: function() {
            return JSON.stringify(this.toObject());
        },
        /**
         * get parent container
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        getParent: function() {
            return this.parent;
        },
        /**
         * get layer ancestor
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Layer}
         */
        getLayer: function() {
            var parent = this.getParent();
            return parent ? parent.getLayer() : null;
        },
        /**
         * get stage ancestor
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Stage}
         */
        getStage: function() {
            return this._getCache(STAGE, this._getStage);
        },
        _getStage: function() {
            var parent = this.getParent();
            if(parent) {
                return parent.getStage();
            }
            else {
                return undefined;
            }
        },
        /**
         * fire event
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} eventType event type.  can be a regular event, like click, mouseover, or mouseout, or it can be a custom event, like myCustomEvent
         * @param {Event} [evt] event object
         * @param {Boolean} [bubble] setting the value to false, or leaving it undefined, will result in the event
         *  not bubbling.  Setting the value to true will result in the event bubbling.
         * @returns {Kinetic.Node}
         * @example
         * // manually fire click event
         * node.fire('click');
         *
         * // fire custom event
         * node.fire('foo');
         *
         * // fire custom event with custom event object
         * node.fire('foo', {
         *   bar: 10
         * });
         *
         * // fire click event that bubbles
         * node.fire('click', null, true);
         */
        fire: function(eventType, evt, bubble) {
            // bubble
            if (bubble) {
                this._fireAndBubble(eventType, evt || {});
            }
            // no bubble
            else {
                this._fire(eventType, evt || {});
            }
            return this;
        },
        /**
         * get absolute transform of the node which takes into
         *  account its ancestor transforms
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Transform}
         */
        getAbsoluteTransform: function(top) {
            // if using an argument, we can't cache the result.
            if (top) {
                return this._getAbsoluteTransform(top);
            }
            // if no argument, we can cache the result
            else {
                return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
            }
        },
        _getAbsoluteTransform: function(top) {
            var at = new Kinetic.Transform(),
                transformsEnabled, trans;

            // start with stage and traverse downwards to self
            this._eachAncestorReverse(function(node) {
                transformsEnabled = node.transformsEnabled();
                trans = node.getTransform();

                if (transformsEnabled === 'all') {
                    at.multiply(trans);
                }
                else if (transformsEnabled === 'position') {
                    at.translate(node.x(), node.y());
                }
            }, top);
            return at;
        },
        /**
         * get transform of the node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Transform}
         */
        getTransform: function() {
            return this._getCache(TRANSFORM, this._getTransform);
        },
        _getTransform: function() {
            var m = new Kinetic.Transform(),
                x = this.getX(),
                y = this.getY(),
                rotation = Kinetic.getAngle(this.getRotation()),
                scaleX = this.getScaleX(),
                scaleY = this.getScaleY(),
                skewX = this.getSkewX(),
                skewY = this.getSkewY(),
                offsetX = this.getOffsetX(),
                offsetY = this.getOffsetY();

            if(x !== 0 || y !== 0) {
                m.translate(x, y);
            }
            if(rotation !== 0) {
                m.rotate(rotation);
            }
            if(skewX !== 0 || skewY !== 0) {
                m.skew(skewX, skewY);
            }
            if(scaleX !== 1 || scaleY !== 1) {
                m.scale(scaleX, scaleY);
            }
            if(offsetX !== 0 || offsetY !== 0) {
                m.translate(-1 * offsetX, -1 * offsetY);
            }

            return m;
        },
        /**
         * clone node.  Returns a new Node instance with identical attributes.  You can also override
         *  the node properties with an object literal, enabling you to use an existing node as a template
         *  for another node
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} obj override attrs
         * @returns {Kinetic.Node}
         * @example
         * // simple clone
         * var clone = node.clone();
         *
         * // clone a node and override the x position
         * var clone = rect.clone({
         *   x: 5
         * });
         */
        clone: function(obj) {
            // instantiate new node
            var className = this.getClassName(),
                attrs = Kinetic.Util.cloneObject(this.attrs),
                key, allListeners, len, n, listener;
            // filter black attrs
            for (var i in CLONE_BLACK_LIST) {
                var blockAttr = CLONE_BLACK_LIST[i];
                delete attrs[blockAttr];
            }
            // apply attr overrides
            for (key in obj) {
                attrs[key] = obj[key];
            }

            var node = new Kinetic[className](attrs);
            // copy over listeners
            for(key in this.eventListeners) {
                allListeners = this.eventListeners[key];
                len = allListeners.length;
                for(n = 0; n < len; n++) {
                    listener = allListeners[n];
                    /*
                     * don't include kinetic namespaced listeners because
                     *  these are generated by the constructors
                     */
                    if(listener.name.indexOf(KINETIC) < 0) {
                        // if listeners array doesn't exist, then create it
                        if(!node.eventListeners[key]) {
                            node.eventListeners[key] = [];
                        }
                        node.eventListeners[key].push(listener);
                    }
                }
            }
            return node;
        },
        /**
         * Creates a composite data URL. If MIME type is not
         * specified, then "image/png" will result. For "image/jpeg", specify a quality
         * level as quality (range 0.0 - 1.0)
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         * @returns {String}
         */
        toDataURL: function(config) {
            config = config || {};

            var mimeType = config.mimeType || null,
                quality = config.quality || null,
                stage = this.getStage(),
                x = config.x || 0,
                y = config.y || 0,
                canvas = new Kinetic.SceneCanvas({
                    width: config.width || this.getWidth() || (stage ? stage.getWidth() : 0),
                    height: config.height || this.getHeight() || (stage ? stage.getHeight() : 0),
                    pixelRatio: 1
                }),
                context = canvas.getContext();

            context.save();

            if(x || y) {
                context.translate(-1 * x, -1 * y);
            }

            this.drawScene(canvas);
            context.restore();

            return canvas.toDataURL(mimeType, quality);
        },
        /**
         * converts node into an image.  Since the toImage
         *  method is asynchronous, a callback is required.  toImage is most commonly used
         *  to cache complex drawings as an image so that they don't have to constantly be redrawn
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         * @example
         * var image = node.toImage({
         *   callback: function(img) {
         *     // do stuff with img
         *   }
         * });
         */
        toImage: function(config) {
            Kinetic.Util._getImage(this.toDataURL(config), function(img) {
                config.callback(img);
            });
        },
        setSize: function(size) {
            this.setWidth(size.width);
            this.setHeight(size.height);
            return this;
        },
        getSize: function() {
            return {
                width: this.getWidth(),
                height: this.getHeight()
            };
        },
        getWidth: function() {
            return this.attrs.width || 0;
        },
        getHeight: function() {
            return this.attrs.height || 0;
        },
        /**
         * get class name, which may return Stage, Layer, Group, or shape class names like Rect, Circle, Text, etc.
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}
         */
        getClassName: function() {
            return this.className || this.nodeType;
        },
        /**
         * get the node type, which may return Stage, Layer, Group, or Node
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {String}
         */
        getType: function() {
            return this.nodeType;
        },
        getDragDistance: function() {
            // compare with undefined because we need to track 0 value
            if (this.attrs.dragDistance !== undefined) {
                return this.attrs.dragDistance;
            } else if (this.parent) {
                return this.parent.getDragDistance();
            } else {
                return Kinetic.dragDistance;
            }
        },
        _get: function(selector) {
            return this.className === selector || this.nodeType === selector ? [this] : [];
        },
        _off: function(type, name) {
            var evtListeners = this.eventListeners[type],
                i, evtName;

            for(i = 0; i < evtListeners.length; i++) {
                evtName = evtListeners[i].name;
                // the following two conditions must be true in order to remove a handler:
                // 1) the current event name cannot be kinetic unless the event name is kinetic
                //    this enables developers to force remove a kinetic specific listener for whatever reason
                // 2) an event name is not specified, or if one is specified, it matches the current event name
                if((evtName !== 'kinetic' || name === 'kinetic') && (!name || evtName === name)) {
                    evtListeners.splice(i, 1);
                    if(evtListeners.length === 0) {
                        delete this.eventListeners[type];
                        break;
                    }
                    i--;
                }
            }
        },
        _fireChangeEvent: function(attr, oldVal, newVal) {
            this._fire(attr + CHANGE, {
                oldVal: oldVal,
                newVal: newVal
            });
        },
        setId: function(id) {
            var oldId = this.getId();

            Kinetic._removeId(oldId);
            Kinetic._addId(this, id);
            this._setAttr(ID, id);
            return this;
        },
        setName: function(name) {
            var oldName = this.getName();

            Kinetic._removeName(oldName, this._id);
            Kinetic._addName(this, name);
            this._setAttr(NAME, name);
            return this;
        },
        /**
         * set attr
         * @method
         * @memberof Kinetic.Node.prototype
         * @param {String} attr
         * @param {*} val
         * @returns {Kinetic.Node}
         * @example
         * node.setAttr('x', 5);
         */
        setAttr: function(attr, val) {
            var method = SET + Kinetic.Util._capitalize(attr),
                func = this[method];

            if(Kinetic.Util._isFunction(func)) {
                func.call(this, val);
            }
            // otherwise set directly
            else {
                this._setAttr(attr, val);
            }
            return this;
        },
        _setAttr: function(key, val) {
            var oldVal;
            if(val !== undefined) {
                oldVal = this.attrs[key];
                this.attrs[key] = val;
                this._fireChangeEvent(key, oldVal, val);
            }
        },
        _setComponentAttr: function(key, component, val) {
            var oldVal;
            if(val !== undefined) {
                oldVal = this.attrs[key];

                if (!oldVal) {
                    // set value to default value using getAttr
                    this.attrs[key] = this.getAttr(key);
                }
                
                this.attrs[key][component] = val;
                this._fireChangeEvent(key, oldVal, val);
            }
        },
        _fireAndBubble: function(eventType, evt, compareShape) {
            var okayToRun = true;

            if(evt && this.nodeType === SHAPE) {
                evt.target = this;
            }

            if(eventType === MOUSEENTER && compareShape && (this._id === compareShape._id || (this.isAncestorOf && this.isAncestorOf(compareShape)))) {
                okayToRun = false;
            }
            else if(eventType === MOUSELEAVE && compareShape && (this._id === compareShape._id || (this.isAncestorOf && this.isAncestorOf(compareShape)))) {
                okayToRun = false;
            }
            if(okayToRun) {
                this._fire(eventType, evt);

                // simulate event bubbling
                var stopBubble = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && ((compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this)) || !!(compareShape && compareShape.isAncestorOf));
                if(evt && !evt.cancelBubble && this.parent && this.parent.isListening() && (!stopBubble)) {
                    if(compareShape && compareShape.parent) {
                        this._fireAndBubble.call(this.parent, eventType, evt, compareShape.parent);
                    }
                    else {
                        this._fireAndBubble.call(this.parent, eventType, evt);
                    }
                }
            }
        },
        _fire: function(eventType, evt) {
            var events = this.eventListeners[eventType],
                i;

            evt.type = eventType;

            if (events) {
                for(i = 0; i < events.length; i++) {
                    events[i].handler.call(this, evt);
                }
            }
        },
        /**
         * draw both scene and hit graphs.  If the node being drawn is the stage, all of the layers will be cleared and redrawn
         * @method
         * @memberof Kinetic.Node.prototype
         * @returns {Kinetic.Node}
         */
        draw: function() {
            this.drawScene();
            this.drawHit();
            return this;
        }
    });

    /**
     * create node with JSON string.  De-serializtion does not generate custom
     *  shape drawing functions, images, or event handlers (this would make the
     *  serialized object huge).  If your app uses custom shapes, images, and
     *  event handlers (it probably does), then you need to select the appropriate
     *  shapes after loading the stage and set these properties via on(), setDrawFunc(),
     *  and setImage() methods
     * @method
     * @memberof Kinetic.Node
     * @param {String} json
     * @param {Element} [container] optional container dom element used only if you're
     *  creating a stage node
     */
    Kinetic.Node.create = function(json, container) {
        return this._createNode(JSON.parse(json), container);
    };
    Kinetic.Node._createNode = function(obj, container) {
        var className = Kinetic.Node.prototype.getClassName.call(obj),
            children = obj.children,
            no, len, n;

        // if container was passed in, add it to attrs
        if(container) {
            obj.attrs.container = container;
        }

        no = new Kinetic[className](obj.attrs);
        if(children) {
            len = children.length;
            for(n = 0; n < len; n++) {
                no.add(this._createNode(children[n]));
            }
        }

        return no;
    };


    // =========================== add getters setters ===========================

    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'position');
    /**
     * get/set node position relative to parent
     * @name position
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} pos
     * @param {Number} pos.x
     * @param {Number} pos.y
     * @returns {Object}
     * @example
     * // get position
     * var position = node.position();
     *
     * // set position
     * node.position({
     *   x: 5
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'x', 0);

    /**
     * get/set x position
     * @name x
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} x
     * @returns {Object}
     * @example
     * // get x
     * var x = node.x();
     *
     * // set x
     * node.x(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'y', 0);

    /**
     * get/set y position
     * @name y
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} y
     * @returns {Integer}
     * @example
     * // get y
     * var y = node.y();
     *
     * // set y
     * node.y(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'opacity', 1);

    /**
     * get/set opacity.  Opacity values range from 0 to 1.
     *  A node with an opacity of 0 is fully transparent, and a node
     *  with an opacity of 1 is fully opaque
     * @name opacity
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} opacity
     * @returns {Number}
     * @example
     * // get opacity
     * var opacity = node.opacity();
     *
     * // set opacity
     * node.opacity(0.5);
     */

    Kinetic.Factory.addGetter(Kinetic.Node, 'name');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'name');

    /**
     * get/set name
     * @name name
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} name
     * @returns {String}
     * @example
     * // get name
     * var name = node.name();
     *
     * // set name
     * node.name('foo');
     *
     * // also node may have multiple names (as css classes)
     * node.name('foo bar');
     */

    Kinetic.Factory.addGetter(Kinetic.Node, 'id');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'id');

    /**
     * get/set id
     * @name id
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} id
     * @returns {String}
     * @example
     * // get id
     * var name = node.id();
     *
     * // set id
     * node.id('foo');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'rotation', 0);

    /**
     * get/set rotation in degrees
     * @name rotation
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} rotation
     * @returns {Number}
     * @example
     * // get rotation in degrees
     * var rotation = node.rotation();
     *
     * // set rotation in degrees
     * node.rotation(45);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, 'scale', ['x', 'y']);

    /**
     * get/set scale
     * @name scale
     * @param {Object} scale
     * @param {Number} scale.x
     * @param {Number} scale.y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Object}
     * @example
     * // get scale
     * var scale = node.scale();
     *
     * // set scale 
     * shape.scale({
     *   x: 2
     *   y: 3
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'scaleX', 1);

    /**
     * get/set scale x
     * @name scaleX
     * @param {Number} x
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get scale x
     * var scaleX = node.scaleX();
     *
     * // set scale x
     * node.scaleX(2);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'scaleY', 1);

    /**
     * get/set scale y
     * @name scaleY
     * @param {Number} y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get scale y
     * var scaleY = node.scaleY();
     *
     * // set scale y
     * node.scaleY(2);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, 'skew', ['x', 'y']);

    /**
     * get/set skew
     * @name skew
     * @param {Object} skew
     * @param {Number} skew.x
     * @param {Number} skew.y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Object}
     * @example
     * // get skew
     * var skew = node.skew();
     *
     * // set skew 
     * node.skew({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'skewX', 0);

    /**
     * get/set skew x
     * @name skewX
     * @param {Number} x
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get skew x
     * var skewX = node.skewX();
     *
     * // set skew x
     * node.skewX(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'skewY', 0);

    /**
     * get/set skew y
     * @name skewY
     * @param {Number} y
     * @method
     * @memberof Kinetic.Node.prototype
     * @returns {Number}
     * @example
     * // get skew y
     * var skewY = node.skewY();
     *
     * // set skew y
     * node.skewY(3);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Node, 'offset', ['x', 'y']);

    /**
     * get/set offset.  Offsets the default position and rotation point
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get offset
     * var offset = node.offset();
     *
     * // set offset
     * node.offset({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'offsetX', 0);

    /**
     * get/set offset x
     * @name offsetX
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get offset x
     * var offsetX = node.offsetX();
     *
     * // set offset x
     * node.offsetX(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'offsetY', 0);

    /**
     * get/set offset y
     * @name offsetY
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get offset y
     * var offsetY = node.offsetY();
     *
     * // set offset y
     * node.offsetY(3);
     */

    Kinetic.Factory.addSetter(Kinetic.Node, 'dragDistance');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'dragDistance');

    /**
     * get/set drag distance
     * @name dragDistance
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} distance
     * @returns {Number}
     * @example
     * // get drag distance
     * var dragDistance = node.dragDistance();
     *
     * // set distance
     * // node starts dragging only if pointer moved more then 3 pixels
     * node.dragDistance(3);
     * // or set globally
     * Kinetic.dragDistance = 3;
     */


    Kinetic.Factory.addSetter(Kinetic.Node, 'width', 0);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'width');
    /**
     * get/set width
     * @name width
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get width
     * var width = node.width();
     *
     * // set width
     * node.width(100);
     */

    Kinetic.Factory.addSetter(Kinetic.Node, 'height', 0);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'height');
    /**
     * get/set height
     * @name height
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get height
     * var height = node.height();
     *
     * // set height
     * node.height(100);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'listening', 'inherit');
    /**
     * get/set listenig attr.  If you need to determine if a node is listening or not
     *   by taking into account its parents, use the isListening() method  
     * @name listening
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean|String} listening Can be "inherit", true, or false.  The default is "inherit".
     * @returns {Boolean|String}
     * @example
     * // get listening attr
     * var listening = node.listening();
     *
     * // stop listening for events
     * node.listening(false);
     *
     * // listen for events
     * node.listening(true);
     *
     * // listen to events according to the parent
     * node.listening('inherit');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'filters', undefined, function(val) {this._filterUpToDate = false;return val;});
    /**
     * get/set filters.  Filters are applied to cached canvases
     * @name filters
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Array} filters array of filters
     * @returns {Array}
     * @example
     * // get filters
     * var filters = node.filters();
     *
     * // set a single filter
     * node.cache();
     * node.filters([Kinetic.Filters.Blur]);
     *
     * // set multiple filters
     * node.cache();
     * node.filters([
     *   Kinetic.Filters.Blur,
     *   Kinetic.Filters.Sepia,
     *   Kinetic.Filters.Invert
     * ]);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'visible', 'inherit');
    /**
     * get/set visible attr.  Can be "inherit", true, or false.  The default is "inherit".
     *   If you need to determine if a node is visible or not
     *   by taking into account its parents, use the isVisible() method  
     * @name visible
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean|String} visible
     * @returns {Boolean|String}
     * @example
     * // get visible attr
     * var visible = node.visible();
     *
     * // make invisible
     * node.visible(false);
     *
     * // make visible
     * node.visible(true);
     *
     * // make visible according to the parent
     * node.visible('inherit');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'transformsEnabled', 'all');

    /**
     * get/set transforms that are enabled.  Can be "all", "none", or "position".  The default
     *  is "all"
     * @name transformsEnabled
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {String} enabled
     * @returns {String}
     * @example
     * // enable position transform only to improve draw performance
     * node.transformsEnabled('position');
     *
     * // enable all transforms
     * node.transformsEnabled('all');
     */



    /**
     * get/set node size
     * @name size
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Object} size
     * @param {Number} size.width
     * @param {Number} size.height
     * @returns {Object}
     * @example
     * // get node size
     * var size = node.size();
     * var x = size.x;
     * var y = size.y;
     *
     * // set size
     * node.size({
     *   width: 100,
     *   height: 200
     * });
     */
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'size');

    Kinetic.Factory.backCompat(Kinetic.Node, {
        rotateDeg: 'rotate',
        setRotationDeg: 'setRotation',
        getRotationDeg: 'getRotation'
    });

    Kinetic.Collection.mapMethods(Kinetic.Node);
})();
;(function() {
    /**
    * Grayscale Filter
    * @function
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @example
    * node.cache();
    * node.filters([Kinetic.Filters.Grayscale]);
    */
    Kinetic.Filters.Grayscale = function(imageData) {
        var data = imageData.data,
            len = data.length,
            i, brightness;

        for(i = 0; i < len; i += 4) {
            brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            // red
            data[i] = brightness;
            // green
            data[i + 1] = brightness;
            // blue
            data[i + 2] = brightness;
        }
    };
})();
;(function() {
    /**
     * Brighten Filter.  
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Brighten]);
     * node.brightness(0.8);
     */
    Kinetic.Filters.Brighten = function(imageData) {
        var brightness = this.brightness() * 255,
            data = imageData.data,
            len = data.length,
            i;

        for(i = 0; i < len; i += 4) {
            // red
            data[i] += brightness;
            // green
            data[i + 1] += brightness;
            // blue
            data[i + 2] += brightness;
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'brightness', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set filter brightness.  The brightness is a number between -1 and 1.&nbsp; Positive values 
    *  brighten the pixels and negative values darken them. Use with {@link Kinetic.Filters.Brighten} filter.
    * @name brightness
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} brightness value between -1 and 1
    * @returns {Number}
    */

})();
;(function() {
    /**
    * Invert Filter
    * @function
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @example
    * node.cache();
    * node.filters([Kinetic.Filters.Invert]);
    */
    Kinetic.Filters.Invert = function(imageData) {
        var data = imageData.data,
            len = data.length,
            i;

        for(i = 0; i < len; i += 4) {
            // red
            data[i] = 255 - data[i];
            // green
            data[i + 1] = 255 - data[i + 1];
            // blue
            data[i + 2] = 255 - data[i + 2];
        }
    };
})();;/*
 the Gauss filter
 master repo: https://github.com/pavelpower/kineticjsGaussFilter/
*/
(function() {
    /*

     StackBlur - a fast almost Gaussian Blur For Canvas

     Version:   0.5
     Author:    Mario Klingemann
     Contact:   mario@quasimondo.com
     Website:   http://www.quasimondo.com/StackBlurForCanvas
     Twitter:   @quasimondo

     In case you find this class useful - especially in commercial projects -
     I am not totally unhappy for a small donation to my PayPal account
     mario@quasimondo.de

     Or support me on flattr:
     https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

     Copyright (c) 2010 Mario Klingemann

     Permission is hereby granted, free of charge, to any person
     obtaining a copy of this software and associated documentation
     files (the "Software"), to deal in the Software without
     restriction, including without limitation the rights to use,
     copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the
     Software is furnished to do so, subject to the following
     conditions:

     The above copyright notice and this permission notice shall be
     included in all copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
     OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
     HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
     WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
     OTHER DEALINGS IN THE SOFTWARE.
     */

    function BlurStack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
    }

    var mul_table = [
        512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
        454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
        482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
        437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
        497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
        320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
        446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
        329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
        505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
        399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
        324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
        268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
        451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
        385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
        332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
        289,287,285,282,280,278,275,273,271,269,267,265,263,261,259
    ];

    var shg_table = [
        9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
        17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
        19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
        23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
    ];

    function filterGaussBlurRGBA( imageData, radius) {

        var pixels = imageData.data,
            width = imageData.width,
            height = imageData.height;

        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
            r_out_sum, g_out_sum, b_out_sum, a_out_sum,
            r_in_sum, g_in_sum, b_in_sum, a_in_sum,
            pr, pg, pb, pa, rbs;

        var div = radius + radius + 1,
            widthMinus1  = width - 1,
            heightMinus1 = height - 1,
            radiusPlus1  = radius + 1,
            sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2,
            stackStart = new BlurStack(),
            stackEnd = null,
            stack = stackStart,
            stackIn = null,
            stackOut = null,
            mul_sum = mul_table[radius],
            shg_sum = shg_table[radius];

        for ( i = 1; i < div; i++ ) {
            stack = stack.next = new BlurStack();
            if ( i == radiusPlus1 ){
                stackEnd = stack;
            }
        }

        stack.next = stackStart;

        yw = yi = 0;

        for ( y = 0; y < height; y++ )
        {
            r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

            r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
            g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
            b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
            a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );

            r_sum += sumFactor * pr;
            g_sum += sumFactor * pg;
            b_sum += sumFactor * pb;
            a_sum += sumFactor * pa;

            stack = stackStart;

            for( i = 0; i < radiusPlus1; i++ )
            {
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack.a = pa;
                stack = stack.next;
            }

            for( i = 1; i < radiusPlus1; i++ )
            {
                p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
                r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
                g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
                b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
                a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;

                r_in_sum += pr;
                g_in_sum += pg;
                b_in_sum += pb;
                a_in_sum += pa;

                stack = stack.next;
            }


            stackIn = stackStart;
            stackOut = stackEnd;
            for ( x = 0; x < width; x++ )
            {
                pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
                if ( pa !== 0 )
                {
                    pa = 255 / pa;
                    pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                    pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                    pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
                } else {
                    pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
                }

                r_sum -= r_out_sum;
                g_sum -= g_out_sum;
                b_sum -= b_out_sum;
                a_sum -= a_out_sum;

                r_out_sum -= stackIn.r;
                g_out_sum -= stackIn.g;
                b_out_sum -= stackIn.b;
                a_out_sum -= stackIn.a;

                p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;

                r_in_sum += ( stackIn.r = pixels[p]);
                g_in_sum += ( stackIn.g = pixels[p+1]);
                b_in_sum += ( stackIn.b = pixels[p+2]);
                a_in_sum += ( stackIn.a = pixels[p+3]);

                r_sum += r_in_sum;
                g_sum += g_in_sum;
                b_sum += b_in_sum;
                a_sum += a_in_sum;

                stackIn = stackIn.next;

                r_out_sum += ( pr = stackOut.r );
                g_out_sum += ( pg = stackOut.g );
                b_out_sum += ( pb = stackOut.b );
                a_out_sum += ( pa = stackOut.a );

                r_in_sum -= pr;
                g_in_sum -= pg;
                b_in_sum -= pb;
                a_in_sum -= pa;

                stackOut = stackOut.next;

                yi += 4;
            }
            yw += width;
        }


        for ( x = 0; x < width; x++ )
        {
            g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

            yi = x << 2;
            r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
            g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
            b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
            a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);

            r_sum += sumFactor * pr;
            g_sum += sumFactor * pg;
            b_sum += sumFactor * pb;
            a_sum += sumFactor * pa;

            stack = stackStart;

            for( i = 0; i < radiusPlus1; i++ )
            {
                stack.r = pr;
                stack.g = pg;
                stack.b = pb;
                stack.a = pa;
                stack = stack.next;
            }

            yp = width;

            for( i = 1; i <= radius; i++ )
            {
                yi = ( yp + x ) << 2;

                r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
                g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
                b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
                a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;

                r_in_sum += pr;
                g_in_sum += pg;
                b_in_sum += pb;
                a_in_sum += pa;

                stack = stack.next;

                if( i < heightMinus1 )
                {
                    yp += width;
                }
            }

            yi = x;
            stackIn = stackStart;
            stackOut = stackEnd;
            for ( y = 0; y < height; y++ )
            {
                p = yi << 2;
                pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
                if ( pa > 0 )
                {
                    pa = 255 / pa;
                    pixels[p]   = ((r_sum * mul_sum) >> shg_sum ) * pa;
                    pixels[p+1] = ((g_sum * mul_sum) >> shg_sum ) * pa;
                    pixels[p+2] = ((b_sum * mul_sum) >> shg_sum ) * pa;
                } else {
                    pixels[p] = pixels[p+1] = pixels[p+2] = 0;
                }

                r_sum -= r_out_sum;
                g_sum -= g_out_sum;
                b_sum -= b_out_sum;
                a_sum -= a_out_sum;

                r_out_sum -= stackIn.r;
                g_out_sum -= stackIn.g;
                b_out_sum -= stackIn.b;
                a_out_sum -= stackIn.a;

                p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;

                r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
                g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
                b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
                a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));

                stackIn = stackIn.next;

                r_out_sum += ( pr = stackOut.r );
                g_out_sum += ( pg = stackOut.g );
                b_out_sum += ( pb = stackOut.b );
                a_out_sum += ( pa = stackOut.a );

                r_in_sum -= pr;
                g_in_sum -= pg;
                b_in_sum -= pb;
                a_in_sum -= pa;

                stackOut = stackOut.next;

                yi += width;
            }
        }
    }

    /**
     * Blur Filter
     * @function
     * @name Blur
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Blur]);
     * node.blurRadius(10);
     */
    Kinetic.Filters.Blur = function Blur(imageData) {
        var radius = Math.round(this.blurRadius());

        if (radius > 0) {
            filterGaussBlurRGBA(imageData, radius);
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'blurRadius', 0, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set blur radius. Use with {@link Kinetic.Filters.Blur} filter
    * @name blurRadius
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} radius
    * @returns {Integer}
    */
})();;(function() {

	function pixelAt(idata, x, y) {
		var idx = (y * idata.width + x) * 4;
		var d = [];
		d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
		return d;
	}

	function rgbDistance(p1, p2) {
		return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
	}

	function rgbMean(pTab) {
		var m = [0, 0, 0];

		for (var i = 0; i < pTab.length; i++) {
			m[0] += pTab[i][0];
			m[1] += pTab[i][1];
			m[2] += pTab[i][2];
		}

		m[0] /= pTab.length;
		m[1] /= pTab.length;
		m[2] /= pTab.length;

		return m;
	}

	function backgroundMask(idata, threshold) {
		var rgbv_no = pixelAt(idata, 0, 0);
		var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
		var rgbv_so = pixelAt(idata, 0, idata.height - 1);
		var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);


		var thres = threshold || 10;
		if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {

			// Mean color
			var mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);

			// Mask based on color distance
			var mask = [];
			for (var i = 0; i < idata.width * idata.height; i++) {
				var d = rgbDistance(mean, [idata.data[i * 4], idata.data[i * 4 + 1], idata.data[i * 4 + 2]]);
				mask[i] = (d < thres) ? 0 : 255;
			}

			return mask;
		}
	}

	function applyMask(idata, mask) {
		for (var i = 0; i < idata.width * idata.height; i++) {
			idata.data[4 * i + 3] = mask[i];
		}
	}

	function erodeMask(mask, sw, sh) {

		var weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);

		var maskResult = [];
		for (var y = 0; y < sh; y++) {
			for (var x = 0; x < sw; x++) {

				var so = y * sw + x;
				var a = 0;
				for (var cy = 0; cy < side; cy++) {
					for (var cx = 0; cx < side; cx++) {
						var scy = y + cy - halfSide;
						var scx = x + cx - halfSide;

						if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {

							var srcOff = scy * sw + scx;
							var wt = weights[cy * side + cx];

							a += mask[srcOff] * wt;
						}
					}
				}

				maskResult[so] = (a === 255 * 8) ? 255 : 0;
			}
		}

		return maskResult;
	}

	function dilateMask(mask, sw, sh) {

		var weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);

		var maskResult = [];
		for (var y = 0; y < sh; y++) {
			for (var x = 0; x < sw; x++) {

				var so = y * sw + x;
				var a = 0;
				for (var cy = 0; cy < side; cy++) {
					for (var cx = 0; cx < side; cx++) {
						var scy = y + cy - halfSide;
						var scx = x + cx - halfSide;

						if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {

							var srcOff = scy * sw + scx;
							var wt = weights[cy * side + cx];

							a += mask[srcOff] * wt;
						}
					}
				}

				maskResult[so] = (a >= 255 * 4) ? 255 : 0;
			}
		}

		return maskResult;
	}

	function smoothEdgeMask(mask, sw, sh) {

		var weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);

		var maskResult = [];
		for (var y = 0; y < sh; y++) {
			for (var x = 0; x < sw; x++) {

				var so = y * sw + x;
				var a = 0;
				for (var cy = 0; cy < side; cy++) {
					for (var cx = 0; cx < side; cx++) {
						var scy = y + cy - halfSide;
						var scx = x + cx - halfSide;

						if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {

							var srcOff = scy * sw + scx;
							var wt = weights[cy * side + cx];

							a += mask[srcOff] * wt;
						}
					}
				}

				maskResult[so] = a;
			}
		}

		return maskResult;
	}
	
	/**
	 * Mask Filter
	 * @function
	 * @name Mask
	 * @memberof Kinetic.Filters
	 * @param {Object} imageData
	 * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Mask]);
     * node.threshold(0.1);
	 */
	Kinetic.Filters.Mask = function(imageData) {
		// Detect pixels close to the background color
		var threshold = this.threshold(),
        mask = backgroundMask(imageData, threshold);
		if (mask) {
			// Erode
			mask = erodeMask(mask, imageData.width, imageData.height);

			// Dilate
			mask = dilateMask(mask, imageData.width, imageData.height);

			// Gradient
			mask = smoothEdgeMask(mask, imageData.width, imageData.height);

			// Apply mask
			applyMask(imageData, mask);
			
			// todo : Update hit region function according to mask
		}

		return imageData;
	};

	Kinetic.Factory.addGetterSetter(Kinetic.Node, 'threshold', 0, null, Kinetic.Factory.afterSetFilter);
})();
;(function () {
    /**
     * RGB Filter
     * @function
     * @name RGB
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.RGB]);
     * node.blue(120);
     * node.green(200);
     */
    Kinetic.Filters.RGB = function (imageData) {
        var data = imageData.data,
            nPixels = data.length,
            red = this.red(),
            green = this.green(),
            blue = this.blue(),
            i, brightness;

        for (i = 0; i < nPixels; i += 4) {
            brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2])/255;
            data[i    ] = brightness*red; // r
            data[i + 1] = brightness*green; // g
            data[i + 2] = brightness*blue; // b
            data[i + 3] = data[i + 3]; // alpha
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'red', 0, function(val) {
        this._filterUpToDate = false;
        if (val > 255) {
            return 255;
        }
        else if (val < 0) {
            return 0;
        }
        else {
            return Math.round(val);
        }
    });
    /**
    * get/set filter red value. Use with {@link Kinetic.Filters.RGB} filter.
    * @name red
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} red value between 0 and 255
    * @returns {Integer}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'green', 0, function(val) {
        this._filterUpToDate = false;
        if (val > 255) {
            return 255;
        }
        else if (val < 0) {
            return 0;
        }
        else {
            return Math.round(val);
        }
    });
    /**
    * get/set filter green value. Use with {@link Kinetic.Filters.RGB} filter.
    * @name green
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} green value between 0 and 255
    * @returns {Integer}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'blue', 0, Kinetic.Validators.RGBComponent, Kinetic.Factory.afterSetFilter);
    /**
    * get/set filter blue value. Use with {@link Kinetic.Filters.RGB} filter.
    * @name blue
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} blue value between 0 and 255
    * @returns {Integer}
    */
})();
;(function () {

    /**
    * HSV Filter. Adjusts the hue, saturation and value
    * @function
    * @name HSV
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @author ippo615
    * @example
    * image.filters([Kinetic.Filters.HSV]);
    * image.value(200);
    */

    Kinetic.Filters.HSV = function (imageData) {
        var data = imageData.data,
            nPixels = data.length,
            v = Math.pow(2,this.value()),
            s = Math.pow(2,this.saturation()),
            h = Math.abs((this.hue()) + 360) % 360,
            i;

        // Basis for the technique used:
        // http://beesbuzz.biz/code/hsv_color_transforms.php
        // V is the value multiplier (1 for none, 2 for double, 0.5 for half)
        // S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
        // H is the hue shift in degrees (0 to 360)
        // vsu = V*S*cos(H*PI/180);
        // vsw = V*S*sin(H*PI/180);
        //[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
        //[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
        //[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]

        // Precompute the values in the matrix:
        var vsu = v*s*Math.cos(h*Math.PI/180),
            vsw = v*s*Math.sin(h*Math.PI/180);
        // (result spot)(source spot)
        var rr = 0.299*v+0.701*vsu+0.167*vsw,
            rg = 0.587*v-0.587*vsu+0.330*vsw,
            rb = 0.114*v-0.114*vsu-0.497*vsw;
        var gr = 0.299*v-0.299*vsu-0.328*vsw,
            gg = 0.587*v+0.413*vsu+0.035*vsw,
            gb = 0.114*v-0.114*vsu+0.293*vsw;
        var br = 0.299*v-0.300*vsu+1.250*vsw,
            bg = 0.587*v-0.586*vsu-1.050*vsw,
            bb = 0.114*v+0.886*vsu-0.200*vsw;

        var r,g,b,a;

        for (i = 0; i < nPixels; i += 4) {
            r = data[i+0];
            g = data[i+1];
            b = data[i+2];
            a = data[i+3];

            data[i+0] = rr*r + rg*g + rb*b;
            data[i+1] = gr*r + gg*g + gb*b;
            data[i+2] = br*r + bg*g + bb*b;
            data[i+3] = a; // alpha
        }

    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'hue', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set hsv hue in degrees. Use with {@link Kinetic.Filters.HSV} or {@link Kinetic.Filters.HSL} filter.
    * @name hue
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} hue value between 0 and 359
    * @returns {Number}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'saturation', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set hsv saturation. Use with {@link Kinetic.Filters.HSV} or {@link Kinetic.Filters.HSL} filter.
    * @name saturation
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} saturation 0 is no change, -1.0 halves the saturation, 1.0 doubles, etc..
    * @returns {Number}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'value', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set hsv value. Use with {@link Kinetic.Filters.HSV} filter.
    * @name value
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} value 0 is no change, -1.0 halves the value, 1.0 doubles, etc..
    * @returns {Number}
    */

})();
;(function () {

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'hue', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set hsv hue in degrees. Use with {@link Kinetic.Filters.HSV} or {@link Kinetic.Filters.HSL} filter.
    * @name hue
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} hue value between 0 and 359
    * @returns {Number}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'saturation', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set hsv saturation. Use with {@link Kinetic.Filters.HSV} or {@link Kinetic.Filters.HSL} filter.
    * @name saturation
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} saturation 0 is no change, -1.0 halves the saturation, 1.0 doubles, etc..
    * @returns {Number}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'luminance', 0, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set hsl luminance. Use with {@link Kinetic.Filters.HSL} filter.
    * @name value
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} value 0 is no change, -1.0 halves the value, 1.0 doubles, etc..
    * @returns {Number}
    */

    /**
    * HSL Filter. Adjusts the hue, saturation and luminance (or lightness)
    * @function
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @author ippo615
    * @example
    * image.filters([Kinetic.Filters.HSL]);
    * image.luminance(200);
    */

    Kinetic.Filters.HSL = function (imageData) {
        var data = imageData.data,
            nPixels = data.length,
            v = 1,
            s = Math.pow(2,this.saturation()),
            h = Math.abs((this.hue()) + 360) % 360,
            l = this.luminance()*127,
            i;

        // Basis for the technique used:
        // http://beesbuzz.biz/code/hsv_color_transforms.php
        // V is the value multiplier (1 for none, 2 for double, 0.5 for half)
        // S is the saturation multiplier (1 for none, 2 for double, 0.5 for half)
        // H is the hue shift in degrees (0 to 360)
        // vsu = V*S*cos(H*PI/180);
        // vsw = V*S*sin(H*PI/180);
        //[ .299V+.701vsu+.168vsw    .587V-.587vsu+.330vsw    .114V-.114vsu-.497vsw ] [R]
        //[ .299V-.299vsu-.328vsw    .587V+.413vsu+.035vsw    .114V-.114vsu+.292vsw ]*[G]
        //[ .299V-.300vsu+1.25vsw    .587V-.588vsu-1.05vsw    .114V+.886vsu-.203vsw ] [B]

        // Precompute the values in the matrix:
        var vsu = v*s*Math.cos(h*Math.PI/180),
            vsw = v*s*Math.sin(h*Math.PI/180);
        // (result spot)(source spot)
        var rr = 0.299*v+0.701*vsu+0.167*vsw,
            rg = 0.587*v-0.587*vsu+0.330*vsw,
            rb = 0.114*v-0.114*vsu-0.497*vsw;
        var gr = 0.299*v-0.299*vsu-0.328*vsw,
            gg = 0.587*v+0.413*vsu+0.035*vsw,
            gb = 0.114*v-0.114*vsu+0.293*vsw;
        var br = 0.299*v-0.300*vsu+1.250*vsw,
            bg = 0.587*v-0.586*vsu-1.050*vsw,
            bb = 0.114*v+0.886*vsu-0.200*vsw;

        var r,g,b,a;

        for (i = 0; i < nPixels; i += 4) {
            r = data[i+0];
            g = data[i+1];
            b = data[i+2];
            a = data[i+3];

            data[i+0] = rr*r + rg*g + rb*b + l;
            data[i+1] = gr*r + gg*g + gb*b + l;
            data[i+2] = br*r + bg*g + bb*b + l;
            data[i+3] = a; // alpha
        }
    };
})();
;(function () {
    /**
     * Emboss Filter.
     * Pixastic Lib - Emboss filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * License: [http://www.pixastic.com/lib/license.txt]
     * @function
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Emboss]);
     * node.embossStrength(0.8);
     * node.embossWhiteLevel(0.3);
     * node.embossDirection('right');
     * node.embossBlend(true);
     */
    Kinetic.Filters.Emboss = function (imageData) {

        // pixastic strength is between 0 and 10.  I want it between 0 and 1
        // pixastic greyLevel is between 0 and 255.  I want it between 0 and 1.  Also,
        // a max value of greyLevel yields a white emboss, and the min value yields a black
        // emboss.  Therefore, I changed greyLevel to whiteLevel
        var strength = this.embossStrength() * 10,
            greyLevel = this.embossWhiteLevel() * 255,
            direction = this.embossDirection(),
            blend = this.embossBlend(),
            dirY = 0,
            dirX = 0,
            data = imageData.data,
            w = imageData.width,
            h = imageData.height,
            w4 = w*4,
            y = h;

        switch (direction) {
            case 'top-left':
                dirY = -1;
                dirX = -1;
                break;
            case 'top':
                dirY = -1;
                dirX = 0;
                break;
            case 'top-right':
                dirY = -1;
                dirX = 1;
                break;
            case 'right':
                dirY = 0;
                dirX = 1;
                break;
            case 'bottom-right':
                dirY = 1;
                dirX = 1;
                break;
            case 'bottom':
                dirY = 1;
                dirX = 0;
                break;
            case 'bottom-left':
                dirY = 1;
                dirX = -1;
                break;
            case 'left':
                dirY = 0;
                dirX = -1;
                break;
        }

        do {
            var offsetY = (y-1)*w4;

            var otherY = dirY;
            if (y + otherY < 1){
                otherY = 0;
            }
            if (y + otherY > h) {
                otherY = 0;
            }

            var offsetYOther = (y-1+otherY)*w*4;

            var x = w;
            do {
                var offset = offsetY + (x-1)*4;

                var otherX = dirX;
                if (x + otherX < 1){
                    otherX = 0;
                }
                if (x + otherX > w) {
                    otherX = 0;
                }

                var offsetOther = offsetYOther + (x-1+otherX)*4;

                var dR = data[offset] - data[offsetOther];
                var dG = data[offset+1] - data[offsetOther+1];
                var dB = data[offset+2] - data[offsetOther+2];

                var dif = dR;
                var absDif = dif > 0 ? dif : -dif;

                var absG = dG > 0 ? dG : -dG;
                var absB = dB > 0 ? dB : -dB;

                if (absG > absDif) {
                    dif = dG;
                }
                if (absB > absDif) {
                    dif = dB;
                }

                dif *= strength;

                if (blend) {
                    var r = data[offset] + dif;
                    var g = data[offset+1] + dif;
                    var b = data[offset+2] + dif;

                    data[offset] = (r > 255) ? 255 : (r < 0 ? 0 : r);
                    data[offset+1] = (g > 255) ? 255 : (g < 0 ? 0 : g);
                    data[offset+2] = (b > 255) ? 255 : (b < 0 ? 0 : b);
                } else {
                    var grey = greyLevel - dif;
                    if (grey < 0) {
                        grey = 0;
                    } else if (grey > 255) {
                        grey = 255;
                    }

                    data[offset] = data[offset+1] = data[offset+2] = grey;
                }

            } while (--x);
        } while (--y);
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossStrength', 0.5, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set emboss strength. Use with {@link Kinetic.Filters.Emboss} filter.
    * @name embossStrength
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} level between 0 and 1.  Default is 0.5
    * @returns {Number}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossWhiteLevel', 0.5, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set emboss white level. Use with {@link Kinetic.Filters.Emboss} filter.
    * @name embossWhiteLevel
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} embossWhiteLevel between 0 and 1.  Default is 0.5
    * @returns {Number}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossDirection', 'top-left', null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set emboss direction. Use with {@link Kinetic.Filters.Emboss} filter.
    * @name embossDirection
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {String} embossDirection can be top-left, top, top-right, right, bottom-right, bottom, bottom-left or left
    *   The default is top-left
    * @returns {String}
    */

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'embossBlend', false, null, Kinetic.Factory.afterSetFilter);
    /**
    * get/set emboss blend. Use with {@link Kinetic.Filters.Emboss} filter.
    * @name embossBlend
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Boolean} embossBlend
    * @returns {Boolean}
    */
})();


;(function () {
    function remap(fromValue, fromMin, fromMax, toMin, toMax) {
        // Compute the range of the data
        var fromRange = fromMax - fromMin,
          toRange = toMax - toMin,
          toValue;

        // If either range is 0, then the value can only be mapped to 1 value
        if (fromRange === 0) {
            return toMin + toRange / 2;
        }
        if (toRange === 0) {
            return toMin;
        }

        // (1) untranslate, (2) unscale, (3) rescale, (4) retranslate
        toValue = (fromValue - fromMin) / fromRange;
        toValue = (toRange * toValue) + toMin;

        return toValue;
    }


    /**
    * Enhance Filter. Adjusts the colors so that they span the widest
    *  possible range (ie 0-255). Performs w*h pixel reads and w*h pixel
    *  writes.
    * @function
    * @name Enhance
    * @memberof Kinetic.Filters
    * @param {Object} imageData
    * @author ippo615
    * @example
    * node.cache();
    * node.filters([Kinetic.Filters.Enhance]);
    * node.enhance(0.4);
    */
    Kinetic.Filters.Enhance = function (imageData) {
        var data = imageData.data,
            nSubPixels = data.length,
            rMin = data[0], rMax = rMin, r,
            gMin = data[1], gMax = gMin, g,
            bMin = data[2], bMax = bMin, b,
            i;

        // If we are not enhancing anything - don't do any computation
        var enhanceAmount = this.enhance();
        if( enhanceAmount === 0 ){ return; }

        // 1st Pass - find the min and max for each channel:
        for (i = 0; i < nSubPixels; i += 4) {
            r = data[i + 0];
            if (r < rMin) { rMin = r; }
            else if (r > rMax) { rMax = r; }
            g = data[i + 1];
            if (g < gMin) { gMin = g; } else
            if (g > gMax) { gMax = g; }
            b = data[i + 2];
            if (b < bMin) { bMin = b; } else
            if (b > bMax) { bMax = b; }
            //a = data[i + 3];
            //if (a < aMin) { aMin = a; } else
            //if (a > aMax) { aMax = a; }
        }

        // If there is only 1 level - don't remap
        if( rMax === rMin ){ rMax = 255; rMin = 0; }
        if( gMax === gMin ){ gMax = 255; gMin = 0; }
        if( bMax === bMin ){ bMax = 255; bMin = 0; }

        var rMid, rGoalMax,rGoalMin,
            gMid, gGoalMax,gGoalMin,
            bMid, bGoalMax,bGoalMin;

        // If the enhancement is positive - stretch the histogram 
        if ( enhanceAmount > 0 ){
            rGoalMax = rMax + enhanceAmount*(255-rMax);
            rGoalMin = rMin - enhanceAmount*(rMin-0);
            gGoalMax = gMax + enhanceAmount*(255-gMax);
            gGoalMin = gMin - enhanceAmount*(gMin-0);
            bGoalMax = bMax + enhanceAmount*(255-bMax);
            bGoalMin = bMin - enhanceAmount*(bMin-0);
        // If the enhancement is negative - compress the histogram
        } else {
            rMid = (rMax + rMin)*0.5;
            rGoalMax = rMax + enhanceAmount*(rMax-rMid);
            rGoalMin = rMin + enhanceAmount*(rMin-rMid);
            gMid = (gMax + gMin)*0.5;
            gGoalMax = gMax + enhanceAmount*(gMax-gMid);
            gGoalMin = gMin + enhanceAmount*(gMin-gMid);
            bMid = (bMax + bMin)*0.5;
            bGoalMax = bMax + enhanceAmount*(bMax-bMid);
            bGoalMin = bMin + enhanceAmount*(bMin-bMid);
        }

        // Pass 2 - remap everything, except the alpha
        for (i = 0; i < nSubPixels; i += 4) {
            data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
            data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
            data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
            //data[i + 3] = remap(data[i + 3], aMin, aMax, aGoalMin, aGoalMax);
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'enhance', 0, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set enhance. Use with {@link Kinetic.Filters.Enhance} filter.
    * @name enhance
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Float} amount
    * @returns {Float}
    */
})();
;(function () {

    /**
     * Posterize Filter. Adjusts the channels so that there are no more
     *  than n different values for that channel. This is also applied
     *  to the alpha channel.
     * @function
     * @name Posterize
     * @author ippo615
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Posterize]);
     * node.levels(0.8);
     */

    Kinetic.Filters.Posterize = function (imageData) {
        // level must be between 1 and 255
        var levels = Math.round(this.levels() * 254) + 1,
            data = imageData.data,
            len = data.length,
            scale = (255 / levels),
            i;

        for (i = 0; i < len; i += 1) {
            data[i] = Math.floor(data[i] / scale) * scale;
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'levels', 0.5, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set levels.  Must be a number between 0 and 1.  Use with {@link Kinetic.Filters.Posterize} filter.
    * @name levels
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} level between 0 and 1
    * @returns {Number}
    */
})();;(function () {

    /**
     * Noise Filter. Randomly adds or substracts to the color channels
     * @function
     * @name Noise
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Noise]);
     * node.noise(0.8);
     */
    Kinetic.Filters.Noise = function (imageData) {
        var amount = this.noise() * 255,
            data = imageData.data,
            nPixels = data.length,
            half = amount / 2,
            i;

        for (i = 0; i < nPixels; i += 4) {
            data[i + 0] += half - 2 * half * Math.random();
            data[i + 1] += half - 2 * half * Math.random();
            data[i + 2] += half - 2 * half * Math.random();
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'noise', 0.2, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set noise amount.  Must be a value between 0 and 1. Use with {@link Kinetic.Filters.Noise} filter.
    * @name noise
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} noise
    * @returns {Number}
    */
})();
;(function () {

    /**
     * Pixelate Filter. Averages groups of pixels and redraws
     *  them as larger pixels
     * @function
     * @name Pixelate
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Pixelate]);
     * node.pixelSize(10);
     */

    Kinetic.Filters.Pixelate = function (imageData) {

        var pixelSize = Math.ceil(this.pixelSize()),
            width = imageData.width,
            height = imageData.height,
            x, y, i,
            //pixelsPerBin = pixelSize * pixelSize,
            red, green, blue, alpha,
            nBinsX = Math.ceil(width / pixelSize),
            nBinsY = Math.ceil(height / pixelSize),
            xBinStart, xBinEnd, yBinStart, yBinEnd,
            xBin, yBin, pixelsInBin;
        imageData = imageData.data;

        for (xBin = 0; xBin < nBinsX; xBin += 1) {
            for (yBin = 0; yBin < nBinsY; yBin += 1) {
        
                // Initialize the color accumlators to 0
                red = 0;
                green = 0;
                blue = 0;
                alpha = 0;

                // Determine which pixels are included in this bin
                xBinStart = xBin * pixelSize;
                xBinEnd = xBinStart + pixelSize;
                yBinStart = yBin * pixelSize;
                yBinEnd = yBinStart + pixelSize;

                // Add all of the pixels to this bin!
                pixelsInBin = 0;
                for (x = xBinStart; x < xBinEnd; x += 1) {
                    if( x >= width ){ continue; }
                    for (y = yBinStart; y < yBinEnd; y += 1) {
                        if( y >= height ){ continue; }
                        i = (width * y + x) * 4;
                        red += imageData[i + 0];
                        green += imageData[i + 1];
                        blue += imageData[i + 2];
                        alpha += imageData[i + 3];
                        pixelsInBin += 1;
                    }
                }

                // Make sure the channels are between 0-255
                red = red / pixelsInBin;
                green = green / pixelsInBin;
                blue = blue / pixelsInBin;

                // Draw this bin
                for (x = xBinStart; x < xBinEnd; x += 1) {
                    if( x >= width ){ continue; }
                    for (y = yBinStart; y < yBinEnd; y += 1) {
                        if( y >= height ){ continue; }
                        i = (width * y + x) * 4;
                        imageData[i + 0] = red;
                        imageData[i + 1] = green;
                        imageData[i + 2] = blue;
                        imageData[i + 3] = alpha;
                    }
                }
            }
        }
      
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'pixelSize', 8, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set pixel size. Use with {@link Kinetic.Filters.Pixelate} filter.
    * @name pixelSize
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} pixelSize
    * @returns {Integer}
    */
})();;(function () {

    /**
     * Threshold Filter. Pushes any value above the mid point to 
     *  the max and any value below the mid point to the min.
     *  This affects the alpha channel.
     * @function
     * @name Threshold
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author ippo615
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Threshold]);
     * node.threshold(0.1);
     */

    Kinetic.Filters.Threshold = function (imageData) {
        var level = this.threshold() * 255,
            data = imageData.data,
            len = data.length,
            i;

        for (i = 0; i < len; i += 1) {
            data[i] = data[i] < level ? 0 : 255;
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'threshold', 0.5, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set threshold.  Must be a value between 0 and 1. Use with {@link Kinetic.Filters.Threshold} or {@link Kinetic.Filters.Mask} filter.
    * @name threshold
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Number} threshold
    * @returns {Number}
    */
})();;(function() {
    /**
     * Sepia Filter
     * Based on: Pixastic Lib - Sepia filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * @function
     * @name Sepia
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @author Jacob Seidelin <jseidelin@nihilogic.dk>
     * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Sepia]);
     */
    Kinetic.Filters.Sepia = function (imageData) {
        var data = imageData.data,
            w = imageData.width,
            y = imageData.height,
            w4 = w*4,
            offsetY, x, offset, or, og, ob, r, g, b;
        
        do {
            offsetY = (y-1)*w4;
            x = w;
            do {
                offset = offsetY + (x-1)*4;
                
                or = data[offset];
                og = data[offset+1];
                ob = data[offset+2];

                r = or * 0.393 + og * 0.769 + ob * 0.189;
                g = or * 0.349 + og * 0.686 + ob * 0.168;
                b = or * 0.272 + og * 0.534 + ob * 0.131;

                data[offset] = r > 255 ? 255 : r;
                data[offset+1] = g > 255 ? 255 : g;
                data[offset+2] = b > 255 ? 255 : b;
                data[offset+3] = data[offset+3];
            } while (--x);
        } while (--y);
    };
})();
;(function () {
    /**
     * Solarize Filter
     * Pixastic Lib - Solarize filter - v0.1.0
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * License: [http://www.pixastic.com/lib/license.txt]
     * @function
     * @name Solarize
     * @memberof Kinetic.Filters
     * @param {Object} imageData
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Solarize]);
     */
    Kinetic.Filters.Solarize = function (imageData) {
        var data = imageData.data,
            w = imageData.width,
            h = imageData.height,
            w4 = w*4,
            y = h;

        do {
            var offsetY = (y-1)*w4;
            var x = w;
            do {
                var offset = offsetY + (x-1)*4;
                var r = data[offset];
                var g = data[offset+1];
                var b = data[offset+2];

                if (r > 127) {
                    r = 255 - r;
                }
                if (g > 127) {
                    g = 255 - g;
                }
                if (b > 127) {
                    b = 255 - b;
                }

                data[offset] = r;
                data[offset+1] = g;
                data[offset+2] = b;
            } while (--x);
        } while (--y);
    };
})();


;/*jshint newcap:false */
(function () {

  /*
   * ToPolar Filter. Converts image data to polar coordinates. Performs 
   *  w*h*4 pixel reads and w*h pixel writes. The r axis is placed along
   *  what would be the y axis and the theta axis along the x axis.
   * @function
   * @author ippo615
   * @memberof Kinetic.Filters
   * @param {ImageData} src, the source image data (what will be transformed)
   * @param {ImageData} dst, the destination image data (where it will be saved)
   * @param {Object} opt
   * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
   *  default is in the middle
   * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
   *  default is in the middle
   */

    var ToPolar = function(src,dst,opt){

        var srcPixels = src.data,
            dstPixels = dst.data,
            xSize = src.width,
            ySize = src.height,
            xMid = opt.polarCenterX || xSize/2,
            yMid = opt.polarCenterY || ySize/2,
            i, x, y, r=0,g=0,b=0,a=0;

        // Find the largest radius
        var rad, rMax = Math.sqrt( xMid*xMid + yMid*yMid );
        x = xSize - xMid;
        y = ySize - yMid;
        rad = Math.sqrt( x*x + y*y );
        rMax = (rad > rMax)?rad:rMax;

        // We'll be uisng y as the radius, and x as the angle (theta=t)
        var rSize = ySize,
            tSize = xSize,
            radius, theta;

        // We want to cover all angles (0-360) and we need to convert to
        // radians (*PI/180)
        var conversion = 360/tSize*Math.PI/180, sin, cos;

        // var x1, x2, x1i, x2i, y1, y2, y1i, y2i, scale;

        for( theta=0; theta<tSize; theta+=1 ){
            sin = Math.sin(theta*conversion);
            cos = Math.cos(theta*conversion);
            for( radius=0; radius<rSize; radius+=1 ){
                x = Math.floor(xMid+rMax*radius/rSize*cos);
                y = Math.floor(yMid+rMax*radius/rSize*sin);
                i = (y*xSize + x)*4;
                r = srcPixels[i+0];
                g = srcPixels[i+1];
                b = srcPixels[i+2];
                a = srcPixels[i+3];

                // Store it
                //i = (theta * xSize + radius) * 4;
                i = (theta + radius*xSize) * 4;
                dstPixels[i+0] = r;
                dstPixels[i+1] = g;
                dstPixels[i+2] = b;
                dstPixels[i+3] = a;

            }
        }
    };

    /*
     * FromPolar Filter. Converts image data from polar coordinates back to rectangular.
     *  Performs w*h*4 pixel reads and w*h pixel writes.
     * @function
     * @author ippo615
     * @memberof Kinetic.Filters
     * @param {ImageData} src, the source image data (what will be transformed)
     * @param {ImageData} dst, the destination image data (where it will be saved)
     * @param {Object} opt
     * @param {Number} [opt.polarCenterX] horizontal location for the center of the circle,
     *  default is in the middle
     * @param {Number} [opt.polarCenterY] vertical location for the center of the circle,
     *  default is in the middle
     * @param {Number} [opt.polarRotation] amount to rotate the image counterclockwis,
     *  0 is no rotation, 360 degrees is a full rotation
     */

    var FromPolar = function(src,dst,opt){

        var srcPixels = src.data,
            dstPixels = dst.data,
            xSize = src.width,
            ySize = src.height,
            xMid = opt.polarCenterX || xSize/2,
            yMid = opt.polarCenterY || ySize/2,
            i, x, y, dx, dy, r=0,g=0,b=0,a=0;


        // Find the largest radius
        var rad, rMax = Math.sqrt( xMid*xMid + yMid*yMid );
        x = xSize - xMid;
        y = ySize - yMid;
        rad = Math.sqrt( x*x + y*y );
        rMax = (rad > rMax)?rad:rMax;

        // We'll be uisng x as the radius, and y as the angle (theta=t)
        var rSize = ySize,
        tSize = xSize,
        radius, theta,
        phaseShift = opt.polarRotation || 0;

        // We need to convert to degrees and we need to make sure
        // it's between (0-360)
        // var conversion = tSize/360*180/Math.PI;
        //var conversion = tSize/360*180/Math.PI;

        var x1, y1;

        for( x=0; x<xSize; x+=1 ){
            for( y=0; y<ySize; y+=1 ){
                dx = x - xMid;
                dy = y - yMid;
                radius = Math.sqrt(dx*dx + dy*dy)*rSize/rMax;
                theta = (Math.atan2(dy,dx)*180/Math.PI + 360 + phaseShift)%360;
                theta = theta*tSize/360;
                x1 = Math.floor(theta);
                y1 = Math.floor(radius);
                i = (y1*xSize + x1)*4;
                r = srcPixels[i+0];
                g = srcPixels[i+1];
                b = srcPixels[i+2];
                a = srcPixels[i+3];

                // Store it
                i = (y*xSize + x)*4;
                dstPixels[i+0] = r;
                dstPixels[i+1] = g;
                dstPixels[i+2] = b;
                dstPixels[i+3] = a;
            }
        }

    };

    //Kinetic.Filters.ToPolar = Kinetic.Util._FilterWrapDoubleBuffer(ToPolar);
    //Kinetic.Filters.FromPolar = Kinetic.Util._FilterWrapDoubleBuffer(FromPolar);

    // create a temporary canvas for working - shared between multiple calls
    var tempCanvas = Kinetic.Util.createCanvasElement();

    /*
     * Kaleidoscope Filter. 
     * @function
     * @name Kaleidoscope
     * @author ippo615
     * @memberof Kinetic.Filters
     * @example
     * node.cache();
     * node.filters([Kinetic.Filters.Kaleidoscope]);
     * node.kaleidoscopePower(3);
     * node.kaleidoscopeAngle(45);
     */
    Kinetic.Filters.Kaleidoscope = function(imageData){
        var xSize = imageData.width,
            ySize = imageData.height;

        var x,y,xoff,i, r,g,b,a, srcPos, dstPos;
        var power = Math.round( this.kaleidoscopePower() );
        var angle = Math.round( this.kaleidoscopeAngle() );
        var offset = Math.floor(xSize*(angle%360)/360);

        if( power < 1 ){return;}

        // Work with our shared buffer canvas
        tempCanvas.width = xSize;
        tempCanvas.height = ySize;
        var scratchData = tempCanvas.getContext('2d').getImageData(0,0,xSize,ySize);

        // Convert thhe original to polar coordinates
        ToPolar( imageData, scratchData, {
            polarCenterX:xSize/2,
            polarCenterY:ySize/2
        });

        // Determine how big each section will be, if it's too small 
        // make it bigger
        var minSectionSize = xSize / Math.pow(2,power);
        while( minSectionSize <= 8){
            minSectionSize = minSectionSize*2;
            power -= 1;
        }
        minSectionSize = Math.ceil(minSectionSize);
        var sectionSize = minSectionSize;

        // Copy the offset region to 0
        // Depending on the size of filter and location of the offset we may need
        // to copy the section backwards to prevent it from rewriting itself
        var xStart = 0,
          xEnd = sectionSize,
          xDelta = 1;
        if( offset+minSectionSize > xSize ){
            xStart = sectionSize;
            xEnd = 0;
            xDelta = -1;
        }
        for( y=0; y<ySize; y+=1 ){
            for( x=xStart; x !== xEnd; x+=xDelta ){
                xoff = Math.round(x+offset)%xSize;
                srcPos = (xSize*y+xoff)*4;
                r = scratchData.data[srcPos+0];
                g = scratchData.data[srcPos+1];
                b = scratchData.data[srcPos+2];
                a = scratchData.data[srcPos+3];
                dstPos = (xSize*y+x)*4;
                scratchData.data[dstPos+0] = r;
                scratchData.data[dstPos+1] = g;
                scratchData.data[dstPos+2] = b;
                scratchData.data[dstPos+3] = a;
            }
        }

        // Perform the actual effect
        for( y=0; y<ySize; y+=1 ){
            sectionSize = Math.floor( minSectionSize );
            for( i=0; i<power; i+=1 ){
                for( x=0; x<sectionSize+1; x+=1 ){
                    srcPos = (xSize*y+x)*4;
                    r = scratchData.data[srcPos+0];
                    g = scratchData.data[srcPos+1];
                    b = scratchData.data[srcPos+2];
                    a = scratchData.data[srcPos+3];
                    dstPos = (xSize*y+sectionSize*2-x-1)*4;
                    scratchData.data[dstPos+0] = r;
                    scratchData.data[dstPos+1] = g;
                    scratchData.data[dstPos+2] = b;
                    scratchData.data[dstPos+3] = a;
                }
                sectionSize *= 2;
            }
        }

        // Convert back from polar coordinates
        FromPolar(scratchData,imageData,{polarRotation:0});
    };

    /**
    * get/set kaleidoscope power. Use with {@link Kinetic.Filters.Kaleidoscope} filter.
    * @name kaleidoscopePower
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} power of kaleidoscope
    * @returns {Integer}
    */
    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'kaleidoscopePower', 2, null, Kinetic.Factory.afterSetFilter);

    /**
    * get/set kaleidoscope angle. Use with {@link Kinetic.Filters.Kaleidoscope} filter.
    * @name kaleidoscopeAngle
    * @method
    * @memberof Kinetic.Node.prototype
    * @param {Integer} degrees
    * @returns {Integer}
    */
    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'kaleidoscopeAngle', 0, null, Kinetic.Factory.afterSetFilter);

})();
;(function() {
    var BATCH_DRAW_STOP_TIME_DIFF = 500;

    var now =(function() {
        if (Kinetic.root.performance && Kinetic.root.performance.now) {
            return function() {
                return Kinetic.root.performance.now();
            };
        }
        else {
            return function() {
                return new Date().getTime();
            };
        }
    })();

    var RAF = (function() {
        return Kinetic.root.requestAnimationFrame
            || Kinetic.root.webkitRequestAnimationFrame
            || Kinetic.root.mozRequestAnimationFrame
            || Kinetic.root.oRequestAnimationFrame
            || Kinetic.root.msRequestAnimationFrame
            || FRAF;
    })();

    function FRAF(callback) {
        setTimeout(callback, 1000 / 60);
    }

    function requestAnimFrame() {
        return RAF.apply(Kinetic.root, arguments);
    }
    
    /**
     * Animation constructor.  A stage is used to contain multiple layers and handle
     * @constructor
     * @memberof Kinetic
     * @param {Function} func function executed on each animation frame.  The function is passed a frame object, which contains
     *  timeDiff, lastTime, time, and frameRate properties.  The timeDiff property is the number of milliseconds that have passed
     *  since the last animation frame.  The lastTime property is time in milliseconds that elapsed from the moment the animation started
     *  to the last animation frame.  The time property is the time in milliseconds that ellapsed from the moment the animation started
     *  to the current animation frame.  The frameRate property is the current frame rate in frames / second. Return false from function,
     *  if you don't need to redraw layer/layers on some frames.
     * @param {Kinetic.Layer|Array} [layers] layer(s) to be redrawn on each animation frame. Can be a layer, an array of layers, or null.
     *  Not specifying a node will result in no redraw.
     * @example
     * // move a node to the right at 50 pixels / second
     * var velocity = 50;
     *
     * var anim = new Kinetic.Animation(function(frame) {
     *   var dist = velocity * (frame.timeDiff / 1000);
     *   node.move(dist, 0);
     * }, layer);
     *
     * anim.start();
     */
    Kinetic.Animation = function(func, layers) {
        var Anim = Kinetic.Animation;
        this.func = func;
        this.setLayers(layers);
        this.id = Anim.animIdCounter++;
        this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: now()
        };
    };
    /*
     * Animation methods
     */
    Kinetic.Animation.prototype = {
        /**
         * set layers to be redrawn on each animation frame
         * @method
         * @memberof Kinetic.Animation.prototype
         * @param {Kinetic.Layer|Array} [layers] layer(s) to be redrawn.&nbsp; Can be a layer, an array of layers, or null.  Not specifying a node will result in no redraw.
         */
        setLayers: function(layers) {
            var lays = [];
            // if passing in no layers
            if (!layers) {
                lays = [];
            }
            // if passing in an array of Layers
            // NOTE: layers could be an array or Kinetic.Collection.  for simplicity, I'm just inspecting
            // the length property to check for both cases
            else if (layers.length > 0) {
                lays = layers;
            }
            // if passing in a Layer
            else {
                lays = [layers];
            }

            this.layers = lays;
        },
        /**
         * get layers
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        getLayers: function() {
            return this.layers;
        },
        /**
         * add layer.  Returns true if the layer was added, and false if it was not
         * @method
         * @memberof Kinetic.Animation.prototype
         * @param {Kinetic.Layer} layer
         */
        addLayer: function(layer) {
            var layers = this.layers,
                len, n;

            if (layers) {
                len = layers.length;

                // don't add the layer if it already exists
                for (n = 0; n < len; n++) {
                    if (layers[n]._id === layer._id) {
                        return false;
                    }
                }
            }
            else {
                this.layers = [];
            }

            this.layers.push(layer);
            return true;
        },
        /**
         * determine if animation is running or not.  returns true or false
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        isRunning: function() {
            var a = Kinetic.Animation,
                animations = a.animations,
                len = animations.length,
                n;

            for(n = 0; n < len; n++) {
                if(animations[n].id === this.id) {
                    return true;
                }
            }
            return false;
        },
        /**
         * start animation
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        start: function() {
            var Anim = Kinetic.Animation;
            this.stop();
            this.frame.timeDiff = 0;
            this.frame.lastTime = now();
            Anim._addAnimation(this);
        },
        /**
         * stop animation
         * @method
         * @memberof Kinetic.Animation.prototype
         */
        stop: function() {
            Kinetic.Animation._removeAnimation(this);
        },
        _updateFrameObject: function(time) {
            this.frame.timeDiff = time - this.frame.lastTime;
            this.frame.lastTime = time;
            this.frame.time += this.frame.timeDiff;
            this.frame.frameRate = 1000 / this.frame.timeDiff;
        }
    };
    Kinetic.Animation.animations = [];
    Kinetic.Animation.animIdCounter = 0;
    Kinetic.Animation.animRunning = false;

    Kinetic.Animation._addAnimation = function(anim) {
        this.animations.push(anim);
        this._handleAnimation();
    };
    Kinetic.Animation._removeAnimation = function(anim) {
        var id = anim.id,
            animations = this.animations,
            len = animations.length,
            n;

        for(n = 0; n < len; n++) {
            if(animations[n].id === id) {
                this.animations.splice(n, 1);
                break;
            }
        }
    };

    Kinetic.Animation._runFrames = function() {
        var layerHash = {},
            animations = this.animations,
            anim, layers, func, n, i, layersLen, layer, key, needRedraw;
        /*
         * loop through all animations and execute animation
         *  function.  if the animation object has specified node,
         *  we can add the node to the nodes hash to eliminate
         *  drawing the same node multiple times.  The node property
         *  can be the stage itself or a layer
         */
        /*
         * WARNING: don't cache animations.length because it could change while
         * the for loop is running, causing a JS error
         */

        for(n = 0; n < animations.length; n++) {
            anim = animations[n];
            layers = anim.layers;
            func = anim.func;


            anim._updateFrameObject(now());
            layersLen = layers.length;

            // if animation object has a function, execute it
            if (func) {
                // allow anim bypassing drawing
                needRedraw = (func.call(anim, anim.frame) !== false);
            } else {
                needRedraw = true;
            }
            if (needRedraw) {
                for (i = 0; i < layersLen; i++) {
                    layer = layers[i];

                    if (layer._id !== undefined) {
                        layerHash[layer._id] = layer;
                    }
                }
            }
        }

        for (key in layerHash) {
            layerHash[key].draw();
        }
    };
    Kinetic.Animation._animationLoop = function() {
        var Anim = Kinetic.Animation;

        if(Anim.animations.length) {
            requestAnimFrame(Anim._animationLoop);
            Anim._runFrames();
        }
        else {
            Anim.animRunning = false;
        }
    };
    Kinetic.Animation._handleAnimation = function() {
        var that = this;
        if(!this.animRunning) {
            this.animRunning = true;
            that._animationLoop();
        }
    };

    var moveTo = Kinetic.Node.prototype.moveTo;
    Kinetic.Node.prototype.moveTo = function(container) {
        moveTo.call(this, container);
    };

    /**
     * batch draw
     * @method
     * @memberof Kinetic.Base.prototype
     */
    Kinetic.BaseLayer.prototype.batchDraw = function() {
        var that = this,
            Anim = Kinetic.Animation;

        if (!this.batchAnim) {
            this.batchAnim = new Anim(function() {
                if (that.lastBatchDrawTime && now() - that.lastBatchDrawTime > BATCH_DRAW_STOP_TIME_DIFF) {
                    that.batchAnim.stop();
                }
            }, this);
        }

        this.lastBatchDrawTime = now();

        if (!this.batchAnim.isRunning()) {
            this.draw();
            this.batchAnim.start();
        }
    };

    /**
     * batch draw
     * @method
     * @memberof Kinetic.Stage.prototype
     */
    Kinetic.Stage.prototype.batchDraw = function() {
        this.getChildren().each(function(layer) {
            layer.batchDraw();
        });
    };
})(this);
;(function() {
    var blacklist = {
        node: 1,
        duration: 1,
        easing: 1,
        onFinish: 1,
        yoyo: 1
    },

    PAUSED = 1,
    PLAYING = 2,
    REVERSING = 3,

    idCounter = 0;

    /**
     * Tween constructor.  Tweens enable you to animate a node between the current state and a new state.
     *  You can play, pause, reverse, seek, reset, and finish tweens.  By default, tweens are animated using
     *  a linear easing.  For more tweening options, check out {@link Kinetic.Easings}
     * @constructor
     * @memberof Kinetic
     * @example
     * // instantiate new tween which fully rotates a node in 1 second
     * var tween = new Kinetic.Tween({
     *   node: node,
     *   rotationDeg: 360,
     *   duration: 1,
     *   easing: Kinetic.Easings.EaseInOut
     * });
     *
     * // play tween
     * tween.play();
     *
     * // pause tween
     * tween.pause();
     */
    Kinetic.Tween = function(config) {
        var that = this,
            node = config.node,
            nodeId = node._id,
            duration,
            easing = config.easing || Kinetic.Easings.Linear,
            yoyo = !!config.yoyo,
            key;

        if (typeof config.duration === 'undefined') {
            duration = 1;
        } else if (config.duration === 0) {  // zero is bad value for duration
            duration = 0.001;
        } else {
            duration = config.duration;
        }
        this.node = node;
        this._id = idCounter++;

        this.anim = new Kinetic.Animation(function() {
            that.tween.onEnterFrame();
        }, node.getLayer() || ((node instanceof Kinetic.Stage) ? node.getLayers() : null));

        this.tween = new Tween(key, function(i) {
            that._tweenFunc(i);
        }, easing, 0, 1, duration * 1000, yoyo);

        this._addListeners();

        // init attrs map
        if (!Kinetic.Tween.attrs[nodeId]) {
            Kinetic.Tween.attrs[nodeId] = {};
        }
        if (!Kinetic.Tween.attrs[nodeId][this._id]) {
            Kinetic.Tween.attrs[nodeId][this._id] = {};
        }
        // init tweens map
        if (!Kinetic.Tween.tweens[nodeId]) {
            Kinetic.Tween.tweens[nodeId] = {};
        }

        for (key in config) {
            if (blacklist[key] === undefined) {
                this._addAttr(key, config[key]);
            }
        }

        this.reset();

        // callbacks
        this.onFinish = config.onFinish;
        this.onReset = config.onReset;
    };

    // start/diff object = attrs.nodeId.tweenId.attr
    Kinetic.Tween.attrs = {};
    // tweenId = tweens.nodeId.attr
    Kinetic.Tween.tweens = {};

    Kinetic.Tween.prototype = {
        _addAttr: function(key, end) {
            var node = this.node,
                nodeId = node._id,
                start, diff, tweenId, n, len;

            // remove conflict from tween map if it exists
            tweenId = Kinetic.Tween.tweens[nodeId][key];

            if (tweenId) {
                delete Kinetic.Tween.attrs[nodeId][tweenId][key];
            }

            // add to tween map
            start = node.getAttr(key);

            if (Kinetic.Util._isArray(end)) {
                diff = [];
                len = end.length;
                for (n=0; n<len; n++) {
                    diff.push(end[n] - start[n]);
                }

            }
            else {
                diff = end - start;
            }

            Kinetic.Tween.attrs[nodeId][this._id][key] = {
                start: start,
                diff: diff
            };
            Kinetic.Tween.tweens[nodeId][key] = this._id;
        },
        _tweenFunc: function(i) {
            var node = this.node,
                attrs = Kinetic.Tween.attrs[node._id][this._id],
                key, attr, start, diff, newVal, n, len;

            for (key in attrs) {
                attr = attrs[key];
                start = attr.start;
                diff = attr.diff;

                if (Kinetic.Util._isArray(start)) {
                    newVal = [];
                    len = start.length;
                    for (n=0; n<len; n++) {
                        newVal.push(start[n] + (diff[n] * i));
                    }
                }
                else {
                    newVal = start + (diff * i);
                }

                node.setAttr(key, newVal);
            }
        },
        _addListeners: function() {
            var that = this;

            // start listeners
            this.tween.onPlay = function() {
                that.anim.start();
            };
            this.tween.onReverse = function() {
                that.anim.start();
            };

            // stop listeners
            this.tween.onPause = function() {
                that.anim.stop();
            };
            this.tween.onFinish = function() {
                if (that.onFinish) {
                    that.onFinish();
                }
            };
            this.tween.onReset = function() {
                if (that.onReset) {
                    that.onReset();
                }
            };
        },
        /**
         * play
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        play: function() {
            this.tween.play();
            return this;
        },
        /**
         * reverse
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        reverse: function() {
            this.tween.reverse();
            return this;
        },
        /**
         * reset
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        reset: function() {
            this.tween.reset();
            return this;
        },
        /**
         * seek
         * @method
         * @memberof Kinetic.Tween.prototype
         * @param {Integer} t time in seconds between 0 and the duration
         * @returns {Tween}
         */
        seek: function(t) {
            this.tween.seek(t * 1000);
            return this;
        },
        /**
         * pause
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        pause: function() {
            this.tween.pause();
            return this;
        },
        /**
         * finish
         * @method
         * @memberof Kinetic.Tween.prototype
         * @returns {Tween}
         */
        finish: function() {
            this.tween.finish();
            return this;
        },
        /**
         * destroy
         * @method
         * @memberof Kinetic.Tween.prototype
         */
        destroy: function() {
            var nodeId = this.node._id,
                thisId = this._id,
                attrs = Kinetic.Tween.tweens[nodeId],
                key;

            this.pause();

            for (key in attrs) {
                delete Kinetic.Tween.tweens[nodeId][key];
            }

            delete Kinetic.Tween.attrs[nodeId][thisId];
        }
    };

    var Tween = function(prop, propFunc, func, begin, finish, duration, yoyo) {
        this.prop = prop;
        this.propFunc = propFunc;
        this.begin = begin;
        this._pos = begin;
        this.duration = duration;
        this._change = 0;
        this.prevPos = 0;
        this.yoyo = yoyo;
        this._time = 0;
        this._position = 0;
        this._startTime = 0;
        this._finish = 0;
        this.func = func;
        this._change = finish - this.begin;
        this.pause();
    };
    /*
     * Tween methods
     */
    Tween.prototype = {
        fire: function(str) {
            var handler = this[str];
            if (handler) {
                handler();
            }
        },
        setTime: function(t) {
            if(t > this.duration) {
                if(this.yoyo) {
                    this._time = this.duration;
                    this.reverse();
                }
                else {
                    this.finish();
                }
            }
            else if(t < 0) {
                if(this.yoyo) {
                    this._time = 0;
                    this.play();
                }
                else {
                    this.reset();
                }
            }
            else {
                this._time = t;
                this.update();
            }
        },
        getTime: function() {
            return this._time;
        },
        setPosition: function(p) {
            this.prevPos = this._pos;
            this.propFunc(p);
            this._pos = p;
        },
        getPosition: function(t) {
            if(t === undefined) {
                t = this._time;
            }
            return this.func(t, this.begin, this._change, this.duration);
        },
        play: function() {
            this.state = PLAYING;
            this._startTime = this.getTimer() - this._time;
            this.onEnterFrame();
            this.fire('onPlay');
        },
        reverse: function() {
            this.state = REVERSING;
            this._time = this.duration - this._time;
            this._startTime = this.getTimer() - this._time;
            this.onEnterFrame();
            this.fire('onReverse');
        },
        seek: function(t) {
            this.pause();
            this._time = t;
            this.update();
            this.fire('onSeek');
        },
        reset: function() {
            this.pause();
            this._time = 0;
            this.update();
            this.fire('onReset');
        },
        finish: function() {
            this.pause();
            this._time = this.duration;
            this.update();
            this.fire('onFinish');
        },
        update: function() {
            this.setPosition(this.getPosition(this._time));
        },
        onEnterFrame: function() {
            var t = this.getTimer() - this._startTime;
            if(this.state === PLAYING) {
                this.setTime(t);
            }
            else if (this.state === REVERSING) {
                this.setTime(this.duration - t);
            }
        },
        pause: function() {
            this.state = PAUSED;
            this.fire('onPause');
        },
        getTimer: function() {
            return new Date().getTime();
        }
    };

    /*
    * These eases were ported from an Adobe Flash tweening library to JavaScript
    * by Xaric
    */

    /**
     * @namespace Easings
     * @memberof Kinetic
     */
    Kinetic.Easings = {
        /**
        * back ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'BackEaseIn': function(t, b, c, d) {
            var s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        /**
        * back ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'BackEaseOut': function(t, b, c, d) {
            var s = 1.70158;
            return c * (( t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        /**
        * back ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'BackEaseInOut': function(t, b, c, d) {
            var s = 1.70158;
            if((t /= d / 2) < 1) {
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            }
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        /**
        * elastic ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'ElasticEaseIn': function(t, b, c, d, a, p) {
            // added s = 0
            var s = 0;
            if(t === 0) {
                return b;
            }
            if((t /= d) == 1) {
                return b + c;
            }
            if(!p) {
                p = d * 0.3;
            }
            if(!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        /**
        * elastic ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'ElasticEaseOut': function(t, b, c, d, a, p) {
            // added s = 0
            var s = 0;
            if(t === 0) {
                return b;
            }
            if((t /= d) == 1) {
                return b + c;
            }
            if(!p) {
                p = d * 0.3;
            }
            if(!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        /**
        * elastic ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'ElasticEaseInOut': function(t, b, c, d, a, p) {
            // added s = 0
            var s = 0;
            if(t === 0) {
                return b;
            }
            if((t /= d / 2) == 2) {
                return b + c;
            }
            if(!p) {
                p = d * (0.3 * 1.5);
            }
            if(!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if(t < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            }
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        },
        /**
        * bounce ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'BounceEaseOut': function(t, b, c, d) {
            if((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if(t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            }
            else if(t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
            }
        },
        /**
        * bounce ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'BounceEaseIn': function(t, b, c, d) {
            return c - Kinetic.Easings.BounceEaseOut(d - t, 0, c, d) + b;
        },
        /**
        * bounce ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'BounceEaseInOut': function(t, b, c, d) {
            if(t < d / 2) {
                return Kinetic.Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
            }
            else {
                return Kinetic.Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
            }
        },
        /**
        * ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'EaseIn': function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        /**
        * ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'EaseOut': function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        /**
        * ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'EaseInOut': function(t, b, c, d) {
            if((t /= d / 2) < 1) {
                return c / 2 * t * t + b;
            }
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        /**
        * strong ease in
        * @function
        * @memberof Kinetic.Easings
        */
        'StrongEaseIn': function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        /**
        * strong ease out
        * @function
        * @memberof Kinetic.Easings
        */
        'StrongEaseOut': function(t, b, c, d) {
            return c * (( t = t / d - 1) * t * t * t * t + 1) + b;
        },
        /**
        * strong ease in out
        * @function
        * @memberof Kinetic.Easings
        */
        'StrongEaseInOut': function(t, b, c, d) {
            if((t /= d / 2) < 1) {
                return c / 2 * t * t * t * t * t + b;
            }
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        /**
        * linear
        * @function
        * @memberof Kinetic.Easings
        */
        'Linear': function(t, b, c, d) {
            return c * t / d + b;
        }
    };
})();
;(function() {
    Kinetic.DD = {
        // properties
        anim: new Kinetic.Animation(function() {
            var b = this.dirty;
            this.dirty = false;
            return b;
        }),
        isDragging: false,
        justDragged: false,
        offset: {
            x: 0,
            y: 0
        },
        node: null,

        // methods
        _drag: function(evt) {
            var dd = Kinetic.DD,
                node = dd.node;

            if(node) {
               if(!dd.isDragging) {
                    var pos = node.getStage().getPointerPosition();
                    var dragDistance = node.dragDistance();
                    var distance = Math.max(
                        Math.abs(pos.x - dd.startPointerPos.x),
                        Math.abs(pos.y - dd.startPointerPos.y)
                    );
                    if (distance < dragDistance) {
                        return;
                    }
                }

                node._setDragPosition(evt);
                if(!dd.isDragging) {
                    dd.isDragging = true;
                    node.fire('dragstart', {
                        type : 'dragstart',
                        target : node,
                        evt : evt
                    }, true);
                }

                // execute ondragmove if defined
                node.fire('dragmove', {
                    type : 'dragmove',
                    target : node,
                    evt : evt
                }, true);
            }
        },
        _endDragBefore: function(evt) {
            var dd = Kinetic.DD,
                node = dd.node,
                nodeType, layer;

            if(node) {
                nodeType = node.nodeType;
                layer = node.getLayer();
                dd.anim.stop();

                // only fire dragend event if the drag and drop
                // operation actually started.
                if(dd.isDragging) {
                    dd.isDragging = false;
                    dd.justDragged = true;
                    Kinetic.listenClickTap = false;

                    if (evt) {
                        evt.dragEndNode = node;
                    }
                }

                delete dd.node;

                (layer || node).draw();
            }
        },
        _endDragAfter: function(evt) {
            evt = evt || {};

            var dragEndNode = evt.dragEndNode;

            if (evt && dragEndNode) {
                dragEndNode.fire('dragend', {
                    type : 'dragend',
                    target : dragEndNode,
                    evt : evt
                }, true);
            }
        }
    };

    // Node extenders

    /**
     * initiate drag and drop
     * @method
     * @memberof Kinetic.Node.prototype
     */
    Kinetic.Node.prototype.startDrag = function() {
        var dd = Kinetic.DD,
            stage = this.getStage(),
            layer = this.getLayer(),
            pos = stage.getPointerPosition(),
            ap = this.getAbsolutePosition();

        if(pos) {
            if (dd.node) {
                dd.node.stopDrag();
            }

            dd.node = this;
            dd.startPointerPos = pos;
            dd.offset.x = pos.x - ap.x;
            dd.offset.y = pos.y - ap.y;
            dd.anim.setLayers(layer || this.getLayers());
            dd.anim.start();

            this._setDragPosition();
        }
    };

    Kinetic.Node.prototype._setDragPosition = function(evt) {
        var dd = Kinetic.DD,
            pos = this.getStage().getPointerPosition(),
            dbf = this.getDragBoundFunc();
        if (!pos) {
            return;
        }
        var newNodePos = {
            x: pos.x - dd.offset.x,
            y: pos.y - dd.offset.y
        };

        if(dbf !== undefined) {
            newNodePos = dbf.call(this, newNodePos, evt);
        }
        this.setAbsolutePosition(newNodePos);

        if (!this._lastPos || this._lastPos.x !== newNodePos.x ||
            this._lastPos.y !== newNodePos.y) {
            dd.anim.dirty = true;
        }

        this._lastPos = newNodePos;
    };

    /**
     * stop drag and drop
     * @method
     * @memberof Kinetic.Node.prototype
     */
    Kinetic.Node.prototype.stopDrag = function() {
        var dd = Kinetic.DD,
            evt = {};
        dd._endDragBefore(evt);
        dd._endDragAfter(evt);
    };

    Kinetic.Node.prototype.setDraggable = function(draggable) {
        this._setAttr('draggable', draggable);
        this._dragChange();
    };

    var origDestroy = Kinetic.Node.prototype.destroy;

    Kinetic.Node.prototype.destroy = function() {
        var dd = Kinetic.DD;

        // stop DD
        if(dd.node && dd.node._id === this._id) {

            this.stopDrag();
        }

        origDestroy.call(this);
    };

    /**
     * determine if node is currently in drag and drop mode
     * @method
     * @memberof Kinetic.Node.prototype
     */
    Kinetic.Node.prototype.isDragging = function() {
        var dd = Kinetic.DD;
        return !!(dd.node && dd.node._id === this._id && dd.isDragging);
    };

    Kinetic.Node.prototype._listenDrag = function() {
        var that = this;

        this._dragCleanup();

        if (this.getClassName() === 'Stage') {
            this.on('contentMousedown.kinetic contentTouchstart.kinetic', function(evt) {
                if(!Kinetic.DD.node) {
                    that.startDrag(evt);
                }
            });
        }
        else {
            this.on('mousedown.kinetic touchstart.kinetic', function(evt) {
                // ignore right and middle buttons
                if (evt.evt.button === 1 || evt.evt.button === 2) {
                    return;
                }
                if(!Kinetic.DD.node) {
                    that.startDrag(evt);
                }
            });
        }

        // listening is required for drag and drop
        /*
        this._listeningEnabled = true;
        this._clearSelfAndAncestorCache('listeningEnabled');
        */
    };

    Kinetic.Node.prototype._dragChange = function() {
        if(this.attrs.draggable) {
            this._listenDrag();
        }
        else {
            // remove event listeners
            this._dragCleanup();

            /*
             * force drag and drop to end
             * if this node is currently in
             * drag and drop mode
             */
            var stage = this.getStage();
            var dd = Kinetic.DD;
            if(stage && dd.node && dd.node._id === this._id) {
                dd.node.stopDrag();
            }
        }
    };

    Kinetic.Node.prototype._dragCleanup = function() {
        if (this.getClassName() === 'Stage') {
            this.off('contentMousedown.kinetic');
            this.off('contentTouchstart.kinetic');
        } else {
            this.off('mousedown.kinetic');
            this.off('touchstart.kinetic');
        }
    };

    Kinetic.Factory.addGetterSetter(Kinetic.Node, 'dragBoundFunc');

    /**
     * get/set drag bound function.  This is used to override the default
     *  drag and drop position
     * @name dragBoundFunc
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Function} dragBoundFunc
     * @returns {Function}
     * @example
     * // get drag bound function
     * var dragBoundFunc = node.dragBoundFunc();
     *
     * // create vertical drag and drop
     * node.dragBoundFunc(function(pos){
     *   return {
     *     x: this.getAbsolutePosition().x,
     *     y: pos.y
     *   };
     * });
     */

    Kinetic.Factory.addGetter(Kinetic.Node, 'draggable', false);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Node, 'draggable');

     /**
     * get/set draggable flag
     * @name draggable
     * @method
     * @memberof Kinetic.Node.prototype
     * @param {Boolean} draggable
     * @returns {Boolean}
     * @example
     * // get draggable flag
     * var draggable = node.draggable();
     *
     * // enable drag and drop
     * node.draggable(true);
     *
     * // disable drag and drop
     * node.draggable(false);
     */

    var html = Kinetic.document.documentElement;
    html.addEventListener('mouseup', Kinetic.DD._endDragBefore, true);
    html.addEventListener('touchend', Kinetic.DD._endDragBefore, true);

    html.addEventListener('mouseup', Kinetic.DD._endDragAfter, false);
    html.addEventListener('touchend', Kinetic.DD._endDragAfter, false);

})();
;(function() {
    Kinetic.Util.addMethods(Kinetic.Container, {
        __init: function(config) {
            this.children = new Kinetic.Collection();
            Kinetic.Node.call(this, config);
        },
        /**
         * returns a {@link Kinetic.Collection} of direct descendant nodes
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Function} [filterFunc] filter function
         * @returns {Kinetic.Collection}
         * @example
         * // get all children
         * var children = layer.getChildren();
         *
         * // get only circles
         * var circles = layer.getChildren(function(node){
         *    return node.getClassName() === 'Circle';
         * });
         */
        getChildren: function(filterFunc) {
            if (!filterFunc) {
                return this.children;
            } else {
                var results = new Kinetic.Collection();
                this.children.each(function(child){
                    if (filterFunc(child)) {
                        results.push(child);
                    }
                });
                return results;
            }
        },
        /**
         * determine if node has children
         * @method
         * @memberof Kinetic.Container.prototype
         * @returns {Boolean}
         */
        hasChildren: function() {
            return this.getChildren().length > 0;
        },
        /**
         * remove all children
         * @method
         * @memberof Kinetic.Container.prototype
         */
        removeChildren: function() {
            var children = Kinetic.Collection.toCollection(this.children);
            var child;
            for (var i = 0; i < children.length; i++) {
                child = children[i];
                // reset parent to prevent many _setChildrenIndices calls
                delete child.parent;
                child.index = 0;
                if (child.hasChildren()) {
                    child.removeChildren();
                }
                child.remove();
            }
            children = null;
            this.children = new Kinetic.Collection();
            return this;
        },
        /**
         * destroy all children
         * @method
         * @memberof Kinetic.Container.prototype
         */
        destroyChildren: function() {
           var children = Kinetic.Collection.toCollection(this.children);
            var child;
            for (var i = 0; i < children.length; i++) {
                child = children[i];
                // reset parent to prevent many _setChildrenIndices calls
                delete child.parent;
                child.index = 0;
                child.destroy();
            }
            children = null;
            this.children = new Kinetic.Collection();
            return this;
        },
        /**
         * Add node or nodes to container.
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {...Kinetic.Node} child
         * @returns {Container}
         * @example
         * layer.add(shape1, shape2, shape3);
         */
        add: function(child) {
            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++) {
                    this.add(arguments[i]);
                }
                return this;
            }
            if (child.getParent()) {
                child.moveTo(this);
                return this;
            }
            var children = this.children;
            this._validateAdd(child);
            child.index = children.length;
            child.parent = this;
            children.push(child);
            this._fire('add', {
                child: child
            });

            // if node under drag we need to update drag animation
            if (child.isDragging()) {
                Kinetic.DD.anim.setLayers(child.getLayer());
            }

            // chainable
            return this;
        },
        destroy: function() {
            // destroy children
            if (this.hasChildren()) {
                this.destroyChildren();
            }
            // then destroy self
            Kinetic.Node.prototype.destroy.call(this);
        },
        /**
         * return a {@link Kinetic.Collection} of nodes that match the selector.  Use '#' for id selections
         * and '.' for name selections.  You can also select by type or class name. Pass multiple selectors
         * separated by a space.
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {String} selector
         * @returns {Collection}
         * @example
         * // select node with id foo
         * var node = stage.find('#foo');
         *
         * // select nodes with name bar inside layer
         * var nodes = layer.find('.bar');
         *
         * // select all groups inside layer
         * var nodes = layer.find('Group');
         *
         * // select all rectangles inside layer
         * var nodes = layer.find('Rect');
         *
         * // select node with an id of foo or a name of bar inside layer
         * var nodes = layer.find('#foo, .bar');
         */
        find: function(selector) {
            var retArr = [],
                selectorArr = selector.replace(/ /g, '').split(','),
                len = selectorArr.length,
                n, i, sel, arr, node, children, clen;

            for (n = 0; n < len; n++) {
                sel = selectorArr[n];

                // id selector
                if(sel.charAt(0) === '#') {
                    node = this._getNodeById(sel.slice(1));
                    if(node) {
                        retArr.push(node);
                    }
                }
                // name selector
                else if(sel.charAt(0) === '.') {
                    arr = this._getNodesByName(sel.slice(1));
                    retArr = retArr.concat(arr);
                }
                // unrecognized selector, pass to children
                else {
                    children = this.getChildren();
                    clen = children.length;
                    for(i = 0; i < clen; i++) {
                        retArr = retArr.concat(children[i]._get(sel));
                    }
                }
            }

            return Kinetic.Collection.toCollection(retArr);
        },
        _getNodeById: function(key) {
            var node = Kinetic.ids[key];

            if(node !== undefined && this.isAncestorOf(node)) {
                return node;
            }
            return null;
        },
        _getNodesByName: function(key) {
            var arr = Kinetic.names[key] || [];
            return this._getDescendants(arr);
        },
        _get: function(selector) {
            var retArr = Kinetic.Node.prototype._get.call(this, selector);
            var children = this.getChildren();
            var len = children.length;
            for(var n = 0; n < len; n++) {
                retArr = retArr.concat(children[n]._get(selector));
            }
            return retArr;
        },
        // extenders
        toObject: function() {
            var obj = Kinetic.Node.prototype.toObject.call(this);

            obj.children = [];

            var children = this.getChildren();
            var len = children.length;
            for(var n = 0; n < len; n++) {
                var child = children[n];
                obj.children.push(child.toObject());
            }

            return obj;
        },
        _getDescendants: function(arr) {
            var retArr = [];
            var len = arr.length;
            for(var n = 0; n < len; n++) {
                var node = arr[n];
                if(this.isAncestorOf(node)) {
                    retArr.push(node);
                }
            }

            return retArr;
        },
        /**
         * determine if node is an ancestor
         * of descendant
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Kinetic.Node} node
         */
        isAncestorOf: function(node) {
            var parent = node.getParent();
            while(parent) {
                if(parent._id === this._id) {
                    return true;
                }
                parent = parent.getParent();
            }

            return false;
        },
        clone: function(obj) {
            // call super method
            var node = Kinetic.Node.prototype.clone.call(this, obj);

            this.getChildren().each(function(no) {
                node.add(no.clone());
            });
            return node;
        },
        /**
         * get all shapes that intersect a point.  Note: because this method must clear a temporary
         * canvas and redraw every shape inside the container, it should only be used for special sitations
         * because it performs very poorly.  Please use the {@link Kinetic.Stage#getIntersection} method if at all possible
         * because it performs much better
         * @method
         * @memberof Kinetic.Container.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Array} array of shapes
         */
        getAllIntersections: function(pos) {
            var arr = [];

            this.find('Shape').each(function(shape) {
                if(shape.isVisible() && shape.intersects(pos)) {
                    arr.push(shape);
                }
            });

            return arr;
        },
        _setChildrenIndices: function() {
            this.children.each(function(child, n) {
                child.index = n;
            });
        },
        drawScene: function(can, top) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.getCanvas()),
                context = canvas && canvas.getContext(),
                cachedCanvas = this._cache.canvas,
                cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;

            if (this.isVisible()) {
                if (cachedSceneCanvas) {
                    this._drawCachedSceneCanvas(context);
                }
                else {
                    this._drawChildren(canvas, 'drawScene', top);
                }
            }
            return this;
        },
        drawHit: function(can, top) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.hitCanvas),
                context = canvas && canvas.getContext(),
                cachedCanvas = this._cache.canvas,
                cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

            if (this.shouldDrawHit(canvas)) {
                if (layer) {
                    layer.clearHitCache();
                }
                if (cachedHitCanvas) {
                    this._drawCachedHitCanvas(context);
                }
                else {
                    this._drawChildren(canvas, 'drawHit', top);
                }
            }
            return this;
        },
        _drawChildren: function(canvas, drawMethod, top) {
            var layer = this.getLayer(),
                context = canvas && canvas.getContext(),
                clipWidth = this.getClipWidth(),
                clipHeight = this.getClipHeight(),
                hasClip = clipWidth && clipHeight,
                clipX, clipY;

            if (hasClip && layer) {
                clipX = this.getClipX();
                clipY = this.getClipY();

                context.save();
                layer._applyTransform(this, context);
                context.beginPath();
                context.rect(clipX, clipY, clipWidth, clipHeight);
                context.clip();
                context.reset();
            }

            this.children.each(function(child) {
                child[drawMethod](canvas, top);
            });

            if (hasClip) {
                context.restore();
            }
        },
        shouldDrawHit: function(canvas) {
            var layer = this.getLayer();
            var dd = Kinetic.DD;
            var layerUnderDrag = dd && Kinetic.isDragging() && (Kinetic.DD.anim.getLayers().indexOf(layer) !== -1);
            return  (canvas && canvas.isCache) || (layer && layer.hitGraphEnabled())
                && this.isVisible() && !layerUnderDrag;
        }
    });

    Kinetic.Util.extend(Kinetic.Container, Kinetic.Node);
    // deprecated methods
    Kinetic.Container.prototype.get = Kinetic.Container.prototype.find;

    // add getters setters
    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Container, 'clip', ['x', 'y', 'width', 'height']);
    /**
     * get/set clip
     * @method
     * @name clip
     * @memberof Kinetic.Container.prototype
     * @param {Object} clip
     * @param {Number} clip.x
     * @param {Number} clip.y
     * @param {Number} clip.width
     * @param {Number} clip.height
     * @returns {Object}
     * @example
     * // get clip
     * var clip = container.clip();
     *
     * // set clip
     * container.setClip({
     *   x: 20,
     *   y: 20,
     *   width: 20,
     *   height: 20
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipX');
    /**
     * get/set clip x
     * @name clipX
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get clip x
     * var clipX = container.clipX();
     *
     * // set clip x
     * container.clipX(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipY');
    /**
     * get/set clip y
     * @name clipY
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get clip y
     * var clipY = container.clipY();
     *
     * // set clip y
     * container.clipY(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipWidth');
    /**
     * get/set clip width
     * @name clipWidth
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get clip width
     * var clipWidth = container.clipWidth();
     *
     * // set clip width
     * container.clipWidth(100);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Container, 'clipHeight');
    /**
     * get/set clip height
     * @name clipHeight
     * @method
     * @memberof Kinetic.Container.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get clip height
     * var clipHeight = container.clipHeight();
     *
     * // set clip height
     * container.clipHeight(100);
     */

    Kinetic.Collection.mapMethods(Kinetic.Container);
})();
;(function() {
    var HAS_SHADOW = 'hasShadow';

    function _fillFunc(context) {
        context.fill();
    }
    function _strokeFunc(context) {
        context.stroke();
    }
    function _fillFuncHit(context) {
        context.fill();
    }
    function _strokeFuncHit(context) {
        context.stroke();
    }

    function _clearHasShadowCache() {
        this._clearCache(HAS_SHADOW);
    }

    Kinetic.Util.addMethods(Kinetic.Shape, {
        __init: function(config) {
            this.nodeType = 'Shape';
            this._fillFunc = _fillFunc;
            this._strokeFunc = _strokeFunc;
            this._fillFuncHit = _fillFuncHit;
            this._strokeFuncHit = _strokeFuncHit;

            // set colorKey
            var shapes = Kinetic.shapes;
            var key;

            while(true) {
                key = Kinetic.Util.getRandomColor();
                if(key && !( key in shapes)) {
                    break;
                }
            }

            this.colorKey = key;
            shapes[key] = this;

            // call super constructor
            Kinetic.Node.call(this, config);

            this.on('shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic', _clearHasShadowCache);
        },
        hasChildren: function() {
            return false;
        },
        getChildren: function() {
            return [];
        },
        /**
         * get canvas context tied to the layer
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Kinetic.Context}
         */
        getContext: function() {
            return this.getLayer().getContext();
        },
        /**
         * get canvas renderer tied to the layer.  Note that this returns a canvas renderer, not a canvas element
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Kinetic.Canvas}
         */
        getCanvas: function() {
            return this.getLayer().getCanvas();
        },
        /**
         * returns whether or not a shadow will be rendered
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */
        hasShadow: function() {
            return this._getCache(HAS_SHADOW, this._hasShadow);
        },
        _hasShadow: function() {
            return this.getShadowEnabled() && (this.getShadowOpacity() !== 0 && !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY()));
        },
        /**
         * returns whether or not the shape will be filled
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */
        hasFill: function() {
            return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops());
        },
        /**
         * returns whether or not the shape will be stroked
         * @method
         * @memberof Kinetic.Shape.prototype
         * @returns {Boolean}
         */
        hasStroke: function() {
            return !!(this.stroke() || this.strokeRed() || this.strokeGreen() || this.strokeBlue());
        },
        /**
         * determines if point is in the shape, regardless if other shapes are on top of it.  Note: because
         *  this method clears a temporary canvas and then redraws the shape, it performs very poorly if executed many times
         *  consecutively.  Please use the {@link Kinetic.Stage#getIntersection} method if at all possible
         *  because it performs much better
         * @method
         * @memberof Kinetic.Shape.prototype
         * @param {Object} point 
         * @param {Number} point.x
         * @param {Number} point.y
         * @returns {Boolean}
         */
        intersects: function(point) {
            var stage = this.getStage(),
                bufferHitCanvas = stage.bufferHitCanvas,
                p;

            bufferHitCanvas.getContext().clear();
            this.drawScene(bufferHitCanvas);
            p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
            return p[3] > 0;
        },
        // extends Node.prototype.destroy 
        destroy: function() {
            Kinetic.Node.prototype.destroy.call(this);
            delete Kinetic.shapes[this.colorKey];
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasFill() && this.hasStroke() && this.getStage();
        },
        drawScene: function(can, top) {
            var layer = this.getLayer(),
                canvas = can || layer.getCanvas(),
                context = canvas.getContext(),
                cachedCanvas = this._cache.canvas,
                drawFunc = this.sceneFunc(),
                hasShadow = this.hasShadow(),
                stage, bufferCanvas, bufferContext;

            if(this.isVisible()) {
                if (cachedCanvas) {
                    this._drawCachedSceneCanvas(context);
                }
                else if (drawFunc) {
                    context.save();
                    // if buffer canvas is needed
                    if (this._useBufferCanvas()) {
                        stage = this.getStage();
                        bufferCanvas = stage.bufferCanvas;
                        bufferContext = bufferCanvas.getContext();
                        bufferContext.clear();
                        bufferContext.save();
                        bufferContext._applyLineJoin(this);
                        // layer might be undefined if we are using cache before adding to layer
                        if (layer) {
                            layer._applyTransform(this, bufferContext, top);
                        } else {
                            var m = this.getAbsoluteTransform(top).getMatrix();
                            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                        }
                     
                        drawFunc.call(this, bufferContext);
                        bufferContext.restore();

                        if (hasShadow && !canvas.hitCanvas) {
                            context.save();
                            context._applyShadow(this);
                            context.drawImage(bufferCanvas._canvas, 0, 0);
                            context.restore();
                        }

                        context._applyOpacity(this);
                        context.drawImage(bufferCanvas._canvas, 0, 0);
                    }
                    // if buffer canvas is not needed
                    else {
                        context._applyLineJoin(this);
                        // layer might be undefined if we are using cache before adding to layer
                        if (layer) {
                            layer._applyTransform(this, context, top);
                        } else {
                            var o = this.getAbsoluteTransform(top).getMatrix();
                            context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                        }
               
                        if (hasShadow && !canvas.hitCanvas) {
                            context.save();
                            context._applyShadow(this);
                            drawFunc.call(this, context);
                            context.restore();
                        }

                        context._applyOpacity(this);
                        drawFunc.call(this, context);
                    }
                    context.restore();
                }
            }

            return this;
        },
        drawHit: function(can, top) {
            var layer = this.getLayer(),
                canvas = can || layer.hitCanvas,
                context = canvas.getContext(),
                drawFunc = this.hitFunc() || this.sceneFunc(),
                cachedCanvas = this._cache.canvas,
                cachedHitCanvas = cachedCanvas && cachedCanvas.hit;

            if(this.shouldDrawHit(canvas)) {
                if (layer) {
                    layer.clearHitCache();
                }
                if (cachedHitCanvas) {
                    this._drawCachedHitCanvas(context);
                }
                else if (drawFunc) {
                    context.save();
                    context._applyLineJoin(this);
                    if (layer) {
                        layer._applyTransform(this, context, top);
                    } else {
                        var m = this.getAbsoluteTransform(top).getMatrix();
                        context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                    }
                   
                    drawFunc.call(this, context);
                    context.restore();
                }
                
            }

            return this;
        },
        /**
        * draw hit graph using the cached scene canvas
        * @method
        * @memberof Kinetic.Shape.prototype
        * @param {Integer} alphaThreshold alpha channel threshold that determines whether or not
        *  a pixel should be drawn onto the hit graph.  Must be a value between 0 and 255.  
        *  The default is 0
        * @returns {Kinetic.Shape}
        * @example
        * shape.cache();
        * shape.drawHitFromCache();
        */
        drawHitFromCache: function(alphaThreshold) {
            var threshold = alphaThreshold || 0,
                cachedCanvas = this._cache.canvas,
                sceneCanvas = this._getCachedSceneCanvas(),
                sceneContext = sceneCanvas.getContext(),
                hitCanvas = cachedCanvas.hit,
                hitContext = hitCanvas.getContext(),
                width = sceneCanvas.getWidth(),
                height = sceneCanvas.getHeight(),
                sceneImageData, sceneData, hitImageData, hitData, len, rgbColorKey, i, alpha;

            hitContext.clear();

            try {
                sceneImageData = sceneContext.getImageData(0, 0, width, height);
                sceneData = sceneImageData.data;
                hitImageData = hitContext.getImageData(0, 0, width, height);
                hitData = hitImageData.data;
                len = sceneData.length;
                rgbColorKey = Kinetic.Util._hexToRgb(this.colorKey);

                // replace non transparent pixels with color key
                for(i = 0; i < len; i += 4) {
                    alpha = sceneData[i + 3];
                    if (alpha > threshold) {
                        hitData[i] = rgbColorKey.r;
                        hitData[i + 1] = rgbColorKey.g;
                        hitData[i + 2] = rgbColorKey.b;
                        hitData[i + 3] = 255;
                    }
                }

                hitContext.putImageData(hitImageData, 0, 0);
            }
            catch(e) {
                Kinetic.Util.warn('Unable to draw hit graph from cached scene canvas. ' + e.message);
            }

            return this;
        }
    });
    Kinetic.Util.extend(Kinetic.Shape, Kinetic.Node);

    // add getters and setters
    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'stroke');

    /**
     * get/set stroke color
     * @name stroke
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get stroke color
     * var stroke = shape.stroke();
     *
     * // set stroke color with color string
     * shape.stroke('green');
     *
     * // set stroke color with hex
     * shape.stroke('#00ff00');
     *
     * // set stroke color with rgb
     * shape.stroke('rgb(0,255,0)');
     *
     * // set stroke color with rgba and make it 50% opaque
     * shape.stroke('rgba(0,255,0,0.5');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeRed', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set stroke red component
     * @name strokeRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get stroke red component
     * var strokeRed = shape.strokeRed();
     *
     * // set stroke red component
     * shape.strokeRed(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeGreen', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set stroke green component
     * @name strokeGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get stroke green component
     * var strokeGreen = shape.strokeGreen();
     *
     * // set stroke green component
     * shape.strokeGreen(255);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeBlue', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set stroke blue component
     * @name strokeBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get stroke blue component
     * var strokeBlue = shape.strokeBlue();
     *
     * // set stroke blue component
     * shape.strokeBlue(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeAlpha', 1, Kinetic.Validators.alphaComponent);

    /**
     * get/set stroke alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name strokeAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get stroke alpha component
     * var strokeAlpha = shape.strokeAlpha();
     *
     * // set stroke alpha component
     * shape.strokeAlpha(0.5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeWidth', 2);

    /**
     * get/set stroke width
     * @name strokeWidth
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} strokeWidth
     * @returns {Number}
     * @example
     * // get stroke width
     * var strokeWidth = shape.strokeWidth();
     *
     * // set stroke width
     * shape.strokeWidth();
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'lineJoin');

    /**
     * get/set line join.  Can be miter, round, or bevel.  The
     *  default is miter
     * @name lineJoin
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} lineJoin
     * @returns {String}
     * @example
     * // get line join
     * var lineJoin = shape.lineJoin();
     *
     * // set line join
     * shape.lineJoin('round');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'lineCap');

    /**
     * get/set line cap.  Can be butt, round, or square
     * @name lineCap
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} lineCap
     * @returns {String}
     * @example
     * // get line cap
     * var lineCap = shape.lineCap();
     *
     * // set line cap
     * shape.lineCap('round');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'sceneFunc');

    /**
     * get/set scene draw function
     * @name sceneFunc
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Function} drawFunc drawing function
     * @returns {Function}
     * @example
     * // get scene draw function
     * var sceneFunc = shape.sceneFunc();
     *
     * // set scene draw function
     * shape.sceneFunc(function(context) {
     *   context.beginPath();
     *   context.rect(0, 0, this.width(), this.height());
     *   context.closePath();
     *   context.fillStrokeShape(this);
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'hitFunc');

    /**
     * get/set hit draw function
     * @name hitFunc
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Function} drawFunc drawing function
     * @returns {Function}
     * @example
     * // get hit draw function
     * var hitFunc = shape.hitFunc();
     *
     * // set hit draw function
     * shape.hitFunc(function(context) {
     *   context.beginPath();
     *   context.rect(0, 0, this.width(), this.height());
     *   context.closePath();
     *   context.fillStrokeShape(this);
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'dash');

    /**
     * get/set dash array for stroke.
     * @name dash
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Array} dash
     * @returns {Array}
     * @example
     *  // apply dashed stroke that is 10px long and 5 pixels apart
     *  line.dash([10, 5]);
     *  
     *  // apply dashed stroke that is made up of alternating dashed 
     *  // lines that are 10px long and 20px apart, and dots that have 
     *  // a radius of 5px and are 20px apart
     *  line.dash([10, 20, 0.001, 20]);
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowColor');

    /**
     * get/set shadow color
     * @name shadowColor
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get shadow color
     * var shadow = shape.shadowColor();
     *
     * // set shadow color with color string
     * shape.shadowColor('green');
     *
     * // set shadow color with hex
     * shape.shadowColor('#00ff00');
     *
     * // set shadow color with rgb
     * shape.shadowColor('rgb(0,255,0)');
     *
     * // set shadow color with rgba and make it 50% opaque
     * shape.shadowColor('rgba(0,255,0,0.5');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowRed', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set shadow red component
     * @name shadowRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get shadow red component
     * var shadowRed = shape.shadowRed();
     *
     * // set shadow red component
     * shape.shadowRed(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowGreen', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set shadow green component
     * @name shadowGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get shadow green component
     * var shadowGreen = shape.shadowGreen();
     *
     * // set shadow green component
     * shape.shadowGreen(255);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowBlue', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set shadow blue component
     * @name shadowBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get shadow blue component
     * var shadowBlue = shape.shadowBlue();
     *
     * // set shadow blue component
     * shape.shadowBlue(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowAlpha', 1, Kinetic.Validators.alphaComponent);

    /**
     * get/set shadow alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name shadowAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get shadow alpha component
     * var shadowAlpha = shape.shadowAlpha();
     *
     * // set shadow alpha component
     * shape.shadowAlpha(0.5);
     */
     
    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowBlur');

    /**
     * get/set shadow blur
     * @name shadowBlur
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} blur
     * @returns {Number}
     * @example
     * // get shadow blur
     * var shadowBlur = shape.shadowBlur();
     *
     * // set shadow blur
     * shape.shadowBlur(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowOpacity');

    /**
     * get/set shadow opacity.  must be a value between 0 and 1
     * @name shadowOpacity
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} opacity
     * @returns {Number}
     * @example
     * // get shadow opacity
     * var shadowOpacity = shape.shadowOpacity();
     *
     * // set shadow opacity
     * shape.shadowOpacity(0.5);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'shadowOffset', ['x', 'y']);

    /**
     * get/set shadow offset
     * @name shadowOffset
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get shadow offset
     * var shadowOffset = shape.shadowOffset();
     *
     * // set shadow offset
     * shape.shadowOffset({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowOffsetX', 0);

     /**
     * get/set shadow offset x
     * @name shadowOffsetX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get shadow offset x
     * var shadowOffsetX = shape.shadowOffsetX();
     *
     * // set shadow offset x
     * shape.shadowOffsetX(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowOffsetY', 0);

     /**
     * get/set shadow offset y
     * @name shadowOffsetY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get shadow offset y
     * var shadowOffsetY = shape.shadowOffsetY();
     *
     * // set shadow offset y
     * shape.shadowOffsetY(5);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternImage');

    /**
     * get/set fill pattern image
     * @name fillPatternImage
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Image} image object
     * @returns {Image}
     * @example
     * // get fill pattern image
     * var fillPatternImage = shape.fillPatternImage();
     *
     * // set fill pattern image
     * var imageObj = new Image();
     * imageObj.onload = function() {
     *   shape.fillPatternImage(imageObj);
     * };
     * imageObj.src = 'path/to/image/jpg';
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fill');

    /**
     * get/set fill color
     * @name fill
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} color
     * @returns {String}
     * @example
     * // get fill color
     * var fill = shape.fill();
     *
     * // set fill color with color string
     * shape.fill('green');
     *
     * // set fill color with hex
     * shape.fill('#00ff00');
     *
     * // set fill color with rgb
     * shape.fill('rgb(0,255,0)');
     *
     * // set fill color with rgba and make it 50% opaque
     * shape.fill('rgba(0,255,0,0.5');
     *
     * // shape without fill
     * shape.fill(null);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRed', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set fill red component
     * @name fillRed
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} red
     * @returns {Integer}
     * @example
     * // get fill red component
     * var fillRed = shape.fillRed();
     *
     * // set fill red component
     * shape.fillRed(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillGreen', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set fill green component
     * @name fillGreen
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} green
     * @returns {Integer}
     * @example
     * // get fill green component
     * var fillGreen = shape.fillGreen();
     *
     * // set fill green component
     * shape.fillGreen(255);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillBlue', 0, Kinetic.Validators.RGBComponent);

    /**
     * get/set fill blue component
     * @name fillBlue
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Integer} blue
     * @returns {Integer}
     * @example
     * // get fill blue component
     * var fillBlue = shape.fillBlue();
     *
     * // set fill blue component
     * shape.fillBlue(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillAlpha', 1, Kinetic.Validators.alphaComponent);

    /**
     * get/set fill alpha component.  Alpha is a real number between 0 and 1.  The default
     *  is 1.
     * @name fillAlpha
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} alpha
     * @returns {Number}
     * @example
     * // get fill alpha component
     * var fillAlpha = shape.fillAlpha();
     *
     * // set fill alpha component
     * shape.fillAlpha(0.5);
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternX', 0);

    /**
     * get/set fill pattern x
     * @name fillPatternX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern x
     * var fillPatternX = shape.fillPatternX();
     * 
     * // set fill pattern x
     * shape.fillPatternX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternY', 0);

    /**
     * get/set fill pattern y
     * @name fillPatternY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern y
     * var fillPatternY = shape.fillPatternY();
     * 
     * // set fill pattern y
     * shape.fillPatternY(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientColorStops');

    /**
     * get/set fill linear gradient color stops
     * @name fillLinearGradientColorStops
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Array} colorStops
     * @returns {Array} colorStops
     * @example
     * // get fill linear gradient color stops
     * var colorStops = shape.fillLinearGradientColorStops();
     *
     * // create a linear gradient that starts with red, changes to blue 
     * // halfway through, and then changes to green
     * shape.fillLinearGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientStartRadius', 0);

    /**
     * get/set fill radial gradient start radius
     * @name fillRadialGradientStartRadius
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radial gradient start radius
     * var startRadius = shape.fillRadialGradientStartRadius();
     *
     * // set radial gradient start radius
     * shape.fillRadialGradientStartRadius(0);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientEndRadius', 0);

    /**
     * get/set fill radial gradient end radius
     * @name fillRadialGradientEndRadius
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radial gradient end radius
     * var endRadius = shape.fillRadialGradientEndRadius();
     *
     * // set radial gradient end radius
     * shape.fillRadialGradientEndRadius(100);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientColorStops');

    /**
     * get/set fill radial gradient color stops
     * @name fillRadialGradientColorStops
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} colorStops
     * @returns {Array}
     * @example
     * // get fill radial gradient color stops
     * var colorStops = shape.fillRadialGradientColorStops();
     *
     * // create a radial gradient that starts with red, changes to blue 
     * // halfway through, and then changes to green
     * shape.fillRadialGradientColorStops(0, 'red', 0.5, 'blue', 1, 'green');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternRepeat', 'repeat');

    /**
     * get/set fill pattern repeat.  Can be 'repeat', 'repeat-x', 'repeat-y', or 'no-repeat'.  The default is 'repeat'
     * @name fillPatternRepeat
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} repeat
     * @returns {String}
     * @example
     * // get fill pattern repeat
     * var repeat = shape.fillPatternRepeat();
     *
     * // repeat pattern in x direction only
     * shape.fillPatternRepeat('repeat-x');
     *
     * // do not repeat the pattern
     * shape.fillPatternRepeat('no repeat');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillEnabled', true);

    /**
     * get/set fill enabled flag
     * @name fillEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get fill enabled flag
     * var fillEnabled = shape.fillEnabled();
     *
     * // disable fill
     * shape.fillEnabled(false);
     *
     * // enable fill
     * shape.fillEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeEnabled', true);

    /**
     * get/set stroke enabled flag
     * @name strokeEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get stroke enabled flag
     * var strokeEnabled = shape.strokeEnabled();
     *
     * // disable stroke
     * shape.strokeEnabled(false);
     *
     * // enable stroke
     * shape.strokeEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'shadowEnabled', true);

    /**
     * get/set shadow enabled flag
     * @name shadowEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get shadow enabled flag
     * var shadowEnabled = shape.shadowEnabled();
     *
     * // disable shadow
     * shape.shadowEnabled(false);
     *
     * // enable shadow
     * shape.shadowEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'dashEnabled', true);

    /**
     * get/set dash enabled flag
     * @name dashEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get dash enabled flag
     * var dashEnabled = shape.dashEnabled();
     *
     * // disable dash
     * shape.dashEnabled(false);
     *
     * // enable dash
     * shape.dashEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'strokeScaleEnabled', true);

    /**
     * get/set strokeScale enabled flag
     * @name strokeScaleEnabled
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get stroke scale enabled flag
     * var strokeScaleEnabled = shape.strokeScaleEnabled();
     *
     * // disable stroke scale
     * shape.strokeScaleEnabled(false);
     *
     * // enable stroke scale
     * shape.strokeScaleEnabled(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPriority', 'color');

    /**
     * get/set fill priority.  can be color, pattern, linear-gradient, or radial-gradient.  The default is color.
     *   This is handy if you want to toggle between different fill types.
     * @name fillPriority
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {String} priority
     * @returns {String}
     * @example
     * // get fill priority
     * var fillPriority = shape.fillPriority();
     *
     * // set fill priority
     * shape.fillPriority('linear-gradient');
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillPatternOffset', ['x', 'y']);

    /**
     * get/set fill pattern offset
     * @name fillPatternOffset
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} offset
     * @param {Number} offset.x
     * @param {Number} offset.y
     * @returns {Object}
     * @example
     * // get fill pattern offset
     * var patternOffset = shape.fillPatternOffset();
     *
     * // set fill pattern offset
     * shape.fillPatternOffset({
     *   x: 20
     *   y: 10
     * });
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternOffsetX', 0);
    /**
     * get/set fill pattern offset x
     * @name fillPatternOffsetX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern offset x
     * var patternOffsetX = shape.fillPatternOffsetX();
     *
     * // set fill pattern offset x
     * shape.fillPatternOffsetX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternOffsetY', 0);
    /**
     * get/set fill pattern offset y
     * @name fillPatternOffsetY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern offset y
     * var patternOffsetY = shape.fillPatternOffsetY();
     *
     * // set fill pattern offset y
     * shape.fillPatternOffsetY(10);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillPatternScale', ['x', 'y']);

    /**
     * get/set fill pattern scale
     * @name fillPatternScale
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} scale
     * @param {Number} scale.x
     * @param {Number} scale.y
     * @returns {Object}
     * @example
     * // get fill pattern scale
     * var patternScale = shape.fillPatternScale();
     *
     * // set fill pattern scale
     * shape.fillPatternScale({
     *   x: 2
     *   y: 2
     * });
     */


    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternScaleX', 1);
    /**
     * get/set fill pattern scale x
     * @name fillPatternScaleX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill pattern scale x
     * var patternScaleX = shape.fillPatternScaleX();
     *
     * // set fill pattern scale x
     * shape.fillPatternScaleX(2);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternScaleY', 1);
    /**
     * get/set fill pattern scale y
     * @name fillPatternScaleY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill pattern scale y
     * var patternScaleY = shape.fillPatternScaleY();
     *
     * // set fill pattern scale y
     * shape.fillPatternScaleY(2);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillLinearGradientStartPoint', ['x', 'y']);

    /**
     * get/set fill linear gradient start point
     * @name fillLinearGradientStartPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} startPoint
     * @param {Number} startPoint.x
     * @param {Number} startPoint.y
     * @returns {Object}
     * @example
     * // get fill linear gradient start point
     * var startPoint = shape.fillLinearGradientStartPoint();
     *
     * // set fill linear gradient start point
     * shape.fillLinearGradientStartPoint({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientStartPointX', 0);
    /**
     * get/set fill linear gradient start point x
     * @name fillLinearGradientStartPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill linear gradient start point x
     * var startPointX = shape.fillLinearGradientStartPointX();
     *
     * // set fill linear gradient start point x
     * shape.fillLinearGradientStartPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientStartPointY', 0);
    /**
     * get/set fill linear gradient start point y
     * @name fillLinearGradientStartPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill linear gradient start point y
     * var startPointY = shape.fillLinearGradientStartPointY();
     *
     * // set fill linear gradient start point y
     * shape.fillLinearGradientStartPointY(20);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillLinearGradientEndPoint', ['x', 'y']);

    /**
     * get/set fill linear gradient end point
     * @name fillLinearGradientEndPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} endPoint
     * @param {Number} endPoint.x
     * @param {Number} endPoint.y
     * @returns {Object}
     * @example
     * // get fill linear gradient end point
     * var endPoint = shape.fillLinearGradientEndPoint();
     *
     * // set fill linear gradient end point
     * shape.fillLinearGradientEndPoint({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientEndPointX', 0);
    /**
     * get/set fill linear gradient end point x
     * @name fillLinearGradientEndPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill linear gradient end point x
     * var endPointX = shape.fillLinearGradientEndPointX();
     *
     * // set fill linear gradient end point x
     * shape.fillLinearGradientEndPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillLinearGradientEndPointY', 0);
    /**
     * get/set fill linear gradient end point y
     * @name fillLinearGradientEndPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill linear gradient end point y
     * var endPointY = shape.fillLinearGradientEndPointY();
     *
     * // set fill linear gradient end point y
     * shape.fillLinearGradientEndPointY(20);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillRadialGradientStartPoint', ['x', 'y']);

    /**
     * get/set fill radial gradient start point
     * @name fillRadialGradientStartPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} startPoint
     * @param {Number} startPoint.x
     * @param {Number} startPoint.y
     * @returns {Object}
     * @example
     * // get fill radial gradient start point
     * var startPoint = shape.fillRadialGradientStartPoint();
     *
     * // set fill radial gradient start point
     * shape.fillRadialGradientStartPoint({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientStartPointX', 0);
    /**
     * get/set fill radial gradient start point x
     * @name fillRadialGradientStartPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill radial gradient start point x
     * var startPointX = shape.fillRadialGradientStartPointX();
     *
     * // set fill radial gradient start point x
     * shape.fillRadialGradientStartPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientStartPointY', 0);
    /**
     * get/set fill radial gradient start point y
     * @name fillRadialGradientStartPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill radial gradient start point y
     * var startPointY = shape.fillRadialGradientStartPointY();
     *
     * // set fill radial gradient start point y
     * shape.fillRadialGradientStartPointY(20);
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Shape, 'fillRadialGradientEndPoint', ['x', 'y']);

    /**
     * get/set fill radial gradient end point
     * @name fillRadialGradientEndPoint
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Object} endPoint
     * @param {Number} endPoint.x
     * @param {Number} endPoint.y
     * @returns {Object}
     * @example
     * // get fill radial gradient end point
     * var endPoint = shape.fillRadialGradientEndPoint();
     *
     * // set fill radial gradient end point
     * shape.fillRadialGradientEndPoint({
     *   x: 20
     *   y: 10
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientEndPointX', 0);
    /**
     * get/set fill radial gradient end point x
     * @name fillRadialGradientEndPointX
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get fill radial gradient end point x
     * var endPointX = shape.fillRadialGradientEndPointX();
     *
     * // set fill radial gradient end point x
     * shape.fillRadialGradientEndPointX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillRadialGradientEndPointY', 0);
    /**
     * get/set fill radial gradient end point y
     * @name fillRadialGradientEndPointY
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get fill radial gradient end point y
     * var endPointY = shape.fillRadialGradientEndPointY();
     *
     * // set fill radial gradient end point y
     * shape.fillRadialGradientEndPointY(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Shape, 'fillPatternRotation', 0);

    /**
     * get/set fill pattern rotation in degrees
     * @name fillPatternRotation
     * @method
     * @memberof Kinetic.Shape.prototype
     * @param {Number} rotation
     * @returns {Kinetic.Shape}
     * @example
     * // get fill pattern rotation
     * var patternRotation = shape.fillPatternRotation();
     *
     * // set fill pattern rotation
     * shape.fillPatternRotation(20);
     */


    Kinetic.Factory.backCompat(Kinetic.Shape, {
        dashArray: 'dash',
        getDashArray: 'getDash',
        setDashArray: 'getDash',

        drawFunc: 'sceneFunc',
        getDrawFunc: 'getSceneFunc',
        setDrawFunc: 'setSceneFunc',

        drawHitFunc: 'hitFunc',
        getDrawHitFunc: 'getHitFunc',
        setDrawHitFunc: 'setHitFunc'
    });

    Kinetic.Collection.mapMethods(Kinetic.Shape);
})();
;/*jshint unused:false */
(function() {
    // CONSTANTS
    var STAGE = 'Stage',
        STRING = 'string',
        PX = 'px',

        MOUSEOUT = 'mouseout',
        MOUSELEAVE = 'mouseleave',
        MOUSEOVER = 'mouseover',
        MOUSEENTER = 'mouseenter',
        MOUSEMOVE = 'mousemove',
        MOUSEDOWN = 'mousedown',
        MOUSEUP = 'mouseup',
        CLICK = 'click',
        DBL_CLICK = 'dblclick',
        TOUCHSTART = 'touchstart',
        TOUCHEND = 'touchend',
        TAP = 'tap',
        DBL_TAP = 'dbltap',
        TOUCHMOVE = 'touchmove',
        DOMMOUSESCROLL = 'DOMMouseScroll',
        MOUSEWHEEL = 'mousewheel',
        WHEEL = 'wheel',

        CONTENT_MOUSEOUT = 'contentMouseout',
        CONTENT_MOUSEOVER = 'contentMouseover',
        CONTENT_MOUSEMOVE = 'contentMousemove',
        CONTENT_MOUSEDOWN = 'contentMousedown',
        CONTENT_MOUSEUP = 'contentMouseup',
        CONTENT_CLICK = 'contentClick',
        CONTENT_DBL_CLICK = 'contentDblclick',
        CONTENT_TOUCHSTART = 'contentTouchstart',
        CONTENT_TOUCHEND = 'contentTouchend',
        CONTENT_DBL_TAP = 'contentDbltap',
        CONTENT_TOUCHMOVE = 'contentTouchmove',

        DIV = 'div',
        RELATIVE = 'relative',
        INLINE_BLOCK = 'inline-block',
        KINETICJS_CONTENT = 'kineticjs-content',
        SPACE = ' ',
        UNDERSCORE = '_',
        CONTAINER = 'container',
        EMPTY_STRING = '',
        EVENTS = [MOUSEDOWN, MOUSEMOVE, MOUSEUP, MOUSEOUT, TOUCHSTART, TOUCHMOVE, TOUCHEND, MOUSEOVER, DOMMOUSESCROLL, MOUSEWHEEL, WHEEL],

        // cached variables
        eventsLength = EVENTS.length;

    function addEvent(ctx, eventName) {
        ctx.content.addEventListener(eventName, function(evt) {
            ctx[UNDERSCORE + eventName](evt);
        }, false);
    }

    Kinetic.Util.addMethods(Kinetic.Stage, {
        ___init: function(config) {
            this.nodeType = STAGE;
            // call super constructor
            Kinetic.Container.call(this, config);
            this._id = Kinetic.idCounter++;
            this._buildDOM();
            this._bindContentEvents();
            this._enableNestedTransforms = false;
            Kinetic.stages.push(this);
        },
        _validateAdd: function(child) {
            if (child.getType() !== 'Layer') {
                Kinetic.Util.error('You may only add layers to the stage.');
            }
        },
        /**
         * set container dom element which contains the stage wrapper div element
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {DomElement} container can pass in a dom element or id string
         */
        setContainer: function(container) {
            if( typeof container === STRING) {
                var id = container;
                container = Kinetic.document.getElementById(container);
                if (!container) {
                    throw 'Can not find container in document with id ' + id;
                }
            }
            this._setAttr(CONTAINER, container);
            return this;
        },
        shouldDrawHit: function() {
            return true;
        },
        draw: function() {
            Kinetic.Node.prototype.draw.call(this);
            return this;
        },
        /**
         * draw layer scene graphs
         * @name draw
         * @method
         * @memberof Kinetic.Stage.prototype
         */

        /**
         * draw layer hit graphs
         * @name drawHit
         * @method
         * @memberof Kinetic.Stage.prototype
         */

        /**
         * set height
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Number} height
         */
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            this._resizeDOM();
            return this;
        },
        /**
         * set width
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Number} width
         */
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            this._resizeDOM();
            return this;
        },
        /**
         * clear all layers
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        clear: function() {
            var layers = this.children,
                len = layers.length,
                n;

            for(n = 0; n < len; n++) {
                layers[n].clear();
            }
            return this;
        },
        clone: function(obj) {
            if (!obj) {
                obj = {};
            }
            obj.container = Kinetic.document.createElement(DIV);
            
            return Kinetic.Container.prototype.clone.call(this, obj);
        },
        /**
         * destroy stage
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        destroy: function() {
            var content = this.content;
            Kinetic.Container.prototype.destroy.call(this);

            if(content && Kinetic.Util._isInDocument(content)) {
                this.getContainer().removeChild(content);
            }
            var index = Kinetic.stages.indexOf(this);
            if (index > -1) {
                Kinetic.stages.splice(index, 1);
            }
        },
        /**
         * get pointer position which can be a touch position or mouse position
         * @method
         * @memberof Kinetic.Stage.prototype
         * @returns {Object}
         */
        getPointerPosition: function() {
            return this.pointerPos;
        },
        getStage: function() {
            return this;
        },
        /**
         * get stage content div element which has the
         *  the class name "kineticjs-content"
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        getContent: function() {
            return this.content;
        },
        /**
         * Creates a composite data URL and requires a callback because the composite is generated asynchronously.
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         */
        toDataURL: function(config) {
            config = config || {};

            var mimeType = config.mimeType || null,
                quality = config.quality || null,
                x = config.x || 0,
                y = config.y || 0,
                canvas = new Kinetic.SceneCanvas({
                    width: config.width || this.getWidth(),
                    height: config.height || this.getHeight(),
                    pixelRatio: 1
                }),
                _context = canvas.getContext()._context,
                layers = this.children;

            if(x || y) {
                _context.translate(-1 * x, -1 * y);
            }

            function drawLayer(n) {
                var layer = layers[n],
                    layerUrl = layer.toDataURL(),
                    imageObj = new Kinetic.window.Image();

                imageObj.onload = function() {
                    _context.drawImage(imageObj, 0, 0);

                    if(n < layers.length - 1) {
                        drawLayer(n + 1);
                    }
                    else {
                        config.callback(canvas.toDataURL(mimeType, quality));
                    }
                };
                imageObj.src = layerUrl;
            }
            drawLayer(0);
        },
        /**
         * converts stage into an image.
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} config
         * @param {Function} config.callback function executed when the composite has completed
         * @param {String} [config.mimeType] can be "image/png" or "image/jpeg".
         *  "image/png" is the default
         * @param {Number} [config.x] x position of canvas section
         * @param {Number} [config.y] y position of canvas section
         * @param {Number} [config.width] width of canvas section
         * @param {Number} [config.height] height of canvas section
         * @param {Number} [config.quality] jpeg quality.  If using an "image/jpeg" mimeType,
         *  you can specify the quality from 0 to 1, where 0 is very poor quality and 1
         *  is very high quality
         */
        toImage: function(config) {
            var cb = config.callback;

            config.callback = function(dataUrl) {
                Kinetic.Util._getImage(dataUrl, function(img) {
                    cb(img);
                });
            };
            this.toDataURL(config);
        },
        /**
         * get visible intersection shape. This is the preferred
         *  method for determining if a point intersects a shape or not
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Shape}
         */
        getIntersection: function(pos) {
            var layers = this.getChildren(),
                len = layers.length,
                end = len - 1,
                n, shape;

            for(n = end; n >= 0; n--) {
                shape = layers[n].getIntersection(pos);
                if (shape) {
                    return shape;
                }
            }

            return null;
        },
        _resizeDOM: function() {
            if(this.content) {
                var width = this.getWidth(),
                    height = this.getHeight(),
                    layers = this.getChildren(),
                    len = layers.length,
                    n, layer;

                // set content dimensions
                this.content.style.width = width + PX;
                this.content.style.height = height + PX;

                this.bufferCanvas.setSize(width, height);
                this.bufferHitCanvas.setSize(width, height);

                // set layer dimensions
                for(n = 0; n < len; n++) {
                    layer = layers[n];
                    layer.setSize(width, height);
                    layer.draw();
                }
            }
        },
        /**
         * add layer or layers to stage
         * @method
         * @memberof Kinetic.Stage.prototype
         * @param {...Kinetic.Layer} layer
         * @example
         * stage.add(layer1, layer2, layer3);
         */
        add: function(layer) {
            if (arguments.length > 1) {
                for (var i = 0; i < arguments.length; i++) {
                    this.add(arguments[i]);
                }
                return;
            }
            Kinetic.Container.prototype.add.call(this, layer);
            layer._setCanvasSize(this.width(), this.height());

            // draw layer and append canvas to container
            layer.draw();
            this.content.appendChild(layer.canvas._canvas);

            // chainable
            return this;
        },
        getParent: function() {
            return null;
        },
        getLayer: function() {
            return null;
        },
        /**
         * returns a {@link Kinetic.Collection} of layers
         * @method
         * @memberof Kinetic.Stage.prototype
         */
        getLayers: function() {
            return this.getChildren();
        },
        _bindContentEvents: function() {
            for (var n = 0; n < eventsLength; n++) {
                addEvent(this, EVENTS[n]);
            }
        },
        _mouseover: function(evt) {
            if (!Kinetic.UA.mobile) {
                this._setPointerPosition(evt);
                this._fire(CONTENT_MOUSEOVER, {evt: evt});
            }
        },
        _mouseout: function(evt) {
            if (!Kinetic.UA.mobile) {
                this._setPointerPosition(evt);
                var targetShape = this.targetShape;

                if(targetShape && !Kinetic.isDragging()) {
                    targetShape._fireAndBubble(MOUSEOUT, {evt: evt});
                    targetShape._fireAndBubble(MOUSELEAVE, {evt: evt});
                    this.targetShape = null;
                }
                this.pointerPos = undefined;

                this._fire(CONTENT_MOUSEOUT, {evt: evt});
            }
        },
        _mousemove: function(evt) {
        
            // workaround for mobile IE to force touch event when unhandled pointer event elevates into a mouse event
            if (Kinetic.UA.ieMobile) {
                return this._touchmove(evt);
            }
            
            // workaround fake mousemove event in chrome browser https://code.google.com/p/chromium/issues/detail?id=161464
            if ((typeof evt.webkitMovementX !== 'undefined' || typeof evt.webkitMovementY !== 'undefined') && evt.webkitMovementY === 0 && evt.webkitMovementX === 0) {
                return;
            }
            if (Kinetic.UA.mobile) {
                return;
            }
            this._setPointerPosition(evt);
            var dd = Kinetic.DD, shape;

            if (!Kinetic.isDragging()) {
                shape = this.getIntersection(this.getPointerPosition());
                if(shape && shape.isListening()) {
                    if(!Kinetic.isDragging() && (!this.targetShape || this.targetShape._id !== shape._id)) {
                        if(this.targetShape) {
                            this.targetShape._fireAndBubble(MOUSEOUT, {evt: evt}, shape);
                            this.targetShape._fireAndBubble(MOUSELEAVE, {evt: evt}, shape);
                        }
                        shape._fireAndBubble(MOUSEOVER, {evt: evt}, this.targetShape);
                        shape._fireAndBubble(MOUSEENTER, {evt: evt}, this.targetShape);
                        this.targetShape = shape;
                    }
                    else {
                        shape._fireAndBubble(MOUSEMOVE, {evt: evt});
                    }
                }
                /*
                 * if no shape was detected, clear target shape and try
                 * to run mouseout from previous target shape
                 */
                else {
                    if(this.targetShape && !Kinetic.isDragging()) {
                        this.targetShape._fireAndBubble(MOUSEOUT, {evt: evt});
                        this.targetShape._fireAndBubble(MOUSELEAVE, {evt: evt});
                        this.targetShape = null;
                    }

                }

                // content event
                this._fire(CONTENT_MOUSEMOVE, {evt: evt});
            }
            if(dd) {
                dd._drag(evt);
            }

            // always call preventDefault for desktop events because some browsers
            // try to drag and drop the canvas element
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        },
        _mousedown: function(evt) {
        
            // workaround for mobile IE to force touch event when unhandled pointer event elevates into a mouse event       
            if (Kinetic.UA.ieMobile) {
                return this._touchstart(evt);
            }
            
            if (!Kinetic.UA.mobile) {
                this._setPointerPosition(evt);
                var shape = this.getIntersection(this.getPointerPosition());

                Kinetic.listenClickTap = true;

                if (shape && shape.isListening()) {
                    this.clickStartShape = shape;
                    shape._fireAndBubble(MOUSEDOWN, {evt: evt});
                }

                // content event
                this._fire(CONTENT_MOUSEDOWN, {evt: evt});
            }

            // always call preventDefault for desktop events because some browsers
            // try to drag and drop the canvas element
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        },
        _mouseup: function(evt) {
        
            // workaround for mobile IE to force touch event when unhandled pointer event elevates into a mouse event       
            if (Kinetic.UA.ieMobile) {
                return this._touchend(evt);
            }
            if (!Kinetic.UA.mobile) {
                this._setPointerPosition(evt);
                var shape = this.getIntersection(this.getPointerPosition()),
                    clickStartShape = this.clickStartShape,
                    fireDblClick = false,
                    dd = Kinetic.DD;

                if(Kinetic.inDblClickWindow) {
                    fireDblClick = true;
                    Kinetic.inDblClickWindow = false;
                }
                // don't set inDblClickWindow after dragging
                else if (!dd || !dd.justDragged) {
                    Kinetic.inDblClickWindow = true;
                } else if (dd) {
                    dd.justDragged = false;
                }

                setTimeout(function() {
                    Kinetic.inDblClickWindow = false;
                }, Kinetic.dblClickWindow);

                if (shape && shape.isListening()) {
                    shape._fireAndBubble(MOUSEUP, {evt: evt});

                    // detect if click or double click occurred
                    if(Kinetic.listenClickTap && clickStartShape && clickStartShape._id === shape._id) {
                        shape._fireAndBubble(CLICK, {evt: evt});

                        if(fireDblClick) {
                            shape._fireAndBubble(DBL_CLICK, {evt: evt});
                        }
                    }
                }
                // content events
                this._fire(CONTENT_MOUSEUP, {evt: evt});
                if (Kinetic.listenClickTap) {
                    this._fire(CONTENT_CLICK, {evt: evt});
                    if(fireDblClick) {
                        this._fire(CONTENT_DBL_CLICK, {evt: evt});
                    }
                }

                Kinetic.listenClickTap = false;
            }

            // always call preventDefault for desktop events because some browsers
            // try to drag and drop the canvas element
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        },
        _touchstart: function(evt) {
            this._setPointerPosition(evt);
            var shape = this.getIntersection(this.getPointerPosition());

            Kinetic.listenClickTap = true;

            if (shape && shape.isListening()) {
                this.tapStartShape = shape;
                shape._fireAndBubble(TOUCHSTART, {evt: evt});

                // only call preventDefault if the shape is listening for events
                if (shape.isListening() && evt.preventDefault) {
                    evt.preventDefault();
                }
            }
            // content event
            this._fire(CONTENT_TOUCHSTART, {evt: evt});
        },
        _touchend: function(evt) {
            this._setPointerPosition(evt);
            var shape = this.getIntersection(this.getPointerPosition()),
                fireDblClick = false;

            if(Kinetic.inDblClickWindow) {
                fireDblClick = true;
                Kinetic.inDblClickWindow = false;
            }
            else {
                Kinetic.inDblClickWindow = true;
            }

            setTimeout(function() {
                Kinetic.inDblClickWindow = false;
            }, Kinetic.dblClickWindow);

            if (shape && shape.isListening()) {
                shape._fireAndBubble(TOUCHEND, {evt: evt});

                // detect if tap or double tap occurred
                if(Kinetic.listenClickTap && shape._id === this.tapStartShape._id) {
                    shape._fireAndBubble(TAP, {evt: evt});

                    if(fireDblClick) {
                        shape._fireAndBubble(DBL_TAP, {evt: evt});
                    }
                }
                // only call preventDefault if the shape is listening for events
                if (shape.isListening() && evt.preventDefault) {
                    evt.preventDefault();
                }
            }
            // content events
            if (Kinetic.listenClickTap) {
                this._fire(CONTENT_TOUCHEND, {evt: evt});
                if(fireDblClick) {
                    this._fire(CONTENT_DBL_TAP, {evt: evt});
                }
            }

            Kinetic.listenClickTap = false;
        },
        _touchmove: function(evt) {
            this._setPointerPosition(evt);
            var dd = Kinetic.DD,
                shape;
            if (!Kinetic.isDragging()) {
                shape = this.getIntersection(this.getPointerPosition());
                if (shape && shape.isListening()) {
                    shape._fireAndBubble(TOUCHMOVE, {evt: evt});
                    // only call preventDefault if the shape is listening for events
                    if (shape.isListening() && evt.preventDefault) {
                        evt.preventDefault();
                    }
                }
                this._fire(CONTENT_TOUCHMOVE, {evt: evt});
            }
            if(dd) {
                dd._drag(evt);
                if (Kinetic.isDragging()) {
                    evt.preventDefault();
                }
            }
        },
        _DOMMouseScroll: function(evt) {
            this._mousewheel(evt);
        },
        _mousewheel: function(evt) {
            this._setPointerPosition(evt);
            var shape = this.getIntersection(this.getPointerPosition());

            if (shape && shape.isListening()) {
                shape._fireAndBubble(MOUSEWHEEL, {evt: evt});
            }
        },
        _wheel: function(evt) {
            this._mousewheel(evt);
        },
        _setPointerPosition: function(evt) {
            var contentPosition = this._getContentPosition(),
                offsetX = evt.offsetX,
                clientX = evt.clientX,
                x = null,
                y = null,
                touch;
            evt = evt ? evt : window.event;

            // touch events
            if(evt.touches !== undefined) {
                // currently, only handle one finger
                if (evt.touches.length > 0) {

                    touch = evt.touches[0];

                    // get the information for finger #1
                    x = touch.clientX - contentPosition.left;
                    y = touch.clientY - contentPosition.top;
                }
            }
            // mouse events
            else {
                // if offsetX is defined, assume that offsetY is defined as well
                if (offsetX !== undefined) {
                    x = offsetX;
                    y = evt.offsetY;
                }
                // we unfortunately have to use UA detection here because accessing
                // the layerX or layerY properties in newer versions of Chrome
                // throws a JS warning.  layerX and layerY are required for FF
                // when the container is transformed via CSS.
                else if (Kinetic.UA.browser === 'mozilla') {
                    x = evt.layerX;
                    y = evt.layerY;
                }
                // if clientX is defined, assume that clientY is defined as well
                else if (clientX !== undefined && contentPosition) {
                    x = clientX - contentPosition.left;
                    y = evt.clientY - contentPosition.top;
                }
            }

            if (x !== null && y !== null) {
                this.pointerPos = {
                    x: x,
                    y: y
                };
            }
        },
        _getContentPosition: function() {
            var rect = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : { top: 0, left: 0 };
            return {
                top: rect.top,
                left: rect.left
            };
        },
        _buildDOM: function() {
            var container = this.getContainer();
            if (!container) {
                if (Kinetic.Util.isBrowser()) {
                    throw 'Stage has no container. A container is required.';
                } else {
                    // automatically create element for jsdom in nodejs env
                    container = Kinetic.document.createElement(DIV);
                }
            }
            // clear content inside container
            container.innerHTML = EMPTY_STRING;

            // content
            this.content = Kinetic.document.createElement(DIV);
            this.content.style.position = RELATIVE;
            this.content.style.display = INLINE_BLOCK;
            this.content.className = KINETICJS_CONTENT;
            this.content.setAttribute('role', 'presentation');
            container.appendChild(this.content);

            // the buffer canvas pixel ratio must be 1 because it is used as an 
            // intermediate canvas before copying the result onto a scene canvas.
            // not setting it to 1 will result in an over compensation
            this.bufferCanvas = new Kinetic.SceneCanvas({
                pixelRatio: 1
            });
            this.bufferHitCanvas = new Kinetic.HitCanvas();

            this._resizeDOM();
        },
        _onContent: function(typesStr, handler) {
            var types = typesStr.split(SPACE),
                len = types.length,
                n, baseEvent;

            for(n = 0; n < len; n++) {
                baseEvent = types[n];
                this.content.addEventListener(baseEvent, handler, false);
            }
        },
        // currently cache function is now working for stage, because stage has no its own canvas element
        // TODO: may be it is better to cache all children layers?
        cache: function() {
            Kinetic.Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');
        },
        clearCache : function() {
        }
    });
    Kinetic.Util.extend(Kinetic.Stage, Kinetic.Container);

    // add getters and setters
    Kinetic.Factory.addGetter(Kinetic.Stage, 'container');
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Stage, 'container');

    /**
     * get container DOM element
     * @name container
     * @method
     * @memberof Kinetic.Stage.prototype
     * @returns {DomElement} container
     * @example
     * // get container
     * var container = stage.container();
     * 
     * // set container
     * var container = document.createElement('div');
     * body.appendChild(container);
     * stage.container(container);
     */

})();
;(function() {
    Kinetic.Util.addMethods(Kinetic.BaseLayer, {
        ___init: function(config) {
            this.nodeType = 'Layer';
            Kinetic.Container.call(this, config);
        },
        createPNGStream : function() {
            return this.canvas._canvas.createPNGStream();
        },
        /**
         * get layer canvas
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         */
        getCanvas: function() {
            return this.canvas;
        },
        /**
         * get layer hit canvas
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         */
        getHitCanvas: function() {
            return this.hitCanvas;
        },
        /**
         * get layer canvas context
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         */
        getContext: function() {
            return this.getCanvas().getContext();
        },
        /**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();
         * layer.clear({
         *   x : 0,
         *   y : 0,
         *   width : 100,
         *   height : 100
         * });
         */
        clear: function(bounds) {
            this.getContext().clear(bounds);
            this.getHitCanvas().getContext().clear(bounds);
            return this;
        },
        clearHitCache: function() {
            this._hitImageData = undefined;
        },
        // extend Node.prototype.setZIndex
        setZIndex: function(index) {
            Kinetic.Node.prototype.setZIndex.call(this, index);
            var stage = this.getStage();
            if(stage) {
                stage.content.removeChild(this.getCanvas()._canvas);

                if(index < stage.getChildren().length - 1) {
                    stage.content.insertBefore(this.getCanvas()._canvas, stage.getChildren()[index + 1].getCanvas()._canvas);
                }
                else {
                    stage.content.appendChild(this.getCanvas()._canvas);
                }
            }
            return this;
        },
        // extend Node.prototype.moveToTop
        moveToTop: function() {
            Kinetic.Node.prototype.moveToTop.call(this);
            var stage = this.getStage();
            if(stage) {
                stage.content.removeChild(this.getCanvas()._canvas);
                stage.content.appendChild(this.getCanvas()._canvas);
            }
        },
        // extend Node.prototype.moveUp
        moveUp: function() {
            if(Kinetic.Node.prototype.moveUp.call(this)) {
                var stage = this.getStage();
                if(stage) {
                    stage.content.removeChild(this.getCanvas()._canvas);

                    if(this.index < stage.getChildren().length - 1) {
                        stage.content.insertBefore(this.getCanvas()._canvas, stage.getChildren()[this.index + 1].getCanvas()._canvas);
                    }
                    else {
                        stage.content.appendChild(this.getCanvas()._canvas);
                    }
                }
            }
        },
        // extend Node.prototype.moveDown
        moveDown: function() {
            if(Kinetic.Node.prototype.moveDown.call(this)) {
                var stage = this.getStage();
                if(stage) {
                    var children = stage.getChildren();
                    stage.content.removeChild(this.getCanvas()._canvas);
                    stage.content.insertBefore(this.getCanvas()._canvas, children[this.index + 1].getCanvas()._canvas);
                }
            }
        },
        // extend Node.prototype.moveToBottom
        moveToBottom: function() {
            if(Kinetic.Node.prototype.moveToBottom.call(this)) {
                var stage = this.getStage();
                if(stage) {
                    var children = stage.getChildren();
                    stage.content.removeChild(this.getCanvas()._canvas);
                    stage.content.insertBefore(this.getCanvas()._canvas, children[1].getCanvas()._canvas);
                }
            }
        },
        getLayer: function() {
            return this;
        },
        remove: function() {
            var _canvas = this.getCanvas()._canvas;

            Kinetic.Node.prototype.remove.call(this);

            if(_canvas && _canvas.parentNode && Kinetic.Util._isInDocument(_canvas)) {
                _canvas.parentNode.removeChild(_canvas);
            }
            return this;
        },
        getStage: function() {
            return this.parent;
        },
        setSize : function(width, height) {
            this.canvas.setSize(width, height);
        },
        /**
         * get/set width of layer.getter return width of stage. setter doing nothing.
         * if you want change width use `stage.width(value);`
         * @name width
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         * @returns {Number}
         * @example
         * var width = layer.width();
         */
        getWidth : function() {
            if (this.parent) {
                return this.parent.getWidth();
            }
        },
        setWidth : function() {
            Kinetic.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
        },
        /**
         * get/set height of layer.getter return height of stage. setter doing nothing.
         * if you want change height use `stage.height(value);`
         * @name height
         * @method
         * @memberof Kinetic.BaseLayer.prototype
         * @returns {Number}
         * @example
         * var height = layer.height();
         */
        getHeight : function() {
            if (this.parent) {
                return this.parent.getHeight();
            }
        },
        setHeight : function() {
            Kinetic.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
        }
    });
    Kinetic.Util.extend(Kinetic.BaseLayer, Kinetic.Container);

    // add getters and setters
    Kinetic.Factory.addGetterSetter(Kinetic.BaseLayer, 'clearBeforeDraw', true);
    /**
     * get/set clearBeforeDraw flag which determines if the layer is cleared or not
     *  before drawing
     * @name clearBeforeDraw
     * @method
     * @memberof Kinetic.BaseLayer.prototype
     * @param {Boolean} clearBeforeDraw
     * @returns {Boolean}
     * @example
     * // get clearBeforeDraw flag
     * var clearBeforeDraw = layer.clearBeforeDraw();
     *
     * // disable clear before draw
     * layer.clearBeforeDraw(false);
     *
     * // enable clear before draw
     * layer.clearBeforeDraw(true);
     */

    Kinetic.Collection.mapMethods(Kinetic.BaseLayer);
})();
;(function() {
    // constants
    var HASH = '#',
        BEFORE_DRAW ='beforeDraw',
        DRAW = 'draw',

        /*
         * 2 - 3 - 4
         * |       |
         * 1 - 0   5
         *         |
         * 8 - 7 - 6     
         */
        INTERSECTION_OFFSETS = [
            {x:  0, y:  0}, // 0
            {x: -1, y:  0}, // 1
            {x: -1, y: -1}, // 2
            {x:  0, y: -1}, // 3
            {x:  1, y: -1}, // 4
            {x:  1, y:  0}, // 5
            {x:  1, y:  1}, // 6
            {x:  0, y:  1}, // 7
            {x: -1, y:  1}  // 8
        ],
        INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;


    Kinetic.Util.addMethods(Kinetic.Layer, {
        ____init: function(config) {
            this.nodeType = 'Layer';
            this.canvas = new Kinetic.SceneCanvas();
            this.hitCanvas = new Kinetic.HitCanvas();
            // call super constructor
            Kinetic.BaseLayer.call(this, config);
        },
        _setCanvasSize: function(width, height) {
            this.canvas.setSize(width, height);
            this.hitCanvas.setSize(width, height);
        },
        _validateAdd: function(child) {
            var type = child.getType();
            if (type !== 'Group' && type !== 'Shape') {
                Kinetic.Util.error('You may only add groups and shapes to a layer.');
            }
        },
        /**
         * get visible intersection shape. This is the preferred
         * method for determining if a point intersects a shape or not
         * @method
         * @memberof Kinetic.Layer.prototype
         * @param {Object} pos
         * @param {Number} pos.x
         * @param {Number} pos.y
         * @returns {Kinetic.Shape}
         */
        getIntersection: function(pos) {
            var obj, i, intersectionOffset, shape;

            if(this.hitGraphEnabled() && this.isVisible()) {
                // in some cases antialiased area may be bigger than 1px
                // it is possible if we will cache node, then scale it a lot
                // TODO: check { 0; 0 } point before loop, and remove it from INTERSECTION_OFFSETS.
                var spiralSearchDistance = 1;
                var continueSearch = false;
                while (true) {
                    for (i=0; i<INTERSECTION_OFFSETS_LEN; i++) {
                        intersectionOffset = INTERSECTION_OFFSETS[i];
                        obj = this._getIntersection({
                            x: pos.x + intersectionOffset.x * spiralSearchDistance,
                            y: pos.y + intersectionOffset.y * spiralSearchDistance
                        });
                        shape = obj.shape;
                        if (shape) {
                            return shape;
                        }
                        // we should continue search if we found antialiased pixel
                        // that means our node somewhere very close
                        else if (obj.antialiased) {
                            continueSearch = true;
                        }
                    }
                    // if no shape, and no antialiased pixel, we should end searching 
                    if (continueSearch) {
                        spiralSearchDistance += 1;
                    } else {
                        return;
                    }
                }
            } else {
                return null;
            }
        },
        _getImageData: function(x, y) {
            var width = this.hitCanvas.width || 1,
                height = this.hitCanvas.height || 1,
                index = (Math.round(y) * width ) + Math.round(x);

            if (!this._hitImageData) {
                this._hitImageData = this.hitCanvas.context.getImageData(0, 0, width, height);
            }

            return [
                this._hitImageData.data[4 * index + 0] , // Red
                this._hitImageData.data[4 * index + 1], // Green
                this._hitImageData.data[4 * index + 2], // Blue
                this._hitImageData.data[4 * index + 3] // Alpha
            ];
        },
        _getIntersection: function(pos) {
            var p = this.hitCanvas.context.getImageData(pos.x, pos.y, 1, 1).data,
                p3 = p[3],
                colorKey, shape;

            // fully opaque pixel
            if(p3 === 255) {
                colorKey = Kinetic.Util._rgbToHex(p[0], p[1], p[2]);
                shape = Kinetic.shapes[HASH + colorKey];
                return {
                    shape: shape
                };
            }
            // antialiased pixel
            else if(p3 > 0) {
                return {
                    antialiased: true
                };
            }
            // empty pixel
            else {
                return {};
            }
        },
        drawScene: function(can, top) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.getCanvas());

            this._fire(BEFORE_DRAW, {
                node: this
            });

            if(this.getClearBeforeDraw()) {
                canvas.getContext().clear();
            }
            
            Kinetic.Container.prototype.drawScene.call(this, canvas, top);

            this._fire(DRAW, {
                node: this
            });

            return this;
        },
        // the apply transform method is handled by the Layer and FastLayer class
        // because it is up to the layer to decide if an absolute or relative transform
        // should be used
        _applyTransform: function(shape, context, top) {
            var m = shape.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        },
        drawHit: function(can, top) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.hitCanvas);

            if(layer && layer.getClearBeforeDraw()) {
                layer.getHitCanvas().getContext().clear();
            }

            Kinetic.Container.prototype.drawHit.call(this, canvas, top);
            this.imageData = null; // Clear imageData cache
            return this;
        },
        /**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.Layer.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();
         * layer.clear({
         *   x : 0,
         *   y : 0,
         *   width : 100,
         *   height : 100
         * });
         */
        clear: function(bounds) {
            this.getContext().clear(bounds);
            this.getHitCanvas().getContext().clear(bounds);
            this.imageData = null; // Clear getImageData cache
            return this;
        },
        // extend Node.prototype.setVisible
        setVisible: function(visible) {
            Kinetic.Node.prototype.setVisible.call(this, visible);
            if(visible) {
                this.getCanvas()._canvas.style.display = 'block';
                this.hitCanvas._canvas.style.display = 'block';
            }
            else {
                this.getCanvas()._canvas.style.display = 'none';
                this.hitCanvas._canvas.style.display = 'none';
            }
            return this;
        },
        /**
         * enable hit graph
         * @name enableHitGraph
         * @method
         * @memberof Kinetic.Layer.prototype
         * @returns {Layer}
         */
        enableHitGraph: function() {
            this.setHitGraphEnabled(true);
            return this;
        },
        /**
         * disable hit graph
         * @name disableHitGraph
         * @method
         * @memberof Kinetic.Layer.prototype
         * @returns {Layer}
         */
        disableHitGraph: function() {
            this.setHitGraphEnabled(false);
            return this;
        },
        setSize : function(width, height) {
            Kinetic.BaseLayer.prototype.setSize.call(this, width, height);
            this.hitCanvas.setSize(width, height);
        }
    });
    Kinetic.Util.extend(Kinetic.Layer, Kinetic.BaseLayer);

    Kinetic.Factory.addGetterSetter(Kinetic.Layer, 'hitGraphEnabled', true);
    /**
     * get/set hitGraphEnabled flag.  Disabling the hit graph will greatly increase
     *  draw performance because the hit graph will not be redrawn each time the layer is
     *  drawn.  This, however, also disables mouse/touch event detection
     * @name hitGraphEnabled
     * @method
     * @memberof Kinetic.Layer.prototype
     * @param {Boolean} enabled
     * @returns {Boolean}
     * @example
     * // get hitGraphEnabled flag
     * var hitGraphEnabled = layer.hitGraphEnabled();
     *
     * // disable hit graph
     * layer.hitGraphEnabled(false);
     *
     * // enable hit graph
     * layer.hitGraphEnabled(true);
     */
    Kinetic.Collection.mapMethods(Kinetic.Layer);
})();
;(function() {

    Kinetic.Util.addMethods(Kinetic.FastLayer, {
        ____init: function(config) {
            this.nodeType = 'Layer';
            this.canvas = new Kinetic.SceneCanvas();
            // call super constructor
            Kinetic.BaseLayer.call(this, config);
        },
        _validateAdd: function(child) {
            var type = child.getType();
            if (type !== 'Shape') {
                Kinetic.Util.error('You may only add shapes to a fast layer.');
            }
        },
        _setCanvasSize: function(width, height) {
            this.canvas.setSize(width, height);
        },
        hitGraphEnabled: function() {
            return false;
        },
        getIntersection: function() {
            return null;
        },
        drawScene: function(can) {
            var layer = this.getLayer(),
                canvas = can || (layer && layer.getCanvas());

            if(this.getClearBeforeDraw()) {
                canvas.getContext().clear();
            }
            
            Kinetic.Container.prototype.drawScene.call(this, canvas);

            return this;
        },
        // the apply transform method is handled by the Layer and FastLayer class
        // because it is up to the layer to decide if an absolute or relative transform
        // should be used
        _applyTransform: function(shape, context, top) {
            if (!top || top._id !== this._id) {
                var m = shape.getTransform().getMatrix();
                context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            }
        },
        draw: function() {
            this.drawScene();
            return this;
        },
        /**
         * clear scene and hit canvas contexts tied to the layer
         * @method
         * @memberof Kinetic.FastLayer.prototype
         * @param {Object} [bounds]
         * @param {Number} [bounds.x]
         * @param {Number} [bounds.y]
         * @param {Number} [bounds.width]
         * @param {Number} [bounds.height]
         * @example
         * layer.clear();
         * layer.clear({
         *   x : 0,
         *   y : 0,
         *   width : 100,
         *   height : 100
         * });
         */
        clear: function(bounds) {
            this.getContext().clear(bounds);
            return this;
        },
        // extend Node.prototype.setVisible
        setVisible: function(visible) {
            Kinetic.Node.prototype.setVisible.call(this, visible);
            if(visible) {
                this.getCanvas()._canvas.style.display = 'block';
            }
            else {
                this.getCanvas()._canvas.style.display = 'none';
            }
            return this;
        }
    });
    Kinetic.Util.extend(Kinetic.FastLayer, Kinetic.BaseLayer);

    Kinetic.Collection.mapMethods(Kinetic.FastLayer);
})();
;(function() {
    Kinetic.Util.addMethods(Kinetic.Group, {
        ___init: function(config) {
            this.nodeType = 'Group';
            // call super constructor
            Kinetic.Container.call(this, config);
        },
        _validateAdd: function(child) {
            var type = child.getType();
            if (type !== 'Group' && type !== 'Shape') {
                Kinetic.Util.error('You may only add groups and shapes to groups.');
            }
        }
    });
    Kinetic.Util.extend(Kinetic.Group, Kinetic.Container);

    Kinetic.Collection.mapMethods(Kinetic.Group);
})();
;(function() {
    /**
     * Rect constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} [config.cornerRadius]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var rect = new Kinetic.Rect({
     *   width: 100,
     *   height: 50,
     *   fill: 'red',
     *   stroke: 'black',
     *   strokeWidth: 5
     * });
     */
    Kinetic.Rect = function(config) {
        this.___init(config);
    };

    Kinetic.Rect.prototype = {
        ___init: function(config) {
            Kinetic.Shape.call(this, config);
            this.className = 'Rect';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var cornerRadius = this.getCornerRadius(),
                width = this.getWidth(),
                height = this.getHeight();

            
            context.beginPath();

            if(!cornerRadius) {
                // simple rect - don't bother doing all that complicated maths stuff.
                context.rect(0, 0, width, height);
            }
            else {
                // arcTo would be nicer, but browser support is patchy (Opera)
                context.moveTo(cornerRadius, 0);
                context.lineTo(width - cornerRadius, 0);
                context.arc(width - cornerRadius, cornerRadius, cornerRadius, Math.PI * 3 / 2, 0, false);
                context.lineTo(width, height - cornerRadius);
                context.arc(width - cornerRadius, height - cornerRadius, cornerRadius, 0, Math.PI / 2, false);
                context.lineTo(cornerRadius, height);
                context.arc(cornerRadius, height - cornerRadius, cornerRadius, Math.PI / 2, Math.PI, false);
                context.lineTo(0, cornerRadius);
                context.arc(cornerRadius, cornerRadius, cornerRadius, Math.PI, Math.PI * 3 / 2, false);
            }
            context.closePath();
            context.fillStrokeShape(this);
        }
    };

    Kinetic.Util.extend(Kinetic.Rect, Kinetic.Shape);

    Kinetic.Factory.addGetterSetter(Kinetic.Rect, 'cornerRadius', 0);
    /**
     * get/set corner radius
     * @name cornerRadius
     * @method
     * @memberof Kinetic.Rect.prototype
     * @param {Number} cornerRadius
     * @returns {Number}
     * @example
     * // get corner radius
     * var cornerRadius = rect.cornerRadius();
     * 
     * // set corner radius
     * rect.cornerRadius(10);
     */

    Kinetic.Collection.mapMethods(Kinetic.Rect);
})();
;(function() {
    // the 0.0001 offset fixes a bug in Chrome 27
    var PIx2 = (Math.PI * 2) - 0.0001,
        CIRCLE = 'Circle';

    /**
     * Circle constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.radius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // create circle
     * var circle = new Kinetic.Circle({
     *   radius: 40,
     *   fill: 'red',
     *   stroke: 'black'
     *   strokeWidth: 5
     * });
     */
    Kinetic.Circle = function(config) {
        this.___init(config);
    };

    Kinetic.Circle.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = CIRCLE;
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.beginPath();
            context.arc(0, 0, this.getRadius(), 0, PIx2, false);
            context.closePath();
            context.fillStrokeShape(this);
        },
        // implements Shape.prototype.getWidth()
        getWidth: function() {
            return this.getRadius() * 2;
        },
        // implements Shape.prototype.getHeight()
        getHeight: function() {
            return this.getRadius() * 2;
        },
        // implements Shape.prototype.setWidth()
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            if (this.radius() !== width / 2) {
                this.setRadius(width / 2);
            }
        },
        // implements Shape.prototype.setHeight()
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            if (this.radius() !== height / 2) {
                this.setRadius(height / 2);
            }
        },
        setRadius : function(val) {
            this._setAttr('radius', val);
            this.setWidth(val * 2);
            this.setHeight(val * 2);
        }
    };
    Kinetic.Util.extend(Kinetic.Circle, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetter(Kinetic.Circle, 'radius', 0);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Circle, 'radius');

    /**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Circle.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radius
     * var radius = circle.radius();
     *
     * // set radius
     * circle.radius(10);
     */

    Kinetic.Collection.mapMethods(Kinetic.Circle);
})();
;(function() {
    // the 0.0001 offset fixes a bug in Chrome 27
    var PIx2 = (Math.PI * 2) - 0.0001,
        ELLIPSE = 'Ellipse';

    /**
     * Ellipse constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Object} config.radius defines x and y radius
     * @@ShapeParams
     * @@NodeParams
     * @example
     * var ellipse = new Kinetic.Ellipse({
     *   radius : {
     *     x : 50,
     *     y : 50
     *   },
     *   fill: 'red'
     * });
     */
    Kinetic.Ellipse = function(config) {
        this.___init(config);
    };

    Kinetic.Ellipse.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = ELLIPSE;
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var rx = this.getRadiusX(),
                ry = this.getRadiusY();

            context.beginPath();
            context.save();
            if(rx !== ry) {
                context.scale(1, ry / rx);
            }
            context.arc(0, 0, rx, 0, PIx2, false);
            context.restore();
            context.closePath();
            context.fillStrokeShape(this);
        },
        // implements Shape.prototype.getWidth()
        getWidth: function() {
            return this.getRadiusX() * 2;
        },
        // implements Shape.prototype.getHeight()
        getHeight: function() {
            return this.getRadiusY() * 2;
        },
        // implements Shape.prototype.setWidth()
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            this.setRadius({
                x: width / 2
            });
        },
        // implements Shape.prototype.setHeight()
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            this.setRadius({
                y: height / 2
            });
        }
    };
    Kinetic.Util.extend(Kinetic.Ellipse, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Ellipse, 'radius', ['x', 'y']);

    /**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Object} radius
     * @param {Number} radius.x
     * @param {Number} radius.y
     * @returns {Object}
     * @example
     * // get radius
     * var radius = ellipse.radius();
     * 
     * // set radius
     * ellipse.radius({
     *   x: 200,
     *   y: 100
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, 'radiusX', 0);
    /**
     * get/set radius x
     * @name radiusX
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get radius x
     * var radiusX = ellipse.radiusX();
     * 
     * // set radius x
     * ellipse.radiusX(200);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Ellipse, 'radiusY', 0);
    /**
     * get/set radius y
     * @name radiusY
     * @method
     * @memberof Kinetic.Ellipse.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get radius y
     * var radiusY = ellipse.radiusY();
     * 
     * // set radius y
     * ellipse.radiusY(200);
     */

    Kinetic.Collection.mapMethods(Kinetic.Ellipse);

})();;(function() {
    // the 0.0001 offset fixes a bug in Chrome 27
    var PIx2 = (Math.PI * 2) - 0.0001;
    
    /**
     * Ring constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var ring = new Kinetic.Ring({
     *   innerRadius: 40,
     *   outerRadius: 80,
     *   fill: 'red',
     *   stroke: 'black',
     *   strokeWidth: 5
     * });
     */
    Kinetic.Ring = function(config) {
        this.___init(config);
    };

    Kinetic.Ring.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Ring';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.beginPath();
            context.arc(0, 0, this.getInnerRadius(), 0, PIx2, false);
            context.moveTo(this.getOuterRadius(), 0);
            context.arc(0, 0, this.getOuterRadius(), PIx2, 0, true);
            context.closePath();
            context.fillStrokeShape(this);
        },
        // implements Shape.prototype.getWidth()
        getWidth: function() {
            return this.getOuterRadius() * 2;
        },
        // implements Shape.prototype.getHeight()
        getHeight: function() {
            return this.getOuterRadius() * 2;
        },
        // implements Shape.prototype.setWidth()
        setWidth: function(width) {
            Kinetic.Node.prototype.setWidth.call(this, width);
            if (this.outerRadius() !== width / 2) {
                this.setOuterRadius(width / 2);
            }
        },
        // implements Shape.prototype.setHeight()
        setHeight: function(height) {
            Kinetic.Node.prototype.setHeight.call(this, height);
            if (this.outerRadius() !== height / 2) {
                this.setOuterRadius(height / 2);
            }
        },
        setOuterRadius : function(val) {
            this._setAttr('outerRadius', val);
            this.setWidth(val * 2);
            this.setHeight(val * 2);
        }
    };
    Kinetic.Util.extend(Kinetic.Ring, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Ring, 'innerRadius', 0);

    /**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Ring.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius
     * var innerRadius = ring.innerRadius();
     *
     * // set inner radius
     * ring.innerRadius(20);
     */
     
    Kinetic.Factory.addGetter(Kinetic.Ring, 'outerRadius', 0);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Ring, 'outerRadius');

    /**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Ring.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius
     * var outerRadius = ring.outerRadius();
     *
     * // set outer radius
     * ring.outerRadius(20);
     */

    Kinetic.Collection.mapMethods(Kinetic.Ring);
})();
;(function() {
    /**
     * Wedge constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle in degrees
     * @param {Number} config.radius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // draw a wedge that's pointing downwards
     * var wedge = new Kinetic.Wedge({
     *   radius: 40,
     *   fill: 'red',
     *   stroke: 'black'
     *   strokeWidth: 5,
     *   angleDeg: 60,
     *   rotationDeg: -120
     * });
     */
    Kinetic.Wedge = function(config) {
        this.___init(config);
    };

    Kinetic.Wedge.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Wedge';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.beginPath();
            context.arc(0, 0, this.getRadius(), 0, Kinetic.getAngle(this.getAngle()), this.getClockwise());
            context.lineTo(0, 0);
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Wedge, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Wedge, 'radius', 0);

    /**
     * get/set radius
     * @name radius
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} radius
     * @returns {Number}
     * @example
     * // get radius
     * var radius = wedge.radius();
     *
     * // set radius
     * wedge.radius(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Wedge, 'angle', 0);

    /**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle
     * var angle = wedge.angle();
     *
     * // set angle
     * wedge.angle(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Wedge, 'clockwise', false);

    /**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Wedge.prototype
     * @param {Number} clockwise
     * @returns {Number}
     * @example
     * // get clockwise flag
     * var clockwise = wedge.clockwise();
     *
     * // draw wedge counter-clockwise
     * wedge.clockwise(false);
     *
     * // draw wedge clockwise
     * wedge.clockwise(true);
     */

    Kinetic.Factory.backCompat(Kinetic.Wedge, {
        angleDeg: 'angle',
        getAngleDeg: 'getAngle',
        setAngleDeg: 'setAngle'
    });

    Kinetic.Collection.mapMethods(Kinetic.Wedge);
})();
;(function() {
    /**
     * Arc constructor
     * @constructor
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.angle in degrees
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {Boolean} [config.clockwise]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // draw a Arc that's pointing downwards
     * var arc = new Kinetic.Arc({
     *   innerRadius: 40,
     *   outerRadius: 80,
     *   fill: 'red',
     *   stroke: 'black'
     *   strokeWidth: 5,
     *   angle: 60,
     *   rotationDeg: -120
     * });
     */
    Kinetic.Arc = function(config) {
        this.___init(config);
    };

    Kinetic.Arc.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Arc';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var angle = Kinetic.getAngle(this.angle()),
                clockwise = this.clockwise();

            context.beginPath();
            context.arc(0, 0, this.getOuterRadius(), 0, angle, clockwise);
            context.arc(0, 0, this.getInnerRadius(), angle, 0, !clockwise);
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Arc, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'innerRadius', 0);

    /**
     * get/set innerRadius
     * @name innerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} innerRadius
     * @returns {Number}
     * @example
     * // get inner radius
     * var innerRadius = arc.innerRadius();
     *
     * // set inner radius
     * arc.innerRadius(20);
     */
     
    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'outerRadius', 0);

    /**
     * get/set outerRadius
     * @name outerRadius
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} outerRadius
     * @returns {Number}
     * @example
     * // get outer radius
     * var outerRadius = arc.outerRadius();
     *
     * // set outer radius
     * arc.outerRadius(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'angle', 0);

    /**
     * get/set angle in degrees
     * @name angle
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Number} angle
     * @returns {Number}
     * @example
     * // get angle
     * var angle = arc.angle();
     *
     * // set angle
     * arc.angle(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arc, 'clockwise', false);

    /**
     * get/set clockwise flag
     * @name clockwise
     * @method
     * @memberof Kinetic.Arc.prototype
     * @param {Boolean} clockwise
     * @returns {Boolean}
     * @example
     * // get clockwise flag
     * var clockwise = arc.clockwise();
     *
     * // draw arc counter-clockwise
     * arc.clockwise(false);
     *
     * // draw arc clockwise
     * arc.clockwise(true);
     */

    Kinetic.Collection.mapMethods(Kinetic.Arc);
})();
;(function() {

    // CONSTANTS
    var IMAGE = 'Image';

    /**
     * Image constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Image} config.image
     * @param {Object} [config.crop]
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var imageObj = new Image();
     * imageObj.onload = function() {
     *   var image = new Kinetic.Image({
     *     x: 200,
     *     y: 50,
     *     image: imageObj,
     *     width: 100,
     *     height: 100
     *   });
     * };
     * imageObj.src = '/path/to/image.jpg'
     */
    Kinetic.Image = function(config) {
        this.___init(config);
    };

    Kinetic.Image.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = IMAGE;
            this.sceneFunc(this._sceneFunc);
            this.hitFunc(this._hitFunc);
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasStroke() && this.getStage();
        },
        _sceneFunc: function(context) {
            var width = this.getWidth(),
                height = this.getHeight(),
                image = this.getImage(),
                cropWidth, cropHeight, params;

            if (image) {
                cropWidth = this.getCropWidth();
                cropHeight = this.getCropHeight();
                if (cropWidth && cropHeight) {
                    params = [image, this.getCropX(), this.getCropY(), cropWidth, cropHeight, 0, 0, width, height];
                } else {
                    params = [image, 0, 0, width, height];
                }
            }

            if (this.hasFill() || this.hasStroke() || this.hasShadow()) {
                context.beginPath();
                context.rect(0, 0, width, height);
                context.closePath();
                context.fillStrokeShape(this);
            }

            if (image) {
                context.drawImage.apply(context, params);
            }
        },
        _hitFunc: function(context) {
            var width = this.getWidth(),
                height = this.getHeight();

            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        },
        getWidth: function() {
            var image = this.getImage();
            return this.attrs.width || (image ? image.width : 0);
        },
        getHeight: function() {
            var image = this.getImage();
            return this.attrs.height || (image ? image.height : 0);
        }
    };
    Kinetic.Util.extend(Kinetic.Image, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'image');

    /**
     * set image
     * @name setImage
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Image} image
     */

    /**
     * get image
     * @name getImage
     * @method
     * @memberof Kinetic.Image.prototype
     * @returns {Image}
     */

    Kinetic.Factory.addComponentsGetterSetter(Kinetic.Image, 'crop', ['x', 'y', 'width', 'height']);
    /**
     * get/set crop
     * @method
     * @name crop
     * @memberof Kinetic.Image.prototype
     * @param {Object} crop 
     * @param {Number} crop.x
     * @param {Number} crop.y
     * @param {Number} crop.width
     * @param {Number} crop.height
     * @returns {Object}
     * @example
     * // get crop
     * var crop = image.crop();
     *
     * // set crop
     * image.crop({
     *   x: 20,
     *   y: 20,
     *   width: 20,
     *   height: 20
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropX', 0);
    /**
     * get/set crop x
     * @method
     * @name cropX
     * @memberof Kinetic.Image.prototype
     * @param {Number} x
     * @returns {Number}
     * @example
     * // get crop x
     * var cropX = image.cropX();
     *
     * // set crop x
     * image.cropX(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropY', 0);
    /**
     * get/set crop y
     * @name cropY
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} y
     * @returns {Number}
     * @example
     * // get crop y
     * var cropY = image.cropY();
     *
     * // set crop y
     * image.cropY(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropWidth', 0);
    /**
     * get/set crop width
     * @name cropWidth
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} width
     * @returns {Number}
     * @example
     * // get crop width
     * var cropWidth = image.cropWidth();
     *
     * // set crop width
     * image.cropWidth(20);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Image, 'cropHeight', 0);
    /**
     * get/set crop height
     * @name cropHeight
     * @method
     * @memberof Kinetic.Image.prototype
     * @param {Number} height
     * @returns {Number}
     * @example
     * // get crop height
     * var cropHeight = image.cropHeight();
     *
     * // set crop height
     * image.cropHeight(20);
     */

    Kinetic.Collection.mapMethods(Kinetic.Image);
})();
;(function() {
    // constants
    var AUTO = 'auto',
        //CANVAS = 'canvas',
        CENTER = 'center',
        CHANGE_KINETIC = 'Change.kinetic',
        CONTEXT_2D = '2d',
        DASH = '-',
        EMPTY_STRING = '',
        LEFT = 'left',
        TEXT = 'text',
        TEXT_UPPER = 'Text',
        MIDDLE = 'middle',
        NORMAL = 'normal',
        PX_SPACE = 'px ',
        SPACE = ' ',
        RIGHT = 'right',
        WORD = 'word',
        CHAR = 'char',
        NONE = 'none',
        ATTR_CHANGE_LIST = ['fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'padding', 'align', 'lineHeight', 'text', 'width', 'height', 'wrap'],

        // cached variables
        attrChangeListLen = ATTR_CHANGE_LIST.length,
        dummyContext = Kinetic.Util.createCanvasElement().getContext(CONTEXT_2D);

    /**
     * Text constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} [config.fontFamily] default is Arial
     * @param {Number} [config.fontSize] in pixels.  Default is 12
     * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
     * @param {String} [config.fontVariant] can be normal or small-caps.  Default is normal
     * @param {String} config.text
     * @param {String} [config.align] can be left, center, or right
     * @param {Number} [config.padding]
     * @param {Number} [config.width] default is auto
     * @param {Number} [config.height] default is auto
     * @param {Number} [config.lineHeight] default is 1
     * @param {String} [config.wrap] can be word, char, or none. Default is word
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var text = new Kinetic.Text({
     *   x: 10,
     *   y: 15,
     *   text: 'Simple Text',
     *   fontSize: 30,
     *   fontFamily: 'Calibri',
     *   fill: 'green'
     * });
     */
    Kinetic.Text = function(config) {
        this.___init(config);
    };
    function _fillFunc(context) {
        context.fillText(this.partialText, 0, 0);
    }
    function _strokeFunc(context) {
        context.strokeText(this.partialText, 0, 0);
    }

    Kinetic.Text.prototype = {
        ___init: function(config) {
            config = config || {};
            config.fill = config.fill || 'black';

            if (config.width === undefined) {
                config.width = AUTO;
            }
            if (config.height === undefined) {
                config.height = AUTO;
            }

            // call super constructor
            Kinetic.Shape.call(this, config);

            this._fillFunc = _fillFunc;
            this._strokeFunc = _strokeFunc;
            this.className = TEXT_UPPER;

            // update text data for certain attr changes
            for(var n = 0; n < attrChangeListLen; n++) {
                this.on(ATTR_CHANGE_LIST[n] + CHANGE_KINETIC, this._setTextData);
            }

            this._setTextData();
            this.sceneFunc(this._sceneFunc);
            this.hitFunc(this._hitFunc);
        },
        _sceneFunc: function(context) {
            var p = this.getPadding(),
                textHeight = this.getTextHeight(),
                lineHeightPx = this.getLineHeight() * textHeight,
                textArr = this.textArr,
                textArrLen = textArr.length,
                totalWidth = this.getWidth(),
                n;

            context.setAttr('font', this._getContextFont());
            context.setAttr('textBaseline', MIDDLE);
            context.setAttr('textAlign', LEFT);
            context.save();
            context.translate(p, 0);
            context.translate(0, p + textHeight / 2);

            // draw text lines
            for(n = 0; n < textArrLen; n++) {
                var obj = textArr[n],
                    text = obj.text,
                    width = obj.width;

                // horizontal alignment
                context.save();
                if(this.getAlign() === RIGHT) {
                    context.translate(totalWidth - width - p * 2, 0);
                }
                else if(this.getAlign() === CENTER) {
                    context.translate((totalWidth - width - p * 2) / 2, 0);
                }

                this.partialText = text;
                context.fillStrokeShape(this);
                context.restore();
                context.translate(0, lineHeightPx);
            }
            context.restore();
        },
        _hitFunc: function(context) {
            var width = this.getWidth(),
                height = this.getHeight();

            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        },
        setText: function(text) {
            var str = Kinetic.Util._isString(text) ? text : text.toString();
            this._setAttr(TEXT, str);
            return this;
        },
        /**
         * get width of text area, which includes padding
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getWidth: function() {
            return this.attrs.width === AUTO ? this.getTextWidth() + this.getPadding() * 2 : this.attrs.width;
        },
        /**
         * get the height of the text area, which takes into account multi-line text, line heights, and padding
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getHeight: function() {
            return this.attrs.height === AUTO ? (this.getTextHeight() * this.textArr.length * this.getLineHeight()) + this.getPadding() * 2 : this.attrs.height;
        },
        /**
         * get text width
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getTextWidth: function() {
            return this.textWidth;
        },
        /**
         * get text height
         * @method
         * @memberof Kinetic.Text.prototype
         * @returns {Number}
         */
        getTextHeight: function() {
            return this.textHeight;
        },
        _getTextSize: function(text) {
            var _context = dummyContext,
                fontSize = this.getFontSize(),
                metrics;

            _context.save();
            _context.font = this._getContextFont();

            metrics = _context.measureText(text);
            _context.restore();
            return {
                width: metrics.width,
                height: parseInt(fontSize, 10)
            };
        },
        _getContextFont: function() {
            return this.getFontStyle() + SPACE + this.getFontVariant() + SPACE + this.getFontSize() + PX_SPACE + this.getFontFamily();
        },
        _addTextLine: function (line, width) {
            return this.textArr.push({text: line, width: width});
        },
        _getTextWidth: function (text) {
            return dummyContext.measureText(text).width;
        },
        _setTextData: function () {
            var lines = this.getText().split('\n'),
                fontSize = +this.getFontSize(),
                textWidth = 0,
                lineHeightPx = this.getLineHeight() * fontSize,
                width = this.attrs.width,
                height = this.attrs.height,
                fixedWidth = width !== AUTO,
                fixedHeight = height !== AUTO,
                padding = this.getPadding(),
                maxWidth = width - padding * 2,
                maxHeightPx = height - padding * 2,
                currentHeightPx = 0,
                wrap = this.getWrap(),
                shouldWrap = wrap !== NONE,
                wrapAtWord = wrap !==  CHAR && shouldWrap;

            this.textArr = [];
            dummyContext.save();
            dummyContext.font = this._getContextFont();
            for (var i = 0, max = lines.length; i < max; ++i) {
                var line = lines[i],
                    lineWidth = this._getTextWidth(line);
                if (fixedWidth && lineWidth > maxWidth) {
                    /*
                     * if width is fixed and line does not fit entirely
                     * break the line into multiple fitting lines
                     */
                    while (line.length > 0) {
                        /*
                         * use binary search to find the longest substring that
                         * that would fit in the specified width
                         */
                        var low = 0, high = line.length,
                            match = '', matchWidth = 0;
                        while (low < high) {
                            var mid = (low + high) >>> 1,
                                substr = line.slice(0, mid + 1),
                                substrWidth = this._getTextWidth(substr);
                            if (substrWidth <= maxWidth) {
                                low = mid + 1;
                                match = substr;
                                matchWidth = substrWidth;
                            } else {
                                high = mid;
                            }
                        }
                        /*
                         * 'low' is now the index of the substring end
                         * 'match' is the substring
                         * 'matchWidth' is the substring width in px
                         */
                        if (match) {
                            // a fitting substring was found
                            if (wrapAtWord) {
                                // try to find a space or dash where wrapping could be done
                                var wrapIndex = Math.max(match.lastIndexOf(SPACE),
                                                          match.lastIndexOf(DASH)) + 1;
                                if (wrapIndex > 0) {
                                    // re-cut the substring found at the space/dash position
                                    low = wrapIndex;
                                    match = match.slice(0, low);
                                    matchWidth = this._getTextWidth(match);
                                }
                            }
                            this._addTextLine(match, matchWidth);
                            textWidth = Math.max(textWidth, matchWidth);
                            currentHeightPx += lineHeightPx;
                            if (!shouldWrap ||
                                (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx)) {
                                /*
                                 * stop wrapping if wrapping is disabled or if adding
                                 * one more line would overflow the fixed height
                                 */
                                break;
                            }
                            line = line.slice(low);
                            if (line.length > 0) {
                                // Check if the remaining text would fit on one line
                                lineWidth = this._getTextWidth(line);
                                if (lineWidth <= maxWidth) {
                                    // if it does, add the line and break out of the loop
                                    this._addTextLine(line, lineWidth);
                                    currentHeightPx += lineHeightPx;
                                    textWidth = Math.max(textWidth, lineWidth);
                                    break;
                                }
                            }
                        } else {
                            // not even one character could fit in the element, abort
                            break;
                        }
                    }
                } else {
                    // element width is automatically adjusted to max line width
                    this._addTextLine(line, lineWidth);
                    currentHeightPx += lineHeightPx;
                    textWidth = Math.max(textWidth, lineWidth);
                }
                // if element height is fixed, abort if adding one more line would overflow
                if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
                    break;
                }
            }
            dummyContext.restore();
            this.textHeight = fontSize;
            this.textWidth = textWidth;
        }
    };
    Kinetic.Util.extend(Kinetic.Text, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontFamily', 'Arial');

    /**
     * get/set font family
     * @name fontFamily
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontFamily
     * @returns {String}
     * @example
     * // get font family
     * var fontFamily = text.fontFamily();
     *
     * // set font family
     * text.fontFamily('Arial');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontSize', 12);

    /**
     * get/set font size in pixels
     * @name fontSize
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} fontSize
     * @returns {Number}
     * @example
     * // get font size
     * var fontSize = text.fontSize();
     *
     * // set font size to 22px
     * text.fontSize(22);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontStyle', NORMAL);

    /**
     * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
     * @name fontStyle
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontStyle
     * @returns {String}
     * @example
     * // get font style
     * var fontStyle = text.fontStyle();
     *
     * // set font style
     * text.fontStyle('bold');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'fontVariant', NORMAL);

    /**
     * set font variant.  Can be 'normal' or 'small-caps'.  'normal' is the default.
     * @name fontVariant
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} fontVariant
     * @returns {String}
     * @example
     * // get font variant
     * var fontVariant = text.fontVariant();
     *
     * // set font variant
     * text.fontVariant('small-caps');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'padding', 0);

    /**
     * set padding
     * @name padding
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} padding
     * @returns {Number}
     * @example
     * // get padding
     * var padding = text.padding();
     * 
     * // set padding to 10 pixels
     * text.padding(10);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'align', LEFT);

    /**
     * get/set horizontal align of text.  Can be 'left', 'center', or 'right'
     * @name align
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} align
     * @returns {String}
     * @example
     * // get text align
     * var align = text.align();
     *
     * // center text
     * text.align('center');
     *
     * // align text to right
     * text.align('right');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'lineHeight', 1);

    /**
     * get/set line height.  The default is 1.
     * @name lineHeight
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {Number} lineHeight
     * @returns {Number}
     * @example 
     * // get line height
     * var lineHeight = text.lineHeight();
     *
     * // set the line height
     * text.lineHeight(2);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Text, 'wrap', WORD);

    /**
     * get/set wrap.  Can be word, char, or none. Default is word.
     * @name wrap
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} wrap
     * @returns {String}
     * @example
     * // get wrap
     * var wrap = text.wrap();
     *
     * // set wrap
     * text.wrap('word');
     */

    Kinetic.Factory.addGetter(Kinetic.Text, 'text', EMPTY_STRING);
    Kinetic.Factory.addOverloadedGetterSetter(Kinetic.Text, 'text');

    /**
     * get/set text
     * @name getText
     * @method
     * @memberof Kinetic.Text.prototype
     * @param {String} text
     * @returns {String}
     * @example
     * // get text
     * var text = text.text();
     * 
     * // set text
     * text.text('Hello world!');
     */

    Kinetic.Collection.mapMethods(Kinetic.Text);
})();
;(function() {
    /**
     * Line constructor.&nbsp; Lines are defined by an array of points and
     *  a tension
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Array} config.points
     * @param {Number} [config.tension] Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @param {Boolean} [config.closed] defines whether or not the line shape is closed, creating a polygon or blob 
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var line = new Kinetic.Line({
     *   x: 100,
     *   y: 50,
     *   points: [73, 70, 340, 23, 450, 60, 500, 20],
     *   stroke: 'red',
     *   tension: 1
     * });
     */
    Kinetic.Line = function(config) {
        this.___init(config);
    };

    Kinetic.Line.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Line';

            this.on('pointsChange.kinetic tensionChange.kinetic closedChange.kinetic', function() {
                this._clearCache('tensionPoints');
            });

            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var points = this.getPoints(),
                length = points.length,
                tension = this.getTension(),
                closed = this.getClosed(),
                tp, len, n;

            if (!length) {
                return;
            }

            context.beginPath();
            context.moveTo(points[0], points[1]);

            // tension
            if(tension !== 0 && length > 4) {
                tp = this.getTensionPoints();
                len = tp.length;
                n = closed ? 0 : 4;

                if (!closed) {
                    context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
                }

                while(n < len - 2) {
                    context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
                }

                if (!closed) {
                    context.quadraticCurveTo(tp[len-2], tp[len-1], points[length-2], points[length-1]);
                }
            }
            // no tension
            else {
                for(n = 2; n < length; n+=2) {
                    context.lineTo(points[n], points[n+1]);
                }
            }

            // closed e.g. polygons and blobs
            if (closed) {
                context.closePath();
                context.fillStrokeShape(this);
            }
            // open e.g. lines and splines
            else {
                context.strokeShape(this);
            }
        },
        getTensionPoints: function() {
            return this._getCache('tensionPoints', this._getTensionPoints);
        },
        _getTensionPoints: function() {
            if (this.getClosed()) {
                return this._getTensionPointsClosed();
            }
            else {
                return Kinetic.Util._expandPoints(this.getPoints(), this.getTension());
            }
        },
        _getTensionPointsClosed: function() {
            var p = this.getPoints(),
                len = p.length,
                tension = this.getTension(),
                util = Kinetic.Util,
                firstControlPoints = util._getControlPoints(
                    p[len-2],
                    p[len-1],
                    p[0],
                    p[1],
                    p[2],
                    p[3],
                    tension
                ),
                lastControlPoints = util._getControlPoints(
                    p[len-4],
                    p[len-3],
                    p[len-2],
                    p[len-1],
                    p[0],
                    p[1],
                    tension
                ),
                middle = Kinetic.Util._expandPoints(p, tension),
                tp = [
                    firstControlPoints[2],
                    firstControlPoints[3]
                ]
                .concat(middle)
                .concat([
                    lastControlPoints[0],
                    lastControlPoints[1],
                    p[len-2],
                    p[len-1],
                    lastControlPoints[2],
                    lastControlPoints[3],
                    firstControlPoints[0],
                    firstControlPoints[1],
                    p[0],
                    p[1]
                ]);
                    
            return tp;
        }
    };
    Kinetic.Util.extend(Kinetic.Line, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Line, 'closed', false);

    /**
     * get/set closed flag.  The default is false
     * @name closed
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Boolean} closed
     * @returns {Boolean}
     * @example
     * // get closed flag
     * var closed = line.closed();
     *
     * // close the shape
     * line.closed(true);
     *
     * // open the shape
     * line.closed(false);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Line, 'tension', 0);

    /**
     * get/set tension
     * @name tension
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Number} Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @returns {Number}
     * @example
     * // get tension
     * var tension = line.tension();
     *
     * // set tension
     * line.tension(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Line, 'points', []);
    /**
     * get/set points array
     * @name points
     * @method
     * @memberof Kinetic.Line.prototype
     * @param {Array} points
     * @returns {Array}
     * @example
     * // get points
     * var points = line.points();
     *
     * // set points
     * line.points([10, 20, 30, 40, 50, 60]);
     *
     * // push a new point
     * line.points(line.points().concat([70, 80]));
     */

    Kinetic.Collection.mapMethods(Kinetic.Line);
})();;(function() {
    /**
     * Sprite constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} config.animation animation key
     * @param {Object} config.animations animation map
     * @param {Integer} [config.frameIndex] animation frame index
     * @param {Image} config.image image object
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var imageObj = new Image();
     * imageObj.onload = function() {
     *   var sprite = new Kinetic.Sprite({
     *     x: 200,
     *     y: 100,
     *     image: imageObj,
     *     animation: 'standing',
     *     animations: {
     *       standing: [
     *         // x, y, width, height (6 frames)
     *         0, 0, 49, 109,
     *         52, 0, 49, 109,
     *         105, 0, 49, 109,
     *         158, 0, 49, 109,
     *         210, 0, 49, 109,
     *         262, 0, 49, 109
     *       ],
     *       kicking: [
     *         // x, y, width, height (6 frames)
     *         0, 109, 45, 98,
     *         45, 109, 45, 98,
     *         95, 109, 63, 98,
     *         156, 109, 70, 98,
     *         229, 109, 60, 98,
     *         287, 109, 41, 98
     *       ]          
     *     },
     *     frameRate: 7,
     *     frameIndex: 0
     *   });
     * };
     * imageObj.src = '/path/to/image.jpg'
     */
    Kinetic.Sprite = function(config) {
        this.___init(config);
    };

    Kinetic.Sprite.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Sprite';

            this._updated = true;
            var that = this;
            this.anim = new Kinetic.Animation(function() {
                // if we don't need to redraw layer we should return false
                var updated = that._updated;
                that._updated = false;
                return updated;
            });
            this.on('animationChange.kinetic', function() {
                // reset index when animation changes
                this.frameIndex(0);
            });
            this.on('frameIndexChange.kinetic', function() {
                this._updated = true;
            });
            // smooth change for frameRate
            this.on('frameRateChange.kinetic', function() {
                if (!this.anim.isRunning()) {
                    return;
                }
                clearInterval(this.interval);
                this._setInterval();
            });

            this.sceneFunc(this._sceneFunc);
            this.hitFunc(this._hitFunc);
        },
        _sceneFunc: function(context) {
            var anim = this.getAnimation(),
                index = this.frameIndex(),
                ix4 = index * 4,
                set = this.getAnimations()[anim],
                offsets = this.frameOffsets(),
                x =      set[ix4 + 0],
                y =      set[ix4 + 1],
                width =  set[ix4 + 2],
                height = set[ix4 + 3],
                image = this.getImage();

            if(image) {
                if (offsets) {
                    var offset = offsets[anim],
                    ix2 = index * 2;
                    context.drawImage(image, x, y, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
                } else {
                    context.drawImage(image, x, y, width, height, 0, 0, width, height);
                }
            }
        },
        _hitFunc: function(context) {
            var anim = this.getAnimation(),
                index = this.frameIndex(),
                ix4 = index * 4,
                set = this.getAnimations()[anim],
                offsets = this.frameOffsets(),
                width =  set[ix4 + 2],
                height = set[ix4 + 3];

            context.beginPath();
            if (offsets) {
                var offset = offsets[anim];
                var ix2 = index * 2;
                context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
            } else {
                context.rect(0, 0, width, height);
            }
            context.closePath();
            context.fillShape(this);
        },
        _useBufferCanvas: function() {
            return (this.hasShadow() || this.getAbsoluteOpacity() !== 1) && this.hasStroke();
        },
        _setInterval: function() {
            var that = this;
            this.interval = setInterval(function() {
                that._updateIndex();
            }, 1000 / this.getFrameRate());
        },
        /**
         * start sprite animation
         * @method
         * @memberof Kinetic.Sprite.prototype
         */
        start: function() {
            var layer = this.getLayer();

            /*
             * animation object has no executable function because
             *  the updates are done with a fixed FPS with the setInterval
             *  below.  The anim object only needs the layer reference for
             *  redraw
             */
            this.anim.setLayers(layer);
            this._setInterval();
            this.anim.start();
        },
        /**
         * stop sprite animation
         * @method
         * @memberof Kinetic.Sprite.prototype
         */
        stop: function() {
            this.anim.stop();
            clearInterval(this.interval);
        },
        /**
         * determine if animation of sprite is running or not.  returns true or false
         * @method
         * @memberof Kinetic.Animation.prototype
         * @returns {Boolean}
         */
        isRunning: function() {
            return this.anim.isRunning();
        },
        _updateIndex: function() {
            var index = this.frameIndex(),
                animation = this.getAnimation(),
                animations = this.getAnimations(),
                anim = animations[animation],
                len = anim.length / 4;

            if(index < len - 1) {
                this.frameIndex(index + 1);
            }
            else {
                this.frameIndex(0);
            }
        }
    };
    Kinetic.Util.extend(Kinetic.Sprite, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'animation');

    /**
     * get/set animation key
     * @name animation
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {String} anim animation key
     * @returns {String}
     * @example
     * // get animation key
     * var animation = sprite.animation();
     *
     * // set animation key
     * sprite.animation('kicking');
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'animations');

    /**
     * get/set animations map
     * @name animations
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Object} animations
     * @returns {Object}
     * @example
     * // get animations map
     * var animations = sprite.animations();
     * 
     * // set animations map
     * sprite.animations({
     *   standing: [
     *     // x, y, width, height (6 frames)
     *     0, 0, 49, 109,
     *     52, 0, 49, 109,
     *     105, 0, 49, 109,
     *     158, 0, 49, 109,
     *     210, 0, 49, 109,
     *     262, 0, 49, 109
     *   ],
     *   kicking: [
     *     // x, y, width, height (6 frames)
     *     0, 109, 45, 98,
     *     45, 109, 45, 98,
     *     95, 109, 63, 98,
     *     156, 109, 70, 98,
     *     229, 109, 60, 98,
     *     287, 109, 41, 98
     *   ]          
     * });
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'frameOffsets');

    /**
    * get/set offsets map
    * @name offsets
    * @method
    * @memberof Kinetic.Sprite.prototype
    * @param {Object} offsets
    * @returns {Object}
    * @example
    * // get offsets map
    * var offsets = sprite.offsets();
    *
    * // set offsets map
    * sprite.offsets({
    *   standing: [
    *     // x, y (6 frames)
    *     0, 0,
    *     0, 0,
    *     5, 0,
    *     0, 0,
    *     0, 3,
    *     2, 0
    *   ],
    *   kicking: [
    *     // x, y (6 frames)
    *     0, 5,
    *     5, 0,
    *     10, 0,
    *     0, 0,
    *     2, 1,
    *     0, 0
    *   ]
    * });
    */
 
    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'image');

    /**
     * get/set image
     * @name image
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Image} image
     * @returns {Image}
     * @example
     * // get image
     * var image = sprite.image();
     *
     * // set image
     * sprite.image(imageObj);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'frameIndex', 0);

    /**
     * set/set animation frame index
     * @name frameIndex
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Integer} frameIndex
     * @returns {Integer}
     * @example
     * // get animation frame index
     * var frameIndex = sprite.frameIndex();
     *
     * // set animation frame index
     * sprite.frameIndex(3);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Sprite, 'frameRate', 17);

    /**
     * get/set frame rate in frames per second.  Increase this number to make the sprite
     *  animation run faster, and decrease the number to make the sprite animation run slower
     *  The default is 17 frames per second
     * @name frameRate
     * @method
     * @memberof Kinetic.Sprite.prototype
     * @param {Integer} frameRate
     * @returns {Integer}
     * @example
     * // get frame rate
     * var frameRate = sprite.frameRate();
     *
     * // set frame rate to 2 frames per second
     * sprite.frameRate(2);
     */

    Kinetic.Factory.backCompat(Kinetic.Sprite, {
        index: 'frameIndex',
        getIndex: 'getFrameIndex',
        setIndex: 'setFrameIndex'
    });

    Kinetic.Collection.mapMethods(Kinetic.Sprite);
})();
;(function () {
    /**
     * Path constructor.
     * @author Jason Follas
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} config.data SVG data string
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var path = new Kinetic.Path({
     *   x: 240,
     *   y: 40,
     *   data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
     *   fill: 'green',
     *   scale: 2
     * });
     */
    Kinetic.Path = function (config) {
        this.___init(config);
    };

    Kinetic.Path.prototype = {
        ___init: function (config) {
            this.dataArray = [];
            var that = this;

            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Path';

            this.dataArray = Kinetic.Path.parsePathData(this.getData());
            this.on('dataChange.kinetic', function () {
                that.dataArray = Kinetic.Path.parsePathData(this.getData());
            });

            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var ca = this.dataArray,
                closedPath = false;

            // context position
            context.beginPath();
            for (var n = 0; n < ca.length; n++) {
                var c = ca[n].command;
                var p = ca[n].points;
                switch (c) {
                    case 'L':
                        context.lineTo(p[0], p[1]);
                        break;
                    case 'M':
                        context.moveTo(p[0], p[1]);
                        break;
                    case 'C':
                        context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                        break;
                    case 'Q':
                        context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                        break;
                    case 'A':
                        var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];

                        var r = (rx > ry) ? rx : ry;
                        var scaleX = (rx > ry) ? 1 : rx / ry;
                        var scaleY = (rx > ry) ? ry / rx : 1;

                        context.translate(cx, cy);
                        context.rotate(psi);
                        context.scale(scaleX, scaleY);
                        context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                        context.scale(1 / scaleX, 1 / scaleY);
                        context.rotate(-psi);
                        context.translate(-cx, -cy);

                        break;
                    case 'z':
                        context.closePath();
                        closedPath = true;
                        break;
                }
            }

            if (closedPath) {
                context.fillStrokeShape(this);
            }
            else {
                context.strokeShape(this);
            }
        }
    };
    Kinetic.Util.extend(Kinetic.Path, Kinetic.Shape);

    Kinetic.Path.getLineLength = function(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    };
    Kinetic.Path.getPointOnLine = function(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
        if(fromX === undefined) {
            fromX = P1x;
        }
        if(fromY === undefined) {
            fromY = P1y;
        }

        var m = (P2y - P1y) / ((P2x - P1x) + 0.00000001);
        var run = Math.sqrt(dist * dist / (1 + m * m));
        if(P2x < P1x) {
            run *= -1;
        }
        var rise = m * run;
        var pt;

        if (P2x === P1x) { // vertical line
            pt = {
                x: fromX,
                y: fromY + rise
            };
        } else if((fromY - P1y) / ((fromX - P1x) + 0.00000001) === m) {
            pt = {
                x: fromX + run,
                y: fromY + rise
            };
        }
        else {
            var ix, iy;

            var len = this.getLineLength(P1x, P1y, P2x, P2y);
            if(len < 0.00000001) {
                return undefined;
            }
            var u = (((fromX - P1x) * (P2x - P1x)) + ((fromY - P1y) * (P2y - P1y)));
            u = u / (len * len);
            ix = P1x + u * (P2x - P1x);
            iy = P1y + u * (P2y - P1y);

            var pRise = this.getLineLength(fromX, fromY, ix, iy);
            var pRun = Math.sqrt(dist * dist - pRise * pRise);
            run = Math.sqrt(pRun * pRun / (1 + m * m));
            if(P2x < P1x) {
                run *= -1;
            }
            rise = m * run;
            pt = {
                x: ix + run,
                y: iy + rise
            };
        }

        return pt;
    };

    Kinetic.Path.getPointOnCubicBezier = function(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
        function CB1(t) {
            return t * t * t;
        }
        function CB2(t) {
            return 3 * t * t * (1 - t);
        }
        function CB3(t) {
            return 3 * t * (1 - t) * (1 - t);
        }
        function CB4(t) {
            return (1 - t) * (1 - t) * (1 - t);
        }
        var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
        var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);

        return {
            x: x,
            y: y
        };
    };
    Kinetic.Path.getPointOnQuadraticBezier = function(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
        function QB1(t) {
            return t * t;
        }
        function QB2(t) {
            return 2 * t * (1 - t);
        }
        function QB3(t) {
            return (1 - t) * (1 - t);
        }
        var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
        var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);

        return {
            x: x,
            y: y
        };
    };
    Kinetic.Path.getPointOnEllipticalArc = function(cx, cy, rx, ry, theta, psi) {
        var cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
        var pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta)
        };
        return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi)
        };
    };
    /*
     * get parsed data array from the data
     *  string.  V, v, H, h, and l data are converted to
     *  L data for the purpose of high performance Path
     *  rendering
     */
    Kinetic.Path.parsePathData = function(data) {
        // Path Data Segment must begin with a moveTo
        //m (x y)+  Relative moveTo (subsequent points are treated as lineTo)
        //M (x y)+  Absolute moveTo (subsequent points are treated as lineTo)
        //l (x y)+  Relative lineTo
        //L (x y)+  Absolute LineTo
        //h (x)+    Relative horizontal lineTo
        //H (x)+    Absolute horizontal lineTo
        //v (y)+    Relative vertical lineTo
        //V (y)+    Absolute vertical lineTo
        //z (closepath)
        //Z (closepath)
        //c (x1 y1 x2 y2 x y)+ Relative Bezier curve
        //C (x1 y1 x2 y2 x y)+ Absolute Bezier curve
        //q (x1 y1 x y)+       Relative Quadratic Bezier
        //Q (x1 y1 x y)+       Absolute Quadratic Bezier
        //t (x y)+    Shorthand/Smooth Relative Quadratic Bezier
        //T (x y)+    Shorthand/Smooth Absolute Quadratic Bezier
        //s (x2 y2 x y)+       Shorthand/Smooth Relative Bezier curve
        //S (x2 y2 x y)+       Shorthand/Smooth Absolute Bezier curve
        //a (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+     Relative Elliptical Arc
        //A (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+  Absolute Elliptical Arc

        // return early if data is not defined
        if(!data) {
            return [];
        }

        // command string
        var cs = data;

        // command chars
        var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
        // convert white spaces to commas
        cs = cs.replace(new RegExp(' ', 'g'), ',');
        // create pipes so that we can split the data
        for(var n = 0; n < cc.length; n++) {
            cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
        }
        // create array
        var arr = cs.split('|');
        var ca = [];
        // init context point
        var cpx = 0;
        var cpy = 0;
        for( n = 1; n < arr.length; n++) {
            var str = arr[n];
            var c = str.charAt(0);
            str = str.slice(1);
            // remove ,- for consistency
            str = str.replace(new RegExp(',-', 'g'), '-');
            // add commas so that it's easy to split
            str = str.replace(new RegExp('-', 'g'), ',-');
            str = str.replace(new RegExp('e,-', 'g'), 'e-');
            var p = str.split(',');
            if(p.length > 0 && p[0] === '') {
                p.shift();
            }
            // convert strings to floats
            for(var i = 0; i < p.length; i++) {
                p[i] = parseFloat(p[i]);
            }
            while(p.length > 0) {
                if(isNaN(p[0])) {// case for a trailing comma before next command
                    break;
                }

                var cmd = null;
                var points = [];
                var startX = cpx, startY = cpy;
                // Move var from within the switch to up here (jshint)
                var prevCmd, ctlPtx, ctlPty;     // Ss, Tt
                var rx, ry, psi, fa, fs, x1, y1; // Aa


                // convert l, H, h, V, and v to L
                switch (c) {

                    // Note: Keep the lineTo's above the moveTo's in this switch
                    case 'l':
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'L':
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;

                    // Note: lineTo handlers need to be above this point
                    case 'm':
                        var dx = p.shift();
                        var dy = p.shift();
                        cpx += dx;
                        cpy += dy;
                        cmd = 'M';
                        // After closing the path move the current position 
                        // to the the first point of the path (if any). 
                        if(ca.length>2 && ca[ca.length-1].command==='z'){
                            for(var idx=ca.length-2;idx>=0;idx--){
                                if(ca[idx].command==='M'){
                                    cpx=ca[idx].points[0]+dx;
                                    cpy=ca[idx].points[1]+dy;
                                    break;
                                }
                            }
                        }
                        points.push(cpx, cpy);
                        c = 'l';
                        // subsequent points are treated as relative lineTo
                        break;
                    case 'M':
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'M';
                        points.push(cpx, cpy);
                        c = 'L';
                        // subsequent points are treated as absolute lineTo
                        break;

                    case 'h':
                        cpx += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'H':
                        cpx = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'v':
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'V':
                        cpy = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'C':
                        points.push(p.shift(), p.shift(), p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'c':
                        points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'S':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 's':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'Q':
                        points.push(p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'q':
                        points.push(cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(cpx, cpy);
                        break;
                    case 'T':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 't':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if(prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 'A':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();
                        x1 = cpx;
                        y1 = cpy;
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                    case 'a':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();
                        x1 = cpx;
                        y1 = cpy; cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                }

                ca.push({
                    command: cmd || c,
                    points: points,
                    start: {
                        x: startX,
                        y: startY
                    },
                    pathLength: this.calcLength(startX, startY, cmd || c, points)
                });
            }

            if(c === 'z' || c === 'Z') {
                ca.push({
                    command: 'z',
                    points: [],
                    start: undefined,
                    pathLength: 0
                });
            }
        }

        return ca;
    };
    Kinetic.Path.calcLength = function(x, y, cmd, points) {
        var len, p1, p2, t;
        var path = Kinetic.Path;

        switch (cmd) {
            case 'L':
                return path.getLineLength(x, y, points[0], points[1]);
            case 'C':
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = path.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                for( t = 0.01; t <= 1; t += 0.01) {
                    p2 = path.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'Q':
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = path.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                for( t = 0.01; t <= 1; t += 0.01) {
                    p2 = path.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'A':
                // Approximates by breaking curve into line segments
                len = 0.0;
                var start = points[4];
                // 4 = theta
                var dTheta = points[5];
                // 5 = dTheta
                var end = points[4] + dTheta;
                var inc = Math.PI / 180.0;
                // 1 degree resolution
                if(Math.abs(start - end) < inc) {
                    inc = Math.abs(start - end);
                }
                // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi
                p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                if(dTheta < 0) {// clockwise
                    for( t = start - inc; t > end; t -= inc) {
                        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                }
                else {// counter-clockwise
                    for( t = start + inc; t < end; t += inc) {
                        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                }
                p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);

                return len;
        }

        return 0;
    };
    Kinetic.Path.convertEndpointToCenterParameterization = function(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
        // Derived from: http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
        var psi = psiDeg * (Math.PI / 180.0);
        var xp = Math.cos(psi) * (x1 - x2) / 2.0 + Math.sin(psi) * (y1 - y2) / 2.0;
        var yp = -1 * Math.sin(psi) * (x1 - x2) / 2.0 + Math.cos(psi) * (y1 - y2) / 2.0;

        var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);

        if(lambda > 1) {
            rx *= Math.sqrt(lambda);
            ry *= Math.sqrt(lambda);
        }

        var f = Math.sqrt((((rx * rx) * (ry * ry)) - ((rx * rx) * (yp * yp)) - ((ry * ry) * (xp * xp))) / ((rx * rx) * (yp * yp) + (ry * ry) * (xp * xp)));

        if(fa === fs) {
            f *= -1;
        }
        if(isNaN(f)) {
            f = 0;
        }

        var cxp = f * rx * yp / ry;
        var cyp = f * -ry * xp / rx;

        var cx = (x1 + x2) / 2.0 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
        var cy = (y1 + y2) / 2.0 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;

        var vMag = function(v) {
            return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        };
        var vRatio = function(u, v) {
            return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
        };
        var vAngle = function(u, v) {
            return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
        };
        var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
        var u = [(xp - cxp) / rx, (yp - cyp) / ry];
        var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
        var dTheta = vAngle(u, v);

        if(vRatio(u, v) <= -1) {
            dTheta = Math.PI;
        }
        if(vRatio(u, v) >= 1) {
            dTheta = 0;
        }
        if(fs === 0 && dTheta > 0) {
            dTheta = dTheta - 2 * Math.PI;
        }
        if(fs === 1 && dTheta < 0) {
            dTheta = dTheta + 2 * Math.PI;
        }
        return [cx, cy, rx, ry, theta, dTheta, psi, fs];
    };
    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Path, 'data');

    /**
     * set SVG path data string.  This method
     *  also automatically parses the data string
     *  into a data array.  Currently supported SVG data:
     *  M, m, L, l, H, h, V, v, Q, q, T, t, C, c, S, s, A, a, Z, z
     * @name setData
     * @method
     * @memberof Kinetic.Path.prototype
     * @param {String} SVG path command string
     */

    /**
     * get SVG path data string
     * @name getData
     * @method
     * @memberof Kinetic.Path.prototype
     */

    Kinetic.Collection.mapMethods(Kinetic.Path);
})();
;(function() {
    var EMPTY_STRING = '',
        //CALIBRI = 'Calibri',
        NORMAL = 'normal';

    /**
     * Path constructor.
     * @author Jason Follas
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {String} [config.fontFamily] default is Calibri
     * @param {Number} [config.fontSize] default is 12
     * @param {String} [config.fontStyle] can be normal, bold, or italic.  Default is normal
     * @param {String} [config.fontVariant] can be normal or small-caps.  Default is normal
     * @param {String} config.text
     * @param {String} config.data SVG data string
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var textpath = new Kinetic.TextPath({
     *   x: 100,
     *   y: 50,
     *   fill: '#333',
     *   fontSize: '24',
     *   fontFamily: 'Arial',
     *   text: 'All the world\'s a stage, and all the men and women merely players.',
     *   data: 'M10,10 C0,0 10,150 100,100 S300,150 400,50'
     * });
     */
    Kinetic.TextPath = function(config) {
        this.___init(config);
    };

    function _fillFunc(context) {
        context.fillText(this.partialText, 0, 0);
    }
    function _strokeFunc(context) {
        context.strokeText(this.partialText, 0, 0);
    }

    Kinetic.TextPath.prototype = {
        ___init: function(config) {
            var that = this;
            this.dummyCanvas = Kinetic.Util.createCanvasElement();
            this.dataArray = [];

            // call super constructor
            Kinetic.Shape.call(this, config);

            // overrides
            // TODO: shouldn't this be on the prototype?
            this._fillFunc = _fillFunc;
            this._strokeFunc = _strokeFunc;
            this._fillFuncHit = _fillFunc;
            this._strokeFuncHit = _strokeFunc;
            
            this.className = 'TextPath';

            this.dataArray = Kinetic.Path.parsePathData(this.attrs.data);
            this.on('dataChange.kinetic', function() {
                that.dataArray = Kinetic.Path.parsePathData(this.attrs.data);
            });

            // update text data for certain attr changes
            this.on('textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic', that._setTextData);
            that._setTextData();
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            context.setAttr('font', this._getContextFont());
            context.setAttr('textBaseline', 'middle');
            context.setAttr('textAlign', 'left');
            context.save();

            var glyphInfo = this.glyphInfo;
            for(var i = 0; i < glyphInfo.length; i++) {
                context.save();

                var p0 = glyphInfo[i].p0;

                context.translate(p0.x, p0.y);
                context.rotate(glyphInfo[i].rotation);
                this.partialText = glyphInfo[i].text;

                context.fillStrokeShape(this);
                context.restore();

                //// To assist with debugging visually, uncomment following
                // context.beginPath();
                // if (i % 2)
                // context.strokeStyle = 'cyan';
                // else
                // context.strokeStyle = 'green';
                // var p1 = glyphInfo[i].p1;
                // context.moveTo(p0.x, p0.y);
                // context.lineTo(p1.x, p1.y);
                // context.stroke();
            }
            context.restore();
        },
        /**
         * get text width in pixels
         * @method
         * @memberof Kinetic.TextPath.prototype
         */
        getTextWidth: function() {
            return this.textWidth;
        },
        /**
         * get text height in pixels
         * @method
         * @memberof Kinetic.TextPath.prototype
         */
        getTextHeight: function() {
            return this.textHeight;
        },
        /**
         * set text
         * @method
         * @memberof Kinetic.TextPath.prototype
         * @param {String} text
         */
        setText: function(text) {
            Kinetic.Text.prototype.setText.call(this, text);
        },
        _getTextSize: function(text) {
            var dummyCanvas = this.dummyCanvas;
            var _context = dummyCanvas.getContext('2d');

            _context.save();

            _context.font = this._getContextFont();
            var metrics = _context.measureText(text);

            _context.restore();

            return {
                width: metrics.width,
                height: parseInt(this.attrs.fontSize, 10)
            };
        },
        _setTextData: function() {

            var that = this;
            var size = this._getTextSize(this.attrs.text);
            this.textWidth = size.width;
            this.textHeight = size.height;

            this.glyphInfo = [];

            var charArr = this.attrs.text.split('');

            var p0, p1, pathCmd;

            var pIndex = -1;
            var currentT = 0;

            var getNextPathSegment = function() {
                currentT = 0;
                var pathData = that.dataArray;

                for(var i = pIndex + 1; i < pathData.length; i++) {
                    if(pathData[i].pathLength > 0) {
                        pIndex = i;

                        return pathData[i];
                    }
                    else if(pathData[i].command == 'M') {
                        p0 = {
                            x: pathData[i].points[0],
                            y: pathData[i].points[1]
                        };
                    }
                }

                return {};
            };
            var findSegmentToFitCharacter = function(c) {

                var glyphWidth = that._getTextSize(c).width;

                var currLen = 0;
                var attempts = 0;

                p1 = undefined;
                while(Math.abs(glyphWidth - currLen) / glyphWidth > 0.01 && attempts < 25) {
                    attempts++;
                    var cumulativePathLength = currLen;
                    while(pathCmd === undefined) {
                        pathCmd = getNextPathSegment();

                        if(pathCmd && cumulativePathLength + pathCmd.pathLength < glyphWidth) {
                            cumulativePathLength += pathCmd.pathLength;
                            pathCmd = undefined;
                        }
                    }

                    if(pathCmd === {} || p0 === undefined) {
                        return undefined;
                    }

                    var needNewSegment = false;

                    switch (pathCmd.command) {
                        case 'L':
                            if(Kinetic.Path.getLineLength(p0.x, p0.y, pathCmd.points[0], pathCmd.points[1]) > glyphWidth) {
                                p1 = Kinetic.Path.getPointOnLine(glyphWidth, p0.x, p0.y, pathCmd.points[0], pathCmd.points[1], p0.x, p0.y);
                            }
                            else {
                                pathCmd = undefined;
                            }
                            break;
                        case 'A':

                            var start = pathCmd.points[4];
                            // 4 = theta
                            var dTheta = pathCmd.points[5];
                            // 5 = dTheta
                            var end = pathCmd.points[4] + dTheta;

                            if(currentT === 0){
                                currentT = start + 0.00000001;
                            }
                            // Just in case start is 0
                            else if(glyphWidth > currLen) {
                                currentT += (Math.PI / 180.0) * dTheta / Math.abs(dTheta);
                            }
                            else {
                                currentT -= Math.PI / 360.0 * dTheta / Math.abs(dTheta);
                            }

                            // Credit for bug fix: @therth https://github.com/ericdrowell/KineticJS/issues/249
                            // Old code failed to render text along arc of this path: "M 50 50 a 150 50 0 0 1 250 50 l 50 0"
                            if(dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                                currentT = end;
                                needNewSegment = true;
                            }
                            p1 = Kinetic.Path.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
                            break;
                        case 'C':
                            if(currentT === 0) {
                                if(glyphWidth > pathCmd.pathLength) {
                                    currentT = 0.00000001;
                                }
                                else {
                                    currentT = glyphWidth / pathCmd.pathLength;
                                }
                            }
                            else if(glyphWidth > currLen) {
                                currentT += (glyphWidth - currLen) / pathCmd.pathLength;
                            }
                            else {
                                currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
                            }

                            if(currentT > 1.0) {
                                currentT = 1.0;
                                needNewSegment = true;
                            }
                            p1 = Kinetic.Path.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
                            break;
                        case 'Q':
                            if(currentT === 0) {
                                currentT = glyphWidth / pathCmd.pathLength;
                            }
                            else if(glyphWidth > currLen) {
                                currentT += (glyphWidth - currLen) / pathCmd.pathLength;
                            }
                            else {
                                currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
                            }

                            if(currentT > 1.0) {
                                currentT = 1.0;
                                needNewSegment = true;
                            }
                            p1 = Kinetic.Path.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
                            break;

                    }

                    if(p1 !== undefined) {
                        currLen = Kinetic.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
                    }

                    if(needNewSegment) {
                        needNewSegment = false;
                        pathCmd = undefined;
                    }
                }
            };
            for(var i = 0; i < charArr.length; i++) {

                // Find p1 such that line segment between p0 and p1 is approx. width of glyph
                findSegmentToFitCharacter(charArr[i]);

                if(p0 === undefined || p1 === undefined) {
                    break;
                }

                var width = Kinetic.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);

                // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
                // Can foresee having a rough pair table built in that the developer can override as needed.

                var kern = 0;
                // placeholder for future implementation

                var midpoint = Kinetic.Path.getPointOnLine(kern + width / 2.0, p0.x, p0.y, p1.x, p1.y);

                var rotation = Math.atan2((p1.y - p0.y), (p1.x - p0.x));
                this.glyphInfo.push({
                    transposeX: midpoint.x,
                    transposeY: midpoint.y,
                    text: charArr[i],
                    rotation: rotation,
                    p0: p0,
                    p1: p1
                });
                p0 = p1;
            }
        }
    };

    // map TextPath methods to Text
    Kinetic.TextPath.prototype._getContextFont = Kinetic.Text.prototype._getContextFont;

    Kinetic.Util.extend(Kinetic.TextPath, Kinetic.Shape);

    // add setters and getters
    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontFamily', 'Arial');

    /**
     * set font family
     * @name setFontFamily
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontFamily
     */

     /**
     * get font family
     * @name getFontFamily
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontSize', 12);

    /**
     * set font size
     * @name setFontSize
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {int} fontSize
     */

     /**
     * get font size
     * @name getFontSize
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontStyle', NORMAL);

    /**
     * set font style.  Can be 'normal', 'italic', or 'bold'.  'normal' is the default.
     * @name setFontStyle
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontStyle
     */

     /**
     * get font style
     * @name getFontStyle
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.TextPath, 'fontVariant', NORMAL);

    /**
     * set font variant.  Can be 'normal' or 'small-caps'.  'normal' is the default.
     * @name setFontVariant
     * @method
     * @memberof Kinetic.TextPath.prototype
     * @param {String} fontVariant
     */

    /**
     * @get font variant
     * @name getFontVariant
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Factory.addGetter(Kinetic.TextPath, 'text', EMPTY_STRING);

    /**
     * get text
     * @name getText
     * @method
     * @memberof Kinetic.TextPath.prototype
     */

    Kinetic.Collection.mapMethods(Kinetic.TextPath);
})();
;(function() {
    /**
     * RegularPolygon constructor.&nbsp; Examples include triangles, squares, pentagons, hexagons, etc.
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Number} config.sides
     * @param {Number} config.radius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var hexagon = new Kinetic.RegularPolygon({
     *   x: 100,
     *   y: 200,
     *   sides: 6,
     *   radius: 70,
     *   fill: 'red',
     *   stroke: 'black',
     *   strokeWidth: 4
     * });
     */
    Kinetic.RegularPolygon = function(config) {
        this.___init(config);
    };

    Kinetic.RegularPolygon.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'RegularPolygon';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var sides = this.attrs.sides,
                radius = this.attrs.radius,
                n, x, y;

            context.beginPath();
            context.moveTo(0, 0 - radius);

            for(n = 1; n < sides; n++) {
                x = radius * Math.sin(n * 2 * Math.PI / sides);
                y = -1 * radius * Math.cos(n * 2 * Math.PI / sides);
                context.lineTo(x, y);
            }
            context.closePath();
            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.RegularPolygon, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, 'radius', 0);

    /**
     * set radius
     * @name setRadius
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     * @param {Number} radius
     */

     /**
     * get radius
     * @name getRadius
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.RegularPolygon, 'sides', 0);

    /**
     * set number of sides
     * @name setSides
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     * @param {int} sides
     */

    /**
     * get number of sides
     * @name getSides
     * @method
     * @memberof Kinetic.RegularPolygon.prototype
     */

    Kinetic.Collection.mapMethods(Kinetic.RegularPolygon);
})();
;(function() {
    /**
     * Star constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Integer} config.numPoints
     * @param {Number} config.innerRadius
     * @param {Number} config.outerRadius
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var star = new Kinetic.Star({
     *   x: 100,
     *   y: 200,
     *   numPoints: 5,
     *   innerRadius: 70,
     *   outerRadius: 70,
     *   fill: 'red',
     *   stroke: 'black',
     *   strokeWidth: 4
     * });
     */
    Kinetic.Star = function(config) {
        this.___init(config);
    };

    Kinetic.Star.prototype = {
        ___init: function(config) {
            // call super constructor
            Kinetic.Shape.call(this, config);
            this.className = 'Star';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var innerRadius = this.innerRadius(),
                outerRadius = this.outerRadius(),
                numPoints = this.numPoints();

            context.beginPath();
            context.moveTo(0, 0 - outerRadius);

            for(var n = 1; n < numPoints * 2; n++) {
                var radius = n % 2 === 0 ? outerRadius : innerRadius;
                var x = radius * Math.sin(n * Math.PI / numPoints);
                var y = -1 * radius * Math.cos(n * Math.PI / numPoints);
                context.lineTo(x, y);
            }
            context.closePath();

            context.fillStrokeShape(this);
        }
    };
    Kinetic.Util.extend(Kinetic.Star, Kinetic.Shape);

    // add getters setters
    Kinetic.Factory.addGetterSetter(Kinetic.Star, 'numPoints', 5);

    /**
     * set number of points
     * @name setNumPoints
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Integer} points
     */

     /**
     * get number of points
     * @name getNumPoints
     * @method
     * @memberof Kinetic.Star.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Star, 'innerRadius', 0);

    /**
     * set inner radius
     * @name setInnerRadius
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Number} radius
     */

     /**
     * get inner radius
     * @name getInnerRadius
     * @method
     * @memberof Kinetic.Star.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Star, 'outerRadius', 0);

    /**
     * set outer radius
     * @name setOuterRadius
     * @method
     * @memberof Kinetic.Star.prototype
     * @param {Number} radius
     */

     /**
     * get outer radius
     * @name getOuterRadius
     * @method
     * @memberof Kinetic.Star.prototype
     */

    Kinetic.Collection.mapMethods(Kinetic.Star);
})();
;(function() {
    // constants
    var ATTR_CHANGE_LIST = ['fontFamily', 'fontSize', 'fontStyle', 'padding', 'lineHeight', 'text'],
        CHANGE_KINETIC = 'Change.kinetic',
        NONE = 'none',
        UP = 'up',
        RIGHT = 'right',
        DOWN = 'down',
        LEFT = 'left',
        LABEL = 'Label',

     // cached variables
     attrChangeListLen = ATTR_CHANGE_LIST.length;

    /**
     * Label constructor.&nbsp; Labels are groups that contain a Text and Tag shape
     * @constructor
     * @memberof Kinetic
     * @param {Object} config
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * // create label
     * var label = new Kinetic.Label({
     *   x: 100,
     *   y: 100, 
     *   draggable: true
     * });
     *
     * // add a tag to the label
     * label.add(new Kinetic.Tag({
     *   fill: '#bbb',
     *   stroke: '#333',
     *   shadowColor: 'black',
     *   shadowBlur: 10,
     *   shadowOffset: [10, 10],
     *   shadowOpacity: 0.2,
     *   lineJoin: 'round',
     *   pointerDirection: 'up',
     *   pointerWidth: 20,
     *   pointerHeight: 20,
     *   cornerRadius: 5
     * }));
     *
     * // add text to the label
     * label.add(new Kinetic.Text({
     *   text: 'Hello World!',
     *   fontSize: 50,
     *   lineHeight: 1.2,
     *   padding: 10,
     *   fill: 'green'
     *  }));
     */
    Kinetic.Label = function(config) {
        this.____init(config);
    };

    Kinetic.Label.prototype = {
        ____init: function(config) {
            var that = this;

            Kinetic.Group.call(this, config);
            this.className = LABEL;
            
            this.on('add.kinetic', function(evt) {
                that._addListeners(evt.child);
                that._sync();
            });
        },
        /**
         * get Text shape for the label.  You need to access the Text shape in order to update
         * the text properties
         * @name getText
         * @method
         * @memberof Kinetic.Label.prototype
         */
        getText: function() {
            return this.find('Text')[0];
        },
        /**
         * get Tag shape for the label.  You need to access the Tag shape in order to update
         * the pointer properties and the corner radius
         * @name getTag
         * @method
         * @memberof Kinetic.Label.prototype
         */
        getTag: function() {
            return this.find('Tag')[0];
        },
        _addListeners: function(text) {
            var that = this,
                n;
            var func = function(){
                    that._sync();
                };

            // update text data for certain attr changes
            for(n = 0; n < attrChangeListLen; n++) {
                text.on(ATTR_CHANGE_LIST[n] + CHANGE_KINETIC, func);
            }
        },
        getWidth: function() {
            return this.getText().getWidth();
        },
        getHeight: function() {
            return this.getText().getHeight();
        },
        _sync: function() {
            var text = this.getText(),
                tag = this.getTag(),
                width, height, pointerDirection, pointerWidth, x, y, pointerHeight;

            if (text && tag) {
                width = text.getWidth();
                height = text.getHeight();
                pointerDirection = tag.getPointerDirection();
                pointerWidth = tag.getPointerWidth();
                pointerHeight = tag.getPointerHeight();
                x = 0;
                y = 0;

                switch(pointerDirection) {
                    case UP:
                        x = width / 2;
                        y = -1 * pointerHeight;
                        break;
                    case RIGHT:
                        x = width + pointerWidth;
                        y = height / 2;
                        break;
                    case DOWN:
                        x = width / 2;
                        y = height + pointerHeight;
                        break;
                    case LEFT:
                        x = -1 * pointerWidth;
                        y = height / 2;
                        break;
                }

                tag.setAttrs({
                    x: -1 * x,
                    y: -1 * y,
                    width: width,
                    height: height
                });

                text.setAttrs({
                    x: -1 * x,
                    y: -1 * y
                });
            }
        }
    };

    Kinetic.Util.extend(Kinetic.Label, Kinetic.Group);

    Kinetic.Collection.mapMethods(Kinetic.Label);

    /**
     * Tag constructor.&nbsp; A Tag can be configured
     *  to have a pointer element that points up, right, down, or left
     * @constructor
     * @memberof Kinetic
     * @param {Object} config
     * @param {String} [config.pointerDirection] can be up, right, down, left, or none; the default
     *  is none.  When a pointer is present, the positioning of the label is relative to the tip of the pointer.
     * @param {Number} [config.pointerWidth]
     * @param {Number} [config.pointerHeight]
     * @param {Number} [config.cornerRadius]
     */
    Kinetic.Tag = function(config) {
        this.___init(config);
    };

    Kinetic.Tag.prototype = {
        ___init: function(config) {
            Kinetic.Shape.call(this, config);
            this.className = 'Tag';
            this.sceneFunc(this._sceneFunc);
        },
        _sceneFunc: function(context) {
            var width = this.getWidth(),
                height = this.getHeight(),
                pointerDirection = this.getPointerDirection(),
                pointerWidth = this.getPointerWidth(),
                pointerHeight = this.getPointerHeight(),
                cornerRadius = this.getCornerRadius();

            context.beginPath();
            context.moveTo(0,0);

            if (pointerDirection === UP) {
                context.lineTo((width - pointerWidth)/2, 0);
                context.lineTo(width/2, -1 * pointerHeight);
                context.lineTo((width + pointerWidth)/2, 0);
            }

            if(!cornerRadius) {
                context.lineTo(width, 0);
            } else {
                context.lineTo(width - cornerRadius, 0);
                context.arc(width - cornerRadius, cornerRadius, cornerRadius, Math.PI * 3 / 2, 0, false);
            }
            
            if (pointerDirection === RIGHT) {
                context.lineTo(width, (height - pointerHeight)/2);
                context.lineTo(width + pointerWidth, height/2);
                context.lineTo(width, (height + pointerHeight)/2);
            }
            
            if(!cornerRadius) {
                context.lineTo(width, height);
            } else {
                context.lineTo(width, height - cornerRadius);
                context.arc(width - cornerRadius, height - cornerRadius, cornerRadius, 0, Math.PI / 2, false);
            }

            if (pointerDirection === DOWN) {
                context.lineTo((width + pointerWidth)/2, height);
                context.lineTo(width/2, height + pointerHeight);
                context.lineTo((width - pointerWidth)/2, height);
            }
            
            if(!cornerRadius) {
                context.lineTo(0, height);
            } else {
                context.lineTo(cornerRadius, height);
                context.arc(cornerRadius, height - cornerRadius, cornerRadius, Math.PI / 2, Math.PI, false);
            }

            if (pointerDirection === LEFT) {
                context.lineTo(0, (height + pointerHeight)/2);
                context.lineTo(-1 * pointerWidth, height/2);
                context.lineTo(0, (height - pointerHeight)/2);
            }
            
            if(cornerRadius) {
                context.lineTo(0, cornerRadius);
                context.arc(cornerRadius, cornerRadius, cornerRadius, Math.PI, Math.PI * 3 / 2, false);
            }

            context.closePath();
            context.fillStrokeShape(this);
        }
    };

    Kinetic.Util.extend(Kinetic.Tag, Kinetic.Shape);
    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'pointerDirection', NONE);

    /**
     * set pointer Direction
     * @name setPointerDirection
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {String} pointerDirection can be up, right, down, left, or none.  The
     *  default is none
     */

     /**
     * get pointer Direction
     * @name getPointerDirection
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'pointerWidth', 0);

    /**
     * set pointer width
     * @name setPointerWidth
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} pointerWidth
     */

     /**
     * get pointer width
     * @name getPointerWidth
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'pointerHeight', 0);

    /**
     * set pointer height
     * @name setPointerHeight
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} pointerHeight
     */

     /**
     * get pointer height
     * @name getPointerHeight
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Tag, 'cornerRadius', 0);

    /**
     * set corner radius
     * @name setCornerRadius
     * @method
     * @memberof Kinetic.Tag.prototype
     * @param {Number} corner radius
     */

    /**
     * get corner radius
     * @name getCornerRadius
     * @method
     * @memberof Kinetic.Tag.prototype
     */

    Kinetic.Collection.mapMethods(Kinetic.Tag);
})();
;(function() {
    /**
     * Arrow constructor
     * @constructor
     * @memberof Kinetic
     * @augments Kinetic.Shape
     * @param {Object} config
     * @param {Array} config.points
     * @param {Number} [config.tension] Higher values will result in a more curvy line.  A value of 0 will result in no interpolation.
     *   The default is 0
     * @param {Number} config.pointerLength
     * @param {Number} config.pointerWidth
     * @param {String} [config.fill] fill color
     * @param {Integer} [config.fillRed] set fill red component
     * @param {Integer} [config.fillGreen] set fill green component
     * @param {Integer} [config.fillBlue] set fill blue component
     * @param {Integer} [config.fillAlpha] set fill alpha component
     * @param {Image} [config.fillPatternImage] fill pattern image
     * @param {Number} [config.fillPatternX]
     * @param {Number} [config.fillPatternY]
     * @param {Object} [config.fillPatternOffset] object with x and y component
     * @param {Number} [config.fillPatternOffsetX] 
     * @param {Number} [config.fillPatternOffsetY] 
     * @param {Object} [config.fillPatternScale] object with x and y component
     * @param {Number} [config.fillPatternScaleX]
     * @param {Number} [config.fillPatternScaleY]
     * @param {Number} [config.fillPatternRotation]
     * @param {String} [config.fillPatternRepeat] can be "repeat", "repeat-x", "repeat-y", or "no-repeat".  The default is "no-repeat"
     * @param {Object} [config.fillLinearGradientStartPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientStartPointX]
     * @param {Number} [config.fillLinearGradientStartPointY]
     * @param {Object} [config.fillLinearGradientEndPoint] object with x and y component
     * @param {Number} [config.fillLinearGradientEndPointX]
     * @param {Number} [config.fillLinearGradientEndPointY]
     * @param {Array} [config.fillLinearGradientColorStops] array of color stops
     * @param {Object} [config.fillRadialGradientStartPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientStartPointX]
     * @param {Number} [config.fillRadialGradientStartPointY]
     * @param {Object} [config.fillRadialGradientEndPoint] object with x and y component
     * @param {Number} [config.fillRadialGradientEndPointX] 
     * @param {Number} [config.fillRadialGradientEndPointY] 
     * @param {Number} [config.fillRadialGradientStartRadius]
     * @param {Number} [config.fillRadialGradientEndRadius]
     * @param {Array} [config.fillRadialGradientColorStops] array of color stops
     * @param {Boolean} [config.fillEnabled] flag which enables or disables the fill.  The default value is true
     * @param {String} [config.fillPriority] can be color, linear-gradient, radial-graident, or pattern.  The default value is color.  The fillPriority property makes it really easy to toggle between different fill types.  For example, if you want to toggle between a fill color style and a fill pattern style, simply set the fill property and the fillPattern properties, and then use setFillPriority('color') to render the shape with a color fill, or use setFillPriority('pattern') to render the shape with the pattern fill configuration
     * @param {String} [config.stroke] stroke color
     * @param {Integer} [config.strokeRed] set stroke red component
     * @param {Integer} [config.strokeGreen] set stroke green component
     * @param {Integer} [config.strokeBlue] set stroke blue component
     * @param {Integer} [config.strokeAlpha] set stroke alpha component
     * @param {Number} [config.strokeWidth] stroke width
     * @param {Boolean} [config.strokeScaleEnabled] flag which enables or disables stroke scale.  The default is true
     * @param {Boolean} [config.strokeEnabled] flag which enables or disables the stroke.  The default value is true
     * @param {String} [config.lineJoin] can be miter, round, or bevel.  The default
     *  is miter
     * @param {String} [config.lineCap] can be butt, round, or sqare.  The default
     *  is butt
     * @param {String} [config.shadowColor]
     * @param {Integer} [config.shadowRed] set shadow color red component
     * @param {Integer} [config.shadowGreen] set shadow color green component
     * @param {Integer} [config.shadowBlue] set shadow color blue component
     * @param {Integer} [config.shadowAlpha] set shadow color alpha component
     * @param {Number} [config.shadowBlur]
     * @param {Object} [config.shadowOffset] object with x and y component
     * @param {Number} [config.shadowOffsetX]
     * @param {Number} [config.shadowOffsetY]
     * @param {Number} [config.shadowOpacity] shadow opacity.  Can be any real number
     *  between 0 and 1
     * @param {Boolean} [config.shadowEnabled] flag which enables or disables the shadow.  The default value is true
     * @param {Array} [config.dash]
     * @param {Boolean} [config.dashEnabled] flag which enables or disables the dashArray.  The default value is true
     * @param {Number} [config.x]
     * @param {Number} [config.y]
     * @param {Number} [config.width]
     * @param {Number} [config.height]
     * @param {Boolean} [config.visible]
     * @param {Boolean} [config.listening] whether or not the node is listening for events
     * @param {String} [config.id] unique id
     * @param {String} [config.name] non-unique name
     * @param {Number} [config.opacity] determines node opacity.  Can be any number between 0 and 1
     * @param {Object} [config.scale] set scale
     * @param {Number} [config.scaleX] set scale x
     * @param {Number} [config.scaleY] set scale y
     * @param {Number} [config.rotation] rotation in degrees
     * @param {Object} [config.offset] offset from center point and rotation point
     * @param {Number} [config.offsetX] set offset x
     * @param {Number} [config.offsetY] set offset y
     * @param {Boolean} [config.draggable] makes the node draggable.  When stages are draggable, you can drag and drop
     *  the entire stage by dragging any portion of the stage
     * @param {Number} [config.dragDistance]
     * @param {Function} [config.dragBoundFunc]
     * @example
     * var line = new Kinetic.Line({
     *   points: [73, 70, 340, 23, 450, 60, 500, 20],
     *   stroke: 'red',
     *   tension: 1,
     *   pointerLength : 10,
     *   pointerWidth : 12
     * });
     */
    Kinetic.Arrow = function(config) {
        this.____init(config);
    };

    Kinetic.Arrow.prototype = {
        ____init : function(config) {
            // call super constructor
            Kinetic.Line.call(this, config);
            this.className = 'Arrow';
        },
        _sceneFunc : function(ctx) {
            var PI2 = Math.PI * 2;
            var points = this.points();
            var n = points.length;
            var dx = points[n-2] - points[n-4];
            var dy = points[n-1] - points[n-3];
            var radians = (Math.atan2(dy, dx) + PI2) % PI2;
            var length = this.pointerLength();
            var width = this.pointerWidth();

            ctx.save();
            ctx.beginPath();
            ctx.translate(points[n-2], points[n-1]);
            ctx.rotate(radians);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();

            if (this.pointerAtBeginning()) {
                ctx.save();
                ctx.translate(points[0], points[1]);
                dx = points[2] - points[0];
                dy = points[3] - points[1];
                ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
                ctx.moveTo(0, 0);
                ctx.lineTo(-10, 6);
                ctx.lineTo(-10, -6);
                ctx.closePath();
                ctx.restore();
            }

            ctx.fillStrokeShape(this);
            Kinetic.Line.prototype._sceneFunc.apply(this, arguments);
        }
    };

    Kinetic.Util.extend(Kinetic.Arrow, Kinetic.Line);
    /**
     * get/set pointerLength
     * @name pointerLength
     * @method
     * @memberof Kinetic.Arrow.prototype
     * @param {Number} Length of pointer of arrow.
     *   The default is 10.
     * @returns {Number}
     * @example
     * // get tension
     * var pointerLength = line.pointerLength();
     *
     * // set tension
     * line.pointerLength(15);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arrow, 'pointerLength', 10);
    /**
     * get/set pointerWidth
     * @name pointerWidth
     * @method
     * @memberof Kinetic.Arrow.prototype
     * @param {Number} Width of pointer of arrow.
     *   The default is 10.
     * @returns {Number}
     * @example
     * // get tension
     * var pointerWidth = line.pointerWidth();
     *
     * // set tension
     * line.pointerWidth(15);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arrow, 'pointerWidth', 10);
    /**
     * get/set pointerAtBeginning
     * @name pointerAtBeginning
     * @method
     * @memberof Kinetic.Arrow.prototype
     * @param {Number} Should pointer displayed at beginning of arrow.
     *   The default is false.
     * @returns {Boolean}
     * @example
     * // get tension
     * var pointerAtBeginning = line.pointerAtBeginning();
     *
     * // set tension
     * line.pointerAtBeginning(true);
     */

    Kinetic.Factory.addGetterSetter(Kinetic.Arrow, 'pointerAtBeginning', false);
    Kinetic.Collection.mapMethods(Kinetic.Arrow);

})();


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_buskool_components_profile_info_vue__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_buskool_components_seller_menu_list_item_vue__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_buskool_components_buyer_menu_list_item_vue__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_buskool_components_swith_buttons_vue__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xbs_enjoyhint__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xbs_enjoyhint___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xbs_enjoyhint__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    ProfileInfo: __WEBPACK_IMPORTED_MODULE_0__my_buskool_components_profile_info_vue__["a" /* default */],
    SellerMenuList: __WEBPACK_IMPORTED_MODULE_1__my_buskool_components_seller_menu_list_item_vue__["a" /* default */],
    BuyerMenuList: __WEBPACK_IMPORTED_MODULE_2__my_buskool_components_buyer_menu_list_item_vue__["a" /* default */],
    SwitchButtons: __WEBPACK_IMPORTED_MODULE_3__my_buskool_components_swith_buttons_vue__["a" /* default */]
  },
  props: ["currentUser", "str", "assets"],
  data: function data() {
    return {
      isLoading: false
    };
  }
});

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["photoLink", "storage", "username", "isLoading", "userprof"]
});

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["profilebasic", "byadreq", "selregpro", "transactroute", "mytrans", "guide"],
  data: function data() {
    return {
      activeElement: 0,
      messageCount: "",
      linksPath: ["/buyer/messenger/group-messages"]
    };
  },

  methods: {
    init: function init() {
      var self = this;
    },
    subIsActive: function subIsActive(input) {
      var _this = this;

      var paths = Array.isArray(input) ? input : [input];

      return paths.some(function (path) {
        return _this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },

    checkLinkActive: function checkLinkActive() {
      for (var i = 0; i < this.linksPath.length; i++) {
        if (this.subIsActive(this.linksPath[i])) {
          this.activeElement = i;
        } else {
          this.activeElement = null;
        }
      }
    },
    showWallet: function showWallet() {
      $("#wallet-modal").modal("show");
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    }
  },
  watch: {
    $route: function $route() {
      this.checkLinkActive();
    }
  },
  mounted: function mounted() {
    this.checkLinkActive();
    this.init();
  },
  created: function created() {
    var _this2 = this;

    var self = this;
    var userId = window.localStorage.getItem("userId");

    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("messageCount", function (event) {
      _this2.messageCount += event;
    });
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("active", function (event) {
      _this2.activeElement = event;
    });
  }
});

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["profilebasic", "byadreq", "selregpro", "transactroute", "mytrans", "guide"],
  data: function data() {
    return {
      activeElement: 0,
      messageCount: "",
      linksPath: ["/buyer/messenger/group-messages"]
    };
  },

  methods: {
    init: function init() {
      var self = this;
    },
    subIsActive: function subIsActive(input) {
      var _this = this;

      var paths = Array.isArray(input) ? input : [input];

      return paths.some(function (path) {
        return _this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },

    checkLinkActive: function checkLinkActive() {
      for (var i = 0; i < this.linksPath.length; i++) {
        if (this.subIsActive(this.linksPath[i])) {
          this.activeElement = i;
        } else {
          this.activeElement = null;
        }
      }
    }
  },
  watch: {
    $route: function $route() {
      this.checkLinkActive();
    }
  },
  mounted: function mounted() {
    this.checkLinkActive();
    this.init();
  },
  created: function created() {
    var _this2 = this;

    var self = this;
    var userId = window.localStorage.getItem("userId");

    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("messageCount", function (event) {
      _this2.messageCount += event;
    });
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("active", function (event) {
      _this2.activeElement = event;
    });
  }
});

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["mobile", "isSeller"],
  data: function data() {
    return {
      isSwitch: false
    };
  },

  methods: {
    switchRole: function switchRole() {
      this.isSwitch = true;
      window.location.href = "/switch-role";
    }
  }
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_my_buskool_vue__ = __webpack_require__(369);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c45b00d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_buskool_vue__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(525)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4c45b00d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_my_buskool_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c45b00d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_buskool_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c45b00d_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_buskool_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\my-buskool\\my-buskool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c45b00d", Component.options)
  } else {
    hotAPI.reload("data-v-4c45b00d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(526);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("72484012", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4c45b00d\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-buskool.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4c45b00d\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-buskool.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.main-buskool-wrapper[data-v-4c45b00d] {\r\n  max-width: 600px;\r\n  border: 1px solid #e0e0e0;\r\n  margin: 150px auto;\r\n  border-radius: 12px;\r\n  padding: 20px 15px;\n}\n.promotion-wrapper[data-v-4c45b00d] {\r\n  margin: 10px 15px 0;\n}\n.promotion-wrapper .default-button-full-with[data-v-4c45b00d] {\r\n  margin: 0;\r\n  display: block;\r\n  height: 37px;\r\n  border-radius: 12px 12px 0 0;\n}\n.promotion-image[data-v-4c45b00d] {\r\n  background: linear-gradient(-45deg, #474d6f, #313442);\r\n  height: 37px;\r\n  border-radius: 12px 12px 0 0;\r\n  text-align: right;\r\n  padding: 0 10px;\r\n  display: block;\r\n  position: relative;\n}\n.promotion-image img[data-v-4c45b00d] {\r\n  height: 37px;\r\n  width: initial;\n}\n.promotion-image i[data-v-4c45b00d] {\r\n  position: absolute;\r\n  left: 15px;\r\n  color: #fff;\r\n  font-size: 17px;\r\n  top: 10px;\n}\n.invite-image-wrapper[data-v-4c45b00d] {\r\n  max-width: 100px;\r\n  padding-top: 15px;\n}\n.invite-image-wrapper img[data-v-4c45b00d] {\r\n  width: 120px;\n}\n.invite-section[data-v-4c45b00d] {\r\n  padding: 15px 10px;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#f6566c), to(#e62540));\r\n  background: linear-gradient(#f6566c, #e62540);\r\n  overflow: hidden;\r\n  border: none;\r\n  border-top: 10px solid #ebebeb;\r\n  width: 100%;\n}\n.invite-box[data-v-4c45b00d] {\r\n  border-radius: 12px;\r\n  background: #fff;\r\n  overflow: hidden;\r\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\r\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n.invite-box button[data-v-4c45b00d] {\r\n  color: #fff;\r\n  border: none;\r\n  min-width: 150px;\r\n  padding: 5px;\r\n  font-size: 16px;\r\n  border-radius: 12px;\r\n  font-weight: 500;\r\n  background: linear-gradient(45deg, #f4455e, #eb2c47);\r\n  margin-top: 22px;\n}\n.invite-content[data-v-4c45b00d] {\r\n  padding: 25px 15px 25px 0;\r\n  width: calc(100% - 110px);\r\n  line-height: 1.618;\r\n  text-align: right;\n}\n.invite-content p[data-v-4c45b00d] {\r\n  font-size: 18px;\r\n  color: #444;\r\n  font-weight: 500;\n}\n.invited-users button[data-v-4c45b00d] {\r\n  width: 100%;\r\n  background: #1a95e0;\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 21px;\r\n  font-weight: 500;\r\n  padding: 12px 90px 12px 5px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  text-align: right;\n}\n.invited-users button .fa-angle-left[data-v-4c45b00d] {\r\n  position: absolute;\r\n  left: 15px;\r\n  z-index: 2;\n}\n.invited-users button span[data-v-4c45b00d] {\r\n  position: relative;\r\n  z-index: 2;\n}\n.invited-users button .button-icon[data-v-4c45b00d] {\r\n  position: absolute;\r\n  right: -15px;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  width: 80px;\r\n  height: 80px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  text-align: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 27px;\r\n  border-radius: 50px;\r\n  top: -16px;\r\n  -webkit-transition: 400ms;\r\n  transition: 400ms;\n}\n.invited-users button:hover .button-icon[data-v-4c45b00d] {\r\n  width: 680px;\r\n  -webkit-transition: 400ms;\r\n  transition: 400ms;\n}\n.invited-users button .button-icon[data-v-4c45b00d]::before {\r\n  position: absolute;\r\n  right: 40px;\n}\n.switch-wrapper[data-v-4c45b00d] {\r\n  border-top: 10px solid #ebebeb;\r\n  padding: 30px 0;\n}\n@media screen and (max-width: 991px) {\n.main-buskool-wrapper[data-v-4c45b00d] {\r\n    margin: 50px auto;\r\n    padding: 0px 15px;\r\n    margin-bottom: 65px;\r\n    border: none;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_info_vue__ = __webpack_require__(370);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26b7144a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_info_vue__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(528)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26b7144a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_profile_info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26b7144a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_info_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26b7144a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_profile_info_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\my-buskool\\my-buskool-components\\profile_info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26b7144a", Component.options)
  } else {
    hotAPI.reload("data-v-26b7144a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(529);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7ebc4034", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-26b7144a\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_info.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-26b7144a\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile_info.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.profile[data-v-26b7144a] {\r\n  padding: 10px;\r\n  text-align: center;\r\n  position: relative;\r\n  overflow: hidden;\r\n  -webkit-transition: 150ms;\r\n  transition: 150ms;\r\n  border-radius: 12px;\r\n  margin-bottom: 15px;\n}\n.profile[data-v-26b7144a]:hover {\r\n  cursor: pointer;\r\n  background: #f2f2f2;\r\n  -webkit-transition: 150ms;\r\n  transition: 150ms;\n}\n.profile:hover .profile-icon-wrapper[data-v-26b7144a] {\r\n  left: 10px;\r\n  -webkit-transition: 150ms;\r\n  transition: 150ms;\n}\n.little_header .profile[data-v-26b7144a] {\r\n  display: none;\n}\n.profile-icon-wrapper[data-v-26b7144a] {\r\n  position: absolute;\r\n  top: calc(50% - 14px);\r\n  font-size: 27px;\r\n  left: 17px;\r\n  -webkit-transition: 150ms;\r\n  transition: 150ms;\r\n  color: #ccc;\n}\n.profile-img[data-v-26b7144a] {\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  height: 75px;\r\n  width: 75px;\r\n  margin: 0 auto;\r\n  float: right;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-color: #dddddd;\n}\n.profile-content[data-v-26b7144a] {\r\n  width: calc(100% - 75px);\r\n  float: right;\r\n  text-align: right;\r\n  padding-right: 10px;\r\n  padding-top: 15px;\n}\n.profile-name[data-v-26b7144a] {\r\n  margin-bottom: 8px;\r\n  font-size: 18px;\r\n  font-weight: 500;\n}\n.profile-activity[data-v-26b7144a] {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: #777;\n}\n.loading-height[data-v-26b7144a] {\r\n  height: 10px !important;\r\n  width: 100px;\n}\n.button-loading[data-v-26b7144a] {\r\n  height: 33px !important;\r\n  width: 150px;\r\n  background-color: #dfdfe0;\n}\n.button-loading[data-v-26b7144a]:hover {\r\n  height: 33px !important;\r\n  width: 150px;\r\n  background-color: #dfdfe0 !important;\n}\n.green-text[data-v-26b7144a] {\r\n  color: #00c569 !important;\n}\n@media screen and (max-width: 991px) {\n.profile[data-v-26b7144a] {\r\n    margin-bottom: 30px;\r\n    top: 15px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$parent.currentUser.user_info
    ? _c(
        "router-link",
        {
          staticClass: "profile",
          attrs: { to: "/profile/" + _vm.userprof, tag: "section" }
        },
        [
          _vm.photoLink
            ? _c("div", {
                staticClass: "profile-img",
                style: {
                  backgroundImage:
                    "url(" + _vm.storage + "/" + _vm.photoLink + ")"
                }
              })
            : _c("div", {
                staticClass: "profile-img",
                style: {
                  backgroundImage:
                    "url(" +
                    _vm.$parent.assets +
                    "assets/img/user-defult.png" +
                    ")"
                }
              }),
          _vm._v(" "),
          _c("div", { staticClass: "profile-content" }, [
            _c("div", {
              staticClass: "profile-name",
              domProps: { textContent: _vm._s(_vm.username) }
            }),
            _vm._v(" "),
            _vm.$parent.currentUser.user_info.is_seller == 1 &&
            _vm.$parent.currentUser.user_info.active_pakage_type == 3
              ? _c("div", { staticClass: "profile-activity green-text" }, [
                  _vm._v("\n      فروشنده ویژه\n    ")
                ])
              : _vm.$parent.currentUser.user_info.is_seller == 1
              ? _c("div", { staticClass: "profile-activity" }, [
                  _vm._v("\n      فروشنده\n    ")
                ])
              : _c("div", { staticClass: "profile-activity" }, [
                  _vm._v("خریدار")
                ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile-icon-wrapper" }, [
            _c("i", { staticClass: "fa fa-angle-left" })
          ])
        ]
      )
    : _c("section", { attrs: { id: "loadingSection" } }, [
        _c("div", { staticClass: "profile" }, [
          _c("div", { staticClass: "profile-img placeholder-content" }),
          _vm._v(" "),
          _c("div", { staticClass: "profile-content" }, [
            _c("div", {
              staticClass: "profile-name placeholder-content loading-height"
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "profile-activity placeholder-content loading-height"
            })
          ])
        ])
      ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26b7144a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_seller_menu_list_item_vue__ = __webpack_require__(371);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ac6a32c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_seller_menu_list_item_vue__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(532)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ac6a32c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_seller_menu_list_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ac6a32c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_seller_menu_list_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ac6a32c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_seller_menu_list_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\my-buskool\\my-buskool-components\\seller-menu-list-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ac6a32c", Component.options)
  } else {
    hotAPI.reload("data-v-7ac6a32c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(533);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7388add2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7ac6a32c\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./seller-menu-list-item.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-7ac6a32c\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./seller-menu-list-item.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.sub-header a.router-link-exact-active[data-v-7ac6a32c] {\r\n  color: #313942;\n}\n.sub-header a.router-link-exact-active[data-v-7ac6a32c]::after {\r\n  content: \" \";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: #00c569;\r\n  height: 3px;\r\n  width: 100%;\n}\r\n/* \r\n.main-menu a.router-link-exact-active,\r\na.active {\r\n  color: #404b55;\r\n  background: #637484;\r\n  border-right: 10px solid #4dc0bb;\r\n} */\n.main-menu a[data-v-7ac6a32c] {\r\n  color: #404b55;\r\n  padding: 20px 10px;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: right;\r\n  border-bottom: 1px solid #e9ecef;\r\n  font-size: 15px;\n}\n.main-menu a[data-v-7ac6a32c]::before {\r\n  font-family: \"Font Awesome 5 Free\";\r\n  font-weight: 900;\r\n  content: \"\\F104\";\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 24px;\r\n  font-size: 18px;\r\n  color: #cccccc;\n}\n.list-item:last-of-type a[data-v-7ac6a32c] {\r\n  border-bottom: none;\n}\n.main-menu[data-v-7ac6a32c] {\r\n  padding: 10px 0;\n}\n.main-menu a[data-v-7ac6a32c]:hover {\r\n  background: #f2f2f2;\n}\n.main-menu li.active a[data-v-7ac6a32c] {\r\n  color: #fff;\r\n  background: #637484;\n}\n.custom-badge[data-v-7ac6a32c] {\r\n  position: absolute;\r\n  left: 30px;\r\n  background: #e41c38;\r\n  height: 20px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  direction: ltr;\r\n  line-height: 1;\r\n  padding: 5px 3px;\r\n  min-width: 20px;\r\n  font-size: 12px;\r\n  top: 22px;\n}\n.custom-badge.upgrade[data-v-7ac6a32c] {\r\n  padding: 5px 10px;\r\n  height: 24px;\r\n  font-size: 14px;\n}\n.main-menu i[data-v-7ac6a32c] {\r\n  font-size: 18px;\r\n  position: relative;\r\n  top: 2px;\r\n  margin-left: 6px;\n}\n.star-badge[data-v-7ac6a32c] {\r\n  position: absolute;\r\n  left: 25px;\r\n  border-radius: 12px;\r\n  color: rgb(249, 242, 159);\r\n  text-align: center;\r\n  direction: ltr;\r\n  line-height: 1;\n}\n.star-badge i[data-v-7ac6a32c] {\r\n  font-size: 20px;\r\n  background: linear-gradient(\r\n    21deg,\r\n    rgb(199, 168, 79) 0%,\r\n    rgb(249, 242, 159) 51%,\r\n    rgb(199, 168, 79) 100%\r\n  );\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  margin: 2px 0;\n}\n#pricing-link[data-v-7ac6a32c] {\r\n  background: linear-gradient(-45deg, #00c569, #23d5ab, #21ad93, #23a6d5);\r\n  background-size: 400% 400%;\r\n  -webkit-animation: gradient-data-v-7ac6a32c 7s ease infinite;\r\n          animation: gradient-data-v-7ac6a32c 7s ease infinite;\r\n  color: #fff !important;\r\n  border: none;\r\n  margin: 15px auto 0;\r\n  border-radius: 12px;\n}\n#pricing-link[data-v-7ac6a32c]::before {\r\n  color: #fff !important;\n}\n#pricing-link:hover i[data-v-7ac6a32c] {\r\n  -webkit-animation: shake-data-v-7ac6a32c 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n          animation: shake-data-v-7ac6a32c 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n  border: none;\n}\n@-webkit-keyframes gradient-data-v-7ac6a32c {\n0% {\r\n    background-position: 0% 50%;\n}\n50% {\r\n    background-position: 100% 50%;\n}\n100% {\r\n    background-position: 0% 50%;\n}\n}\n@keyframes gradient-data-v-7ac6a32c {\n0% {\r\n    background-position: 0% 50%;\n}\n50% {\r\n    background-position: 100% 50%;\n}\n100% {\r\n    background-position: 0% 50%;\n}\n}\n@-webkit-keyframes shake-data-v-7ac6a32c {\n0% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n50% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n            transform: translate3d(0, -5px, 0);\n}\n100% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n}\n@keyframes shake-data-v-7ac6a32c {\n0% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n50% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n            transform: translate3d(0, -5px, 0);\n}\n100% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n}\n.verified-user[data-v-7ac6a32c] {\r\n  display: inline-block !important ;\n}\n.verified-user[data-v-7ac6a32c]::before {\r\n  left: 9px;\r\n  top: 6px;\n}\n.copy-right[data-v-7ac6a32c] {\r\n  text-align: center;\r\n  padding: 15px 15px 0;\r\n  direction: rtl;\r\n  line-height: 1.618;\r\n  position: relative;\r\n  z-index: 10;\r\n  color: #fff;\n}\n.copy-right p[data-v-7ac6a32c] {\r\n  font-size: 12px;\r\n  font-weight: 200;\n}\n.wallet-badge[data-v-7ac6a32c] {\r\n  position: absolute;\r\n  top: 24px;\r\n  left: 25px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "main-menu" }, [
      _c("ul", { staticClass: "list-unstyled" }, [
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "invitedUsers" } } }, [
              _c("i", { staticClass: "fa fa-dollar-sign" }),
              _vm._v(" "),
              _c("span", [_vm._v("درآمد ها")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "list-item hidden-md hidden-lg" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.showWallet()
                }
              }
            },
            [
              _c("i", { staticClass: "fa fa-wallet" }),
              _vm._v(" "),
              _c("span", [_vm._v("افزایش اعتبار کیف پول")]),
              _vm._v(" "),
              _c("span", { staticClass: "wallet-badge" }, [
                _vm._v("\n            اعتبار :\n            "),
                _c("span", {
                  staticClass: "blue-text",
                  domProps: {
                    textContent: _vm._s(
                      _vm.getNumberWithCommas(
                        _vm.$parent.currentUser.user_info.wallet_balance
                      )
                    )
                  }
                }),
                _vm._v(" "),
                _c("small", { staticClass: "blue-text" }, [_vm._v("تومان")])
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "statusSeller" } } }, [
              _c("i", { staticClass: "fa fa-chart-line" }),
              _vm._v(" "),
              _c("span", [_vm._v("داشبورد")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "buyAdRequestsSeller" } } },
              [
                _c("i", {
                  staticClass: "fa fa-list-alt",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("درخواست های خرید")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "messagesRequestSeller" } } },
              [
                _c("i", {
                  staticClass: "fa fa-list-ul",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("خریداران پیشنهادی")]),
                _vm._v(" "),
                _c("span", { staticClass: "star-badge" }, [
                  _c("i", { staticClass: "fa fa-star" })
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              {
                class: {
                  "router-link-exact-active ":
                    this.activeElement === 0 ||
                    _vm.$route.name == "successRegisterProduct"
                },
                attrs: { to: { name: "registerProductSeller" } }
              },
              [
                _c("i", {
                  staticClass: "fa fa-plus-square",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("ثبت محصول")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              {
                class: {
                  "router-link-exact-active ": this.activeElement === 0
                },
                attrs: { to: { name: "messagesSeller" } }
              },
              [
                _c("i", {
                  staticClass: "fas fa-comment-alt",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("پیام ها")]),
                _vm._v(" "),
                _vm.messageCount > 0
                  ? _c("span", {
                      staticClass: "custom-badge",
                      domProps: { textContent: _vm._s(_vm.messageCount) }
                    })
                  : _vm._e()
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "profileBasicSeller" } } },
              [
                _c("i", {
                  staticClass: "fa fa-user",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("ویرایش پروفایل")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "myProductsSeller" } } }, [
              _c("i", {
                staticClass: "fas fa-list-ol",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("محصولات من")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.$parent.currentUser.user_info.active_pakage_type < 3,
                expression:
                  "$parent.currentUser.user_info.active_pakage_type < 3"
              }
            ],
            staticClass: "list-item hidden-md hidden-lg"
          },
          [
            _c(
              "router-link",
              {
                attrs: {
                  id: "pricing-link",
                  to: { name: "dashboardPricingTableSeller" }
                }
              },
              [
                _c("i", {
                  staticClass: "fa fa-arrow-up",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("ارتقا عضویت")]),
                _vm._v(" "),
                _c("span", { staticClass: "custom-badge upgrade" }, [
                  _vm._v("ویژه")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "profileBasicSellerVeficiation" } } },
              [
                _c("span", { staticClass: "verified-user" }, [
                  _c("i", { staticClass: "fa fa-certificate" })
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("احراز هویت")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "guideSeller" } } }, [
              _c("i", {
                staticClass: "fa fa-question",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("راهنما")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "supportSeller" } } }, [
              _c("i", { staticClass: "fas fa-headset" }),
              _vm._v(" "),
              _c("span", [_vm._v("پشتیبانی")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-item hidden-md hidden-lg" }, [
      _c("a", { attrs: { href: "/logout" } }, [
        _c("i", { staticClass: "fas fa-sign-out-alt" }),
        _vm._v(" خروج ")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ac6a32c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_buyer_menu_list_item_vue__ = __webpack_require__(372);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40a53714_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_buyer_menu_list_item_vue__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(536)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40a53714"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_buyer_menu_list_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40a53714_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_buyer_menu_list_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40a53714_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_buyer_menu_list_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\my-buskool\\my-buskool-components\\buyer-menu-list-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40a53714", Component.options)
  } else {
    hotAPI.reload("data-v-40a53714", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(537);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("11204134", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40a53714\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyer-menu-list-item.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40a53714\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyer-menu-list-item.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.sub-header a.router-link-exact-active[data-v-40a53714] {\r\n  color: #313942;\n}\n.sub-header a.router-link-exact-active[data-v-40a53714]::after {\r\n  content: \" \";\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: #00c569;\r\n  height: 3px;\r\n  width: 100%;\n}\r\n/* \r\n.main-menu a.router-link-exact-active,\r\na.active {\r\n  color: #404b55;\r\n  background: #637484;\r\n  border-right: 10px solid #4dc0bb;\r\n} */\n.main-menu a[data-v-40a53714] {\r\n  color: #404b55;\r\n  padding: 20px 10px;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  text-align: right;\r\n  border-bottom: 1px solid #e9ecef;\r\n  font-size: 15px;\n}\n.main-menu a[data-v-40a53714]::before {\r\n  font-family: \"Font Awesome 5 Free\";\r\n  font-weight: 900;\r\n  content: \"\\F104\";\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 25px;\r\n  font-size: 18px;\r\n  color: #cccccc;\n}\n.list-item:last-of-type a[data-v-40a53714] {\r\n  border-bottom: none;\n}\n.main-menu[data-v-40a53714] {\r\n  padding: 10px 0;\n}\n.main-menu a[data-v-40a53714]:hover {\r\n  background: #f2f2f2;\n}\n.main-menu li.active a[data-v-40a53714] {\r\n  color: #fff;\r\n  background: #637484;\n}\n.custom-badge[data-v-40a53714] {\r\n  position: absolute;\r\n  left: 30px;\r\n  background: #e41c38;\r\n  height: 20px;\r\n  border-radius: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n  direction: ltr;\r\n  line-height: 1;\r\n  padding: 5px 3px;\r\n  min-width: 20px;\r\n  font-size: 12px;\r\n  top: 22px;\n}\n.custom-badge.upgrade[data-v-40a53714] {\r\n  padding: 5px 10px;\r\n  height: 24px;\r\n  font-size: 14px;\n}\n.main-menu i[data-v-40a53714] {\r\n  font-size: 18px;\r\n  position: relative;\r\n  top: 2px;\r\n  margin-left: 6px;\n}\n.star-badge[data-v-40a53714] {\r\n  position: absolute;\r\n  left: 25px;\r\n  border-radius: 12px;\r\n  color: rgb(249, 242, 159);\r\n  text-align: center;\r\n  direction: ltr;\r\n  line-height: 1;\n}\n.star-badge i[data-v-40a53714] {\r\n  font-size: 20px;\r\n  background: linear-gradient(\r\n    21deg,\r\n    rgb(199, 168, 79) 0%,\r\n    rgb(249, 242, 159) 51%,\r\n    rgb(199, 168, 79) 100%\r\n  );\r\n  background-clip: border-box;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  margin: 2px 0;\n}\n#pricing-link[data-v-40a53714] {\r\n  background: linear-gradient(-45deg, #00c569, #23d5ab, #21ad93, #23a6d5);\r\n  background-size: 400% 400%;\r\n  -webkit-animation: gradient-data-v-40a53714 7s ease infinite;\r\n          animation: gradient-data-v-40a53714 7s ease infinite;\r\n  color: #fff !important;\r\n  border: none;\n}\n#pricing-link:hover i[data-v-40a53714] {\r\n  -webkit-animation: shake-data-v-40a53714 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n          animation: shake-data-v-40a53714 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n          transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-perspective: 1000px;\r\n          perspective: 1000px;\r\n  border: none;\n}\n@-webkit-keyframes gradient-data-v-40a53714 {\n0% {\r\n    background-position: 0% 50%;\n}\n50% {\r\n    background-position: 100% 50%;\n}\n100% {\r\n    background-position: 0% 50%;\n}\n}\n@keyframes gradient-data-v-40a53714 {\n0% {\r\n    background-position: 0% 50%;\n}\n50% {\r\n    background-position: 100% 50%;\n}\n100% {\r\n    background-position: 0% 50%;\n}\n}\n@-webkit-keyframes shake-data-v-40a53714 {\n0% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n50% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n            transform: translate3d(0, -5px, 0);\n}\n100% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n}\n@keyframes shake-data-v-40a53714 {\n0% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n50% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n            transform: translate3d(0, -5px, 0);\n}\n100% {\r\n    -webkit-transform: translate3d(0, -1px, 0);\r\n            transform: translate3d(0, -1px, 0);\n}\n}\n.verified-user[data-v-40a53714] {\r\n  display: inline-block !important ;\n}\n.verified-user[data-v-40a53714]::before {\r\n  left: 9px;\r\n  top: 6px;\n}\n.copy-right[data-v-40a53714] {\r\n  text-align: center;\r\n  padding: 15px 15px 0;\r\n  direction: rtl;\r\n  line-height: 1.618;\r\n  position: relative;\r\n  z-index: 10;\r\n  color: #fff;\n}\n.copy-right p[data-v-40a53714] {\r\n  font-size: 12px;\r\n  font-weight: 200;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "main-menu" }, [
      _c("ul", { staticClass: "list-unstyled" }, [
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "profileBasicBuyer" } } },
              [
                _c("i", {
                  staticClass: "fa fa-user",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("ویرایش پروفایل")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "registerRequestBuyer" } } },
              [
                _c("i", {
                  staticClass: "fa fa-plus-square",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("ثبت درخواست خرید")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              {
                class: {
                  "router-link-exact-active ": this.activeElement === 0
                },
                attrs: { to: { name: "messagesBuyer" } }
              },
              [
                _c("i", {
                  staticClass: "fas fa-comment-alt",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("پیام ها")]),
                _vm._v(" "),
                _vm.messageCount > 0
                  ? _c("span", {
                      staticClass: "custom-badge",
                      domProps: { textContent: _vm._s(_vm.messageCount) }
                    })
                  : _vm._e()
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c("router-link", { attrs: { to: { name: "specialProducts" } } }, [
              _c("i", {
                staticClass: "fas fa-list-ol",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("فروشندگان پیشنهادی")]),
              _vm._v(" "),
              _c("span", { staticClass: "star-badge" }, [
                _c("i", { staticClass: "fa fa-star" })
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "myBuyAdRequestsBuyer" } } },
              [
                _c("i", {
                  staticClass: "fa fa-list-alt",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("درخواست های من")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item hidden-md hidden-lg" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "profileBasicBuyerVeficiation" } } },
              [
                _c(
                  "span",
                  { staticClass: "verified-user", attrs: { title: "" } },
                  [_c("i", { staticClass: "fa fa-certificate" })]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("احراز هویت")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "guideBuyer" } } }, [
              _c("i", {
                staticClass: "fa fa-question-circle",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("راهنما")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "list-item" },
          [
            _c("router-link", { attrs: { to: { name: "supportBuyer" } } }, [
              _c("i", { staticClass: "fas fa-headset" }),
              _vm._v(" "),
              _c("span", [_vm._v("پشتیبانی")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-item hidden-md hidden-lg" }, [
      _c("a", { attrs: { href: "/logout" } }, [
        _c("i", { staticClass: "fas fa-sign-out-alt" }),
        _vm._v(" خروج ")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40a53714", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_swith_buttons_vue__ = __webpack_require__(373);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61ac8517_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swith_buttons_vue__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(540)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61ac8517"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_swith_buttons_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61ac8517_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swith_buttons_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61ac8517_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swith_buttons_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\my-buskool\\my-buskool-components\\swith-buttons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61ac8517", Component.options)
  } else {
    hotAPI.reload("data-v-61ac8517", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(541);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("121352e6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-61ac8517\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./swith-buttons.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-61ac8517\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./swith-buttons.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\r\n/* Create a custom radio button */\n.radio-wrapper[data-v-61ac8517] {\r\n  margin: 25px auto 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n  direction: rtl;\n}\n.label-radio[data-v-61ac8517] {\r\n  display: inline-block;\r\n\r\n  position: relative;\r\n\r\n  cursor: pointer;\r\n\r\n  -webkit-user-select: none;\r\n\r\n  -moz-user-select: none;\r\n\r\n  -ms-user-select: none;\r\n\r\n  user-select: none;\r\n\r\n  direction: rtl;\r\n\r\n  padding: 0px 36px 0 12px;\r\n  font-size: 16px;\n}\n.label-radio[data-v-61ac8517]:nth-of-type(2) {\r\n  margin-right: 6px;\n}\n.label-radio label[data-v-61ac8517] {\r\n  margin: 9px auto 12px;\r\n  font-weight: 400;\n}\r\n\r\n/* Hide the browser's default radio button */\n.label-radio input[data-v-61ac8517] {\r\n  position: absolute;\r\n\r\n  opacity: 0;\r\n\r\n  cursor: pointer;\r\n\r\n  z-index: 2;\r\n\r\n  left: 0;\r\n\r\n  right: 0;\r\n\r\n  top: 0;\r\n\r\n  bottom: 0;\r\n\r\n  height: 100%;\r\n\r\n  margin: 0;\r\n\r\n  width: 100%;\n}\n.checkmark[data-v-61ac8517] {\r\n  position: absolute;\r\n\r\n  top: 10px;\r\n\r\n  right: 10px;\r\n\r\n  height: 15px;\r\n\r\n  width: 15px;\r\n\r\n  border-radius: 50%;\r\n\r\n  border: 1px solid #eee;\r\n\r\n  z-index: 1;\n}\n.label-radio label > span[data-v-61ac8517],\r\n.label-radio label > svg[data-v-61ac8517] {\r\n  position: relative;\r\n  z-index: 1;\n}\r\n\r\n/* When the radio button is checked, add a blue background */\n.label-radio .checkmark.active[data-v-61ac8517] {\r\n  background-color: none;\r\n  border: none;\n}\n.label-radio input:checked ~ label[data-v-61ac8517]::after {\r\n  background-color: #4dc0bb;\r\n  border-color: #4dc0bb;\n}\n.label-radio label[data-v-61ac8517]::after {\r\n  content: \"\";\r\n\r\n  display: block;\r\n\r\n  position: absolute;\r\n\r\n  left: 0;\r\n\r\n  right: 0;\r\n\r\n  top: -2px;\r\n\r\n  bottom: 0;\r\n\r\n  z-index: 0;\r\n\r\n  margin: 0;\r\n\r\n  padding: 0;\r\n\r\n  border-radius: 12px;\r\n\r\n  border: 1px solid #556080;\n}\n.label-radio.error label[data-v-61ac8517]::after {\r\n  border: 1px solid #e41c38;\n}\n.label-radio label svg[data-v-61ac8517] {\r\n  width: 20px;\r\n  height: 30px;\r\n  float: right;\r\n  margin-top: -7px;\n}\n.label-radio label span[data-v-61ac8517] {\r\n  margin: 0 5px;\n}\n.label-radio.active label span[data-v-61ac8517] {\r\n  color: #fff;\n}\n.label-radio.active .checkmark.active[data-v-61ac8517] {\r\n  color: #fff;\n}\n.active .cls-1[data-v-61ac8517] {\r\n  fill: #fff;\n}\n.active .cls-2[data-v-61ac8517] {\r\n  fill: #fff;\n}\n.cls-1[data-v-61ac8517] {\r\n  fill: #556080;\n}\n.cls-2[data-v-61ac8517] {\r\n  fill: #556080;\n}\n.little_header .main-right-header .label-radio[data-v-61ac8517] {\r\n  margin-right: 0;\n}\n.button-title[data-v-61ac8517] {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  text-align: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "switch-buttons" }, [
    _c("p", { staticClass: "button-title" }, [
      _vm._v("\n    نوع کاربری\n    "),
      _vm.isSeller == 1
        ? _c("span", [_vm._v("فروشنده")])
        : _c("span", [_vm._v("خریدار")]),
      _vm._v("\n    فعال است\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "radio-wrapper" }, [
      _c(
        "div",
        { staticClass: "label-radio", class: { active: _vm.isSeller == 1 } },
        [
          _c("input", {
            attrs: {
              type: "radio",
              value: "0",
              name: _vm.mobile == 1 ? "mobileMyRadio" : "myRadio"
            },
            domProps: { checked: _vm.isSeller == 1 },
            on: {
              click: function($event) {
                _vm.switchRole()
              }
            }
          }),
          _vm._v(" "),
          _vm.isSeller == 0
            ? _c("span", { staticClass: "checkmark" })
            : _c("span", { staticClass: "checkmark active" }, [
                _c("i", { staticClass: "fa fa-check" })
              ]),
          _vm._v(" "),
          _c("label", [
            _c(
              "svg",
              {
                attrs: {
                  id: "Layer_1",
                  "data-name": "Layer 1",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "17.511",
                  height: "24.462",
                  viewBox: "0 0 17.511 24.462"
                }
              },
              [
                _c(
                  "g",
                  {
                    attrs: {
                      id: "Layer_1",
                      "data-name": "Layer 1",
                      transform: "translate(0 0)"
                    }
                  },
                  [
                    _c("path", {
                      staticClass: "cls-1 active",
                      attrs: {
                        id: "Path_11",
                        "data-name": "Path 11",
                        d:
                          "M14.915,13.164l-3.6-1.043a.98.98,0,0,1-.7-.936V10.3a.318.318,0,0,0-.018-.1,3.474,3.474,0,0,0,1.183-2.611V6.03H14.35V5.138H11.774V3.582a3.482,3.482,0,1,0-6.964,0V5.138H2.185V6.03H4.811V7.586a3.474,3.474,0,0,0,1.155,2.588.318.318,0,0,0-.026.127v.885a.98.98,0,0,1-.7.936L1.634,13.164A2.275,2.275,0,0,0,0,15.339v4.316a.318.318,0,0,0,.637,0V15.339a1.635,1.635,0,0,1,1.175-1.564l1.282-.369v6.627a.478.478,0,1,0,.955,0v-6.7a.475.475,0,0,0-.041-.191l1.223-.354v1.465a1.517,1.517,0,0,0,1.539,1.491H9.764A1.517,1.517,0,0,0,11.3,14.252V12.781l1.248.361a.477.477,0,0,0-.015.118v6.773a.478.478,0,1,0,.955,0V13.415l1.246.361a1.635,1.635,0,0,1,1.175,1.563v4.316a.318.318,0,1,0,.637,0V15.339A2.275,2.275,0,0,0,14.915,13.164ZM5.448,3.582a2.845,2.845,0,1,1,5.69,0V5.138H5.448Zm0,4V6.03h5.69V7.586a2.845,2.845,0,1,1-5.69,0ZM9.764,15.1H6.771a.88.88,0,0,1-.9-.854V12.517a1.62,1.62,0,0,0,.708-1.333v-.573a3.471,3.471,0,0,0,3.4.02v.55a1.62,1.62,0,0,0,.694,1.324v1.742a.88.88,0,0,1-.9.858Z",
                        transform: "translate(0 -0.1)"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticClass: "cls-1 active",
                      attrs: {
                        id: "Path_12",
                        "data-name": "Path 12",
                        d:
                          "M101.307,118.036a2.068,2.068,0,0,0,1.911-1.314.318.318,0,1,0-.594-.231,1.414,1.414,0,0,1-2.64,0,.318.318,0,1,0-.594.231A2.068,2.068,0,0,0,101.307,118.036Z",
                        transform: "translate(-93.039 -108.888)"
                      }
                    })
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("فروشنده")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "label-radio", class: { active: _vm.isSeller == 0 } },
        [
          _c("input", {
            attrs: {
              type: "radio",
              value: "1",
              name: _vm.mobile == 1 ? "mobileMyRadio" : "myRadio"
            },
            domProps: { checked: _vm.isSeller == 0 },
            on: {
              click: function($event) {
                _vm.switchRole()
              }
            }
          }),
          _vm._v(" "),
          _vm.isSeller == 1
            ? _c("span", { staticClass: "checkmark" })
            : _c("span", { staticClass: "checkmark active" }, [
                _c("i", { staticClass: "fa fa-check" })
              ]),
          _vm._v(" "),
          _c("label", [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16.55",
                  height: "20.411",
                  viewBox: "0 0 16.55 20.411"
                }
              },
              [
                _c("path", {
                  staticClass: "cls-2",
                  attrs: {
                    id: "Path_7",
                    "data-name": "Path 7",
                    d:
                      "M15.781,12.574l-3.81-1.1a1.017,1.017,0,0,1-.2-.082.333.333,0,0,0-.16-.105,1.036,1.036,0,0,1-.388-.8V9.419a3.676,3.676,0,0,0,1.233-2.747V3.784a3.684,3.684,0,1,0-7.368,0V6.672A3.675,3.675,0,0,0,6.286,9.385v1.094a1.037,1.037,0,0,1-.745.991l-3.812,1.1A2.407,2.407,0,0,0,0,14.875v4.567a.337.337,0,1,0,.674,0V14.875a1.73,1.73,0,0,1,1.243-1.654l1.415-.409a.331.331,0,0,0,.026.032L5.17,14.656a1.38,1.38,0,0,0,1.781.149l.636-.453a1.213,1.213,0,0,0,.45.722L6.613,21.943a.526.526,0,0,0,.127.451l1.425,1.894.031.036a.819.819,0,0,0,1.157,0l.017-.017,1.442-1.915a.528.528,0,0,0,.123-.455L9.515,15.073a1.213,1.213,0,0,0,.449-.721l.636.453a1.38,1.38,0,0,0,1.781-.149l1.834-1.834,1.38.4a1.73,1.73,0,0,1,1.243,1.654v4.567a.337.337,0,0,0,.674,0V14.875A2.407,2.407,0,0,0,15.781,12.574ZM10.012,1.05l-.03-.024.037.017ZM5.766,6.674V4.89q.186.018.373.018A3.936,3.936,0,0,0,8.918,3.761L9.929,2.751a1.531,1.531,0,0,1,.795.466,2.382,2.382,0,0,0,1.062.616v2.84a3.01,3.01,0,1,1-6.021,0Zm3.01,3.684A3.661,3.661,0,0,0,10.554,9.9v.582a1.706,1.706,0,0,0,.411,1.106l-1.9,1.351a1.17,1.17,0,0,0-.58,0L6.561,11.568a1.705,1.705,0,0,0,.4-1.089V9.873a3.66,3.66,0,0,0,1.816.484Zm-2.219,3.9a.708.708,0,0,1-.914-.077L4.064,12.6l1.664-.482A1.685,1.685,0,0,0,6.013,12L7.86,13.319c-.007.009-.015.016-.022.025Zm3.7,7.75-1.4,1.855a.144.144,0,0,1-.179,0l-1.4-1.855,1.383-6.681c.034,0,.067.005.1.005a.67.67,0,0,0,.1-.005ZM11.9,14.178a.708.708,0,0,1-.913.076l-1.28-.911c-.007-.009-.015-.016-.022-.025l1.83-1.3a1.685,1.685,0,0,0,.264.1l1.7.491Z",
                    transform: "translate(0 -0.1)"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "cls-1",
                  attrs: {
                    id: "Path_8",
                    "data-name": "Path 8",
                    d:
                      "M199.657,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,199.657,230.69Z",
                    transform: "translate(-185.887 -215.15)"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "cls-1",
                  attrs: {
                    id: "Path_9",
                    "data-name": "Path 9",
                    d:
                      "M51.407,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,51.407,230.69Z",
                    transform: "translate(-47.628 -215.15)"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "cls-1",
                  attrs: {
                    id: "Path_10",
                    "data-name": "Path 10",
                    d:
                      "M101.82,98.128a2.188,2.188,0,0,0,2.022-1.39.337.337,0,1,0-.628-.244,1.5,1.5,0,0,1-2.793,0,.337.337,0,1,0-.628.244,2.188,2.188,0,0,0,2.028,1.39Z",
                    transform: "translate(-93.045 -89.797)"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("span", [_vm._v("خریدار")])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61ac8517", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-buskool-wrapper" },
    [
      _c("ProfileInfo", {
        attrs: {
          photoLink: _vm.currentUser.profile.profile_photo,
          storage: _vm.str,
          username:
            _vm.currentUser.user_info.first_name +
            " " +
            _vm.currentUser.user_info.last_name,
          userprof: _vm.currentUser.user_info.user_name
        }
      }),
      _vm._v(" "),
      _vm.$parent.isSeller == 1
        ? _c(
            "div",
            { staticClass: "row" },
            [
              _vm.$parent.currentUser.user_info &&
              _vm.$parent.currentUser.user_info.active_pakage_type == 0
                ? _c(
                    "div",
                    { staticClass: "promotion-wrapper" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "promotion-image",
                          attrs: { to: { name: "dashboardPricingTableSeller" } }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(544),
                              alt: "promotion text"
                            }
                          }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-angle-left" })
                        ]
                      )
                    ],
                    1
                  )
                : !_vm.$parent.currentUser.user_info
                ? _c("div", { staticClass: "promotion-wrapper" }, [
                    _c("p", {
                      staticClass:
                        "placeholder-content default-button-full-with"
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "invite-section",
                  attrs: { to: { name: "referralSeller" }, tag: "button" }
                },
                [
                  _c("div", { staticClass: "invite-box" }, [
                    _c(
                      "div",
                      { staticClass: "invite-image-wrapper pull-left" },
                      [
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(545),
                            alt: "promotion text"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "invite-content text-rtl pull-right" },
                      [
                        _c("p", [
                          _vm._v(
                            "با معرفی باسکول به همکارانتان, کسب در آمد کنید!"
                          )
                        ]),
                        _vm._v(" "),
                        _c("button", { staticClass: "bg-red" }, [
                          _vm._v("کسب در آمد")
                        ])
                      ]
                    )
                  ])
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu-list text-rtl" },
        [
          _vm.$parent.isSeller == 1 ? _c("SellerMenuList") : _c("BuyerMenuList")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "switch-wrapper row hidden-md hidden-lg" },
        [
          _c("SwitchButtons", { attrs: { isSeller: _vm.$parent.isSeller } }),
          _vm._v(" "),
          _vm._m(0)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-biskool-image-wrapper" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(546),
          alt: "my buskool"
        }
      })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c45b00d", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "/images/vertical-promotion-text.gif?ea154f0075ed01c11877049655540e00";

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "/images/alert-image.svg?612fa0ed7f91bd2ecbbe875c1de9412d";

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "/images/my-buskool.jpg?821bea91fbaee0d6fe1980249837a1e3";

/***/ })

});