%{
    var schema = {
        '$schema': 'http://json-schema.org/draft-04/schema#',
        'id': 'http://jsonschema.net'
    };
%}


%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

/* enable EBNF grammar syntax */
%ebnf

%%
expressions
    : e EOF
        {return $1;}
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {$$ = $1/$3;}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    ;
