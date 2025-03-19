Implement an abstraction for working with URLs. It should extract and change parts of the address. Interface:

- `make(url)` - Constructor. Creates a URL.
- `setProtocol(data, protocol)` - Setter. Changes the scheme.
- `getProtocol(data)` - Selector (getter). Retrieves the scheme.
- `setHost(data, host)` - Setter. Changes the host.
- `getHost(data)` - Getter. Retrieves the host.
- `setPath(data, path)` - Setter. Changes the query string.
- `getPath(data)` - Getter. Retrieves the query string.
- `setQueryParam(data, key, value)` - Setter. Sets the value for the query parameter.
- `getQueryParam(data, paramName, defaultValue = null)` - Getter. Retrieves the value for the query parameter. The third parameter of the function is a default value, which is returned when there was no such parameter in the request
- `toString(data)` - Getter. Converts the URL to a string.