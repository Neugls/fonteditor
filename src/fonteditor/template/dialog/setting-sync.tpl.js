define(function () {return '\n<div class="form-group">\n  <button id="setting-sync-cancel" type="button" class="btn btn-flat btn-sm btn-right">${lang.cancelsync}</button>\n  <div class="input-group input-group-sm">\n    <span class="input-group-addon">${lang.remoteurl}</span>\n    <input data-field="url" type="text" class="form-control">\n  </div>\n</div>\n\n<div class="form-group">\n  <span class="btn-right" style="width: 70px;line-height: 30px">\n    <a href="./doc/index.html#font-sync" target="_blank">帮助</a>\n  </span>\n  <div class="input-group input-group-sm">\n    <span class="input-group-addon">${lang.pushurl}</span>\n    <input data-field="pushUrl" type="text" class="form-control">\n  </div>\n</div>\n\n<div class="form-inline column-2">\n\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.fontname}</span>\n      <input data-field="name" type="text" class="form-control">\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">${lang.autosync}</span>\n      <span class="form-control">\n        <input data-field="autoSync" type="checkbox" checked="checked">\n      </span>\n    </div>\n  </div>\n</div>\n<div class="form-inline">\n  <span>${lang.fonttype}： </span>\n\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">woff</span>\n      <span class="form-control">\n        <input data-field="woff" type="checkbox" checked="checked">\n      </span>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">ttf</span>\n      <span class="form-control">\n        <input data-field="ttf" type="checkbox" checked="checked">\n      </span>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">svg</span>\n      <span class="form-control">\n        <input data-field="svg" type="checkbox">\n      </span>\n    </div>\n  </div>\n\n  <div class="form-group">\n    <div class="input-group input-group-sm">\n      <span class="input-group-addon">eot</span>\n      <span class="form-control">\n        <input data-field="eot" type="checkbox">\n      </span>\n    </div>\n  </div>\n</div>\n';});