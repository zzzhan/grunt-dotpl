<html>
  <meta charset="utf-8">
  <head><title>${title}</title></head>
  <body>
    <p>${content}</p>
	<ul>
	  <tpl for="menu">
	  <li id="${id}">${name}</li>
	  </tpl>
	</ul>
	<div>${foo}</div>
  </body>
</html>