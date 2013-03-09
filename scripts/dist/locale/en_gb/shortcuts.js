window.LOCALE = "en_gb"; var shortcuts = [{"name":"a word","input":"(a single |one |1 |a(n)? |any )?word","output":"\\S+"},{"name":"zero or more words","input":"(zero|0|none) or more (of )?words","output":"(\\S+\\s??\\b)*"},{"name":"one or more words","input":"((one|1) or more |any ((number|amount) of )?)?words","output":"(\\S+\\s??\\b)+"},{"name":"? words","input":"([0-9]+) words","output":"(\\S+\\s??\\b){$1}"},{"name":"? or more words","input":"(at least )?([2-9]|[1-9][0-9]+) (or more )?words","output":"(\\S+\\s??\\b){$2,}"},{"name":"between ? and ? words","input":"(between |from )?([0-9]+) (and|to) ([0-9]+) words","output":"(\\S+\\s??\\b){$2,$4}"},{"name":"a email address","input":"(a single |one |1 |a(n)? |any )?email( address)?","output":"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}"},{"name":"zero or more UK postcodes","input":"(zero|0|none) or more (of )?(uk |UK )?post(al)? ?codes","output":"([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)*"},{"name":"one or more UK postcodes","input":"((one|1) or more |any ((number|amount) of )?)?(uk |UK )?post(al)? ?codes","output":"([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)+"},{"name":"? UK postcodes","input":"([0-9]+) (uk |UK )?post(al)? ?codes","output":"([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA){$1}"},{"name":"? or more UK postcodes","input":"(at least )?([2-9]|[1-9][0-9]+) (or more )?(uk |UK )?post(al)? ?codes","output":"([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA){$2,}"},{"name":"between ? and ? UK postcodes","input":"(between |from )?([0-9]+) (and|to) ([0-9]+) (uk |UK )?post(al)? ?codes","output":"([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA){$2,$4}"},{"name":"a UK postcode","input":"(a single |one |1 |a(n)? |any )?(uk |UK )?post(al)? ?code","output":"([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)"},{"name":"a IP address","input":"(a single |one |1 |a(n)? |any )?(ip address|IP|^ip$)( address)?","output":"(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])"},{"name":"a phone number","input":"(a single |one |1 |a(n)? |any )?(tele)?(phone) num(ber)?","output":"(\\(?\\+?[0-9]*\\)?)?[0-9_\\- \\(\\)]*"},{"name":"a HTML tag","input":"(a single |one |1 |a(n)? |any )??(HTML|html)( tag)?","output":"<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*>(.*?)</\\1>"},{"name":"a Hex colour","input":"(a single |one |1 |a(n)? |any )?hex colou?r","output":"#(?:[0-9a-fA-F]{3}){1,2}"},{"name":"a a URL","input":"(a single |one |1 |a(n)? |any )?(url|URL)","output":"(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*/?"},{"name":"a Visa credit","input":"(a single |one |1 |a(n)? |any )?(visa|VISA|Visa)( credit| credit(-| ))?(card)?","output":"4[0-9]{12}(?:[0-9]{3})?"},{"name":"a Mastercard","input":"(a single |one |1 |a(n)? |any )?(mastercard|Mastercard)( credit| credit(-| ))?(card)?","output":"5[1-5][0-9]{14}"},{"name":"a American Express","input":"(a single |one |1 |a(n)? |any )?(amex|Amex|AmEx|American Express|american express)( credit| credit(-| ))?(card)?","output":"3[47][0-9]{13}"}];var shortcut_names = ["word","words","email address","UK postcode","IP address","phone number","HTML tag","Hex colour","a URL","Visa credit","Mastercard","American Express"];