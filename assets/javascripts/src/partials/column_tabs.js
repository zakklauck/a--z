// Column Tabs

App.$document.on('click', '.col-header', function() {
  if ( !App.breakpoint.isMobile() ) return;

  var $colHeader = $(this);
  var colName = $colHeader.attr('data-col');
  var $cols = $('[data-main-col]');
  var $col = $cols.filter('[data-main-col="' + colName + '"]');

  App.$html.removeClass('is-viewing-col-primary is-viewing-col-secondary');
  App.$html.addClass('is-viewing-col-' + colName);

  $cols.not($col).hide();
  $col.show();
});
