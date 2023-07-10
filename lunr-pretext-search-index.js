var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  Hello world    If is a continuous function such that exists, then we say that is integrable .    As we saw in , math is cool...   Rad caption...       "
},
{
  "id": "def-blah",
  "level": "2",
  "url": "section-title.html#def-blah",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  If is a continuous function such that exists, then we say that is integrable .   "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "section-title.html#figure-1",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Rad caption...      "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
