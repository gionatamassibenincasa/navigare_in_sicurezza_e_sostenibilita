const esercizi = [
  {
    "progetto": "Notazione posizionale base 2 a 8 bit fissi - Sintassi non ricorsiva",
    "scheletro": "/**\n* @autore: COGNOME NOME\n* @data: 2021-05-03\n*/\n#include <iostream>\nusing namespace std;\n\nvoid uchar(unsigned char n) {\n\tfor (int b = ...; b >= ...; b..) {\n\t\tconst unsigned char dueAllaN = ... << ...;\n\t\tbool maggiore = n >= dueAllaN;\n\t\tif (maggiore) {\n\t\t\tcout << '...';\n\t\t\tn ... dueAllaN;\n\t\t} else {\n\t\t\tcout << '...';\n\t\t}\n\t}\n\tcout << endl;\n}\n\nint main() {\n\tuchar(15);\n\n\treturn 0;\n}\n\n",
    "testo": "<p>Scrivi la funzione <code>void uchar(unsigned char n)</code> che stampa la rappresentazione posizionale binaria ad 8 bit del numero dato.<br>\n<strong>Esempio</strong>: <code>uchar(15)</code> stampa: <code>00001111</code>.<br>\nLa complessità deve essere logaritmica.</p>\n",
    "soluzione": "\n\t\t\t/**\n\t\t\t * @autore: COGNOME NOME\n\t\t\t * @data: 2021-05-03\n\t\t\t */\n\t\t\t #include <iostream>\n\t\t\t using namespace std;\n\t\t\t \n\t\t\t void uchar(unsigned char n) {\n\t\t\t   for (int b = 7; b >= 0; b--) {\n\t\t\t\t const unsigned char dueAllaN = 1 << b;\n\t\t\t\t bool maggiore = n >= dueAllaN;\n\t\t\t\t if (maggiore) {\n\t\t\t\t   cout << '1';\n\t\t\t\t   n -=dueAllaN;\n\t\t\t\t } else {\n\t\t\t\t   cout << '0';\n\t\t\t\t }\n\t\t\t   }\n\t\t\t   cout << endl;\n\t\t\t }\n\t\t\t \n\t\t\t int main() {\n\t\t\t\t uchar(15);\n\n\t\t\t\t return 0;\n\t\t\t }\n\t\t\t "
  },
  {
    "progetto": "Notazione posizionale base 2 a 8 bit fissi - Definizione ricorsiva",
    "scheletro": "/**\n* @autore: COGNOME NOME\n* @data: 2021-05-03\n*/\n#include <iostream>\nusing namespace std;\n\nvoid uchar_aux(unsigned char n, int b) {\n\t...\n}\n\nvoid uchar(unsigned char n) {\n\tuchar_aux(..., ...);\n}\n\nint main() {\n\tuchar(15);\n\n\treturn 0;\n}\n\n",
    "testo": "<p>Scrivi la funzione <code>void uchar(unsigned char n)</code> che stampa la rappresentazione posizionale binaria ad 8 bit del numero dato.<br>\n<strong>Esempio</strong>: <code>uchar(15)</code> stampa: <code>00001111</code>.<br>\nLa complessità deve essere logaritmica.</p>\n",
    "soluzione": "\n\t\t\t/**\n\t\t\t * @autore: COGNOME NOME\n\t\t\t * @data: 2021-05-03\n\t\t\t */\n\t\t\t #include <iostream>\n\t\t\t using namespace std;\n\t\t\t \n\t\t\t void uchar(unsigned char n) {\n\t\t\t   for (int b = 7; b >= 0; b--) {\n\t\t\t\t const unsigned char dueAllaN = 1 << b;\n\t\t\t\t bool maggiore = n >= dueAllaN;\n\t\t\t\t if (maggiore) {\n\t\t\t\t   cout << '1';\n\t\t\t\t   n -=dueAllaN;\n\t\t\t\t } else {\n\t\t\t\t   cout << '0';\n\t\t\t\t }\n\t\t\t   }\n\t\t\t   cout << endl;\n\t\t\t }\n\t\t\t \n\t\t\t int main() {\n\t\t\t\t uchar(15);\n\n\t\t\t\t return 0;\n\t\t\t }\n\t\t\t "
  },
  {
    "progetto": "Regola di Horner",
    "scheletro": "/**\n* @autore: COGNOME NOME\n* @data: 2021-05-03\n*/\n#include <iostream>\nusing namespace std;\n\ndouble combinazione_lineare(...) {\n\treturn ...;\n}\n\ndouble valuta_polinomio3(double a, double b, double c, double d, double x) {\n\treturn combinazione_lineare(...);\n}\n\nint main() {\n\tcout << valuta_polinomio3(1., 2., 3., 4., 5.) << endl;\n\n\treturn 0;\n}\n",
    "soluzione": "#include <iostream>\nusing namespace std;\n\ndouble combinazione_lineare(double m, double q, double x) {\n\treturn m*x+q;\n}\n\ndouble valuta_polinomio3(double a, double b, double c, double d, double x) {\n\treturn combinazione_lineare(combinazione_lineare(combinazione_lineare(a, b, x), c, x), d, x);\n}\n\nint main() {\n\tcout << valuta_polinomio3(1., 2., 3., 4., 5.) << endl;\n\n\treturn 0;\n}\n",
    "testo": "<p>Si vuole determinare il valore assunto dal polinomio\n<span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>b</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>c</mi><mi>x</mi><mo>+</mo><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">a x^3 + b x^2 + c x + d</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.897438em;vertical-align:-0.08333em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141079999999999em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.897438em;vertical-align:-0.08333em;\"></span><span class=\"mord mathnormal\">b</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141079999999999em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.66666em;vertical-align:-0.08333em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.69444em;vertical-align:0em;\"></span><span class=\"mord mathnormal\">d</span></span></span></span></span> quando assegnamo un valore ad <span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.43056em;vertical-align:0em;\"></span><span class=\"mord mathnormal\">x</span></span></span></span></span>.<br>\nSi scriva la funzione <code>valuta_polinomio3</code> che ha per\nargomenti i numeri <code>a</code>, <code>b</code>, <code>c</code>, <code>d</code> e <code>x</code>, sfruttando\nl'idea che <span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo stretchy=\"false\">(</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>b</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>c</mi><mi>x</mi><mo>+</mo><mi>d</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\">)</mo><mi>x</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\">)</mo><mi>x</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">p(x) = a x^3 + b x^2 + c x + d = (((a x + b) x + c) x + d)</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">p</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">x</span><span class=\"mclose\">)</span><span class=\"mspace\" style=\"margin-right:0.2777777777777778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2777777777777778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.897438em;vertical-align:-0.08333em;\"></span><span class=\"mord mathnormal\">a</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141079999999999em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">3</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.897438em;vertical-align:-0.08333em;\"></span><span class=\"mord mathnormal\">b</span><span class=\"mord\"><span class=\"mord mathnormal\">x</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141079999999999em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">2</span></span></span></span></span></span></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.66666em;vertical-align:-0.08333em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.69444em;vertical-align:0em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mspace\" style=\"margin-right:0.2777777777777778em;\"></span><span class=\"mrel\">=</span><span class=\"mspace\" style=\"margin-right:0.2777777777777778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mopen\">(</span><span class=\"mopen\">(</span><span class=\"mopen\">(</span><span class=\"mord mathnormal\">a</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">b</span><span class=\"mclose\">)</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">c</span><span class=\"mclose\">)</span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1em;vertical-align:-0.25em;\"></span><span class=\"mord mathnormal\">d</span><span class=\"mclose\">)</span></span></span></span></span>\ne che tale riscrittura ha come sotto-problema comune il\ncalcolo di <span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>a</mi><mo mathvariant=\"normal\">′</mo></msup><mi>x</mi><mo>+</mo><msup><mi>b</mi><mo mathvariant=\"normal\">′</mo></msup></mrow><annotation encoding=\"application/x-tex\">a^\\prime x + b^\\prime</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.835222em;vertical-align:-0.08333em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">a</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.751892em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span><span class=\"mord mathnormal\">x</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.751892em;vertical-align:0em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">b</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.751892em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\">′</span></span></span></span></span></span></span></span></span></span></span></span>.<br>\n<strong>Domande</strong>: quante somme e quante moltiplicazioni devo calcolare? Se avessi calcolato invece le potenze con un algoritmo di complessità lineare? E con uno con complessità logarirmica?</p>\n"
  },
  {
    "progetto": "Somma dei primi n naturali, soluzione ricorsiva",
    "scheletro": "/**\n* @autore: COGNOME NOME\n* @data: 2021-05-03\n*/\n...\n...\n...\nint somma_aux(int prossimo, int n, int accumulatore) {\n\tif (...) {\n\t\t\n\t} else {\n\t\treturn somma_aux(..., ..., ...);\n\t}\n}\n\nint somma_fino_a(int n) {\n\treturn somma_aux(1, n, 0);\n}\n\nint main() {\n\tcout << somma_fino_a(10) << endl;\n\t\n\treturn 0;\n}\n",
    "testo": "<p>Si scriva una funzione <code>somma_fino_a</code> con un argomento <code>n</code>\nche somma tutti i numeri naturali compresi tra 1 e <code>n</code> usando una definizione ricorsiva.<br>\n<strong>Esempio</strong>: <code>somma_fino_a(10)</code> restituisce 55;<br>\n<strong>Domanda</strong>: che complessità ha il processo?</p>\n"
  },
  {
    "progetto": "Serie",
    "scheletro": "/**\n* @autore: COGNOME NOME\n* @data: 2021-05-03\n*/\n...\n...\n...\n\nint main() {\n\treturn 0;\n}\n",
    "testo": "<p>Si scriva una funzione che somma tutti i termini del tipo\n<span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mi>n</mi></mrow></msup><mo separator=\"true\">,</mo><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">N</mi></mrow><annotation encoding=\"application/x-tex\">2^{-n}, n \\in \\mathbb{N}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.9657709999999999em;vertical-align:-0.19444em;\"></span><span class=\"mord\"><span class=\"mord\">2</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.771331em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mathnormal mtight\">n</span></span></span></span></span></span></span></span></span><span class=\"mpunct\">,</span><span class=\"mspace\" style=\"margin-right:0.16666666666666666em;\"></span><span class=\"mord mathnormal\">n</span><span class=\"mspace\" style=\"margin-right:0.2777777777777778em;\"></span><span class=\"mrel\">∈</span><span class=\"mspace\" style=\"margin-right:0.2777777777777778em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.68889em;vertical-align:0em;\"></span><span class=\"mord\"><span class=\"mord mathbb\">N</span></span></span></span></span></span> arrrestandosi quando il prossimo addendo\nè inferiore a <span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><msup><mn>0</mn><mrow><mo>−</mo><mn>16</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">10^{-16}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141079999999999em;vertical-align:0em;\"></span><span class=\"mord\">1</span><span class=\"mord\"><span class=\"mord\">0</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141079999999999em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">1</span><span class=\"mord mtight\">6</span></span></span></span></span></span></span></span></span></span></span></span></span>.\nIl valore da trovare approssima <span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo>+</mo><mo>⋯</mo></mrow><annotation encoding=\"application/x-tex\">1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\cdots</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.72777em;vertical-align:-0.08333em;\"></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">2</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">4</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">8</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span><span class=\"mord mtight\">6</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.31em;vertical-align:0em;\"></span><span class=\"minner\">⋯</span></span></span></span></span></p>\n"
  },
  {
    "progetto": "Pi greco quarti",
    "scheletro": "/**\n* @autore: COGNOME NOME\n* @data: 2021-05-03\n*/\n...\n...\n...\n\nint main() {\n\n\treturn 0;\n}\n\t",
    "testo": "<p>Scrivere una funzione <code>pi</code> che calcola il quadruplo della\nsua funzione definita internamente <code>pi_quarti</code>.</p>\n<p><code>pi_quarti</code> calcola la somma a segni alterni dei reciproci\ndei numeri naturali dispari partendo da +1,\nossia</p>\n<p><span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>9</mn></mfrac><mo>−</mo><mo>⋯</mo></mrow><annotation encoding=\"application/x-tex\">1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\frac{1}{9} - \\cdots</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.72777em;vertical-align:-0.08333em;\"></span><span class=\"mord\">1</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">3</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">5</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">7</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">+</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:1.190108em;vertical-align:-0.345em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.845108em;\"><span style=\"top:-2.6550000000000002em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">9</span></span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.394em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">1</span></span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.345em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span><span class=\"mbin\">−</span><span class=\"mspace\" style=\"margin-right:0.2222222222222222em;\"></span></span><span class=\"base\"><span class=\"strut\" style=\"height:0.31em;vertical-align:0em;\"></span><span class=\"minner\">⋯</span></span></span></span></span></p>\n<p>Come criterio di arresto considera che la distanza tra il\nvalore già calcolato e il prossimo valore non deve essere\nmaggiore di <span class=\"math math-inline\"><span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><msup><mn>0</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">10^{-6}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:0.8141079999999999em;vertical-align:0em;\"></span><span class=\"mord\">1</span><span class=\"mord\"><span class=\"mord\">0</span><span class=\"msupsub\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8141079999999999em;\"><span style=\"top:-3.063em;margin-right:0.05em;\"><span class=\"pstrut\" style=\"height:2.7em;\"></span><span class=\"sizing reset-size6 size3 mtight\"><span class=\"mord mtight\"><span class=\"mord mtight\">−</span><span class=\"mord mtight\">6</span></span></span></span></span></span></span></span></span></span></span></span></span>.</p>\n"
  }
];
export default esercizi;
