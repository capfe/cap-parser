
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"("                   return '('
")"                   return ')'
"PI"                  return 'PI'
"E"                   return 'E'
<<EOF>>               return 'EOF'
.                     return 'INVALID'


%{
    var debug = require('debug')('jsc: lexer');
    var s, s2, s3;
    var rv, rv2, e_offset, col, row, len, value;
    var match, match2;
    // debug(YY_START);
%}

