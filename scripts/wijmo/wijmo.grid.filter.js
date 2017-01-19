﻿/*
    *
    * Wijmo Library 5.20163.254
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)};define(["require","exports",'wijmo/wijmo.grid','wijmo/wijmo','wijmo/wijmo.input','wijmo/wijmo.grid.filter'],function(n,t,i,r,u,f){"use strict";var s,a,h,v,c,e,l,y,o,p;window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.filter=f;s=function(){function n(n){this._maxValues=250;this._sortValues=!0;this._col=n;this._bnd=n.binding?new r.Binding(n.binding):null}return Object.defineProperty(n.prototype,"showValues",{get:function(){return this._values},set:function(n){this._values=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"filterText",{get:function(){return this._filterText},set:function(n){this._filterText=r.asString(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxValues",{get:function(){return this._maxValues},set:function(n){this._maxValues=r.asNumber(n,!1,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uniqueValues",{get:function(){return this._uniqueValues},set:function(n){this._uniqueValues=r.asArray(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"sortValues",{get:function(){return this._sortValues},set:function(n){this._sortValues=r.asBoolean(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dataMap",{get:function(){return this._map},set:function(n){this._map=r.asType(n,i.DataMap,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"column",{get:function(){return this._col},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isActive",{get:function(){return this._values!=null&&Object.keys(this._values).length>0},enumerable:!0,configurable:!0}),n.prototype.apply=function(n){var t=this.column;return!this._bnd||!this._values||!Object.keys(this._values).length?!0:(n=this._bnd.getValue(n),n=this.dataMap?this.dataMap.getDisplayValue(n):t.dataMap?t.dataMap.getDisplayValue(n):r.Globalize.format(n,t.format),this._values[n]!=undefined)},n.prototype.clear=function(){this.showValues=null;this.filterText=null},n.prototype.implementsInterface=function(n){return n=='IColumnFilter'},n}();t.ValueFilter=s;a=function(n){function t(t,i){var f,e,o;n.call(this,t);this._filter=r.asType(i,s,!1);f=this.getTemplate();this.applyTemplate('wj-control',f,{_divFilter:'div-filter',_cbSelectAll:'cb-select-all',_spSelectAll:'sp-select-all',_divValues:'div-values'});this._spSelectAll.textContent=r.culture.FlexGridFilter.selectAll;this._view=new r.CollectionView;i.sortValues&&(e=i.column.dataMap||i.dataMap?'text':'value',o=i.column.dataType!=r.DataType.Boolean,this._view.sortDescriptions.push(new r.SortDescription(e,o)));this._view.filter=this._filterValues.bind(this);this._view.collectionChanged.addHandler(this._updateSelectAllCheck,this);this._filterText='';this._cmbFilter=new u.ComboBox(this._divFilter,{placeholder:r.culture.FlexGridFilter.search});this._lbValues=new u.ListBox(this._divValues,{displayMemberPath:'text',checkedMemberPath:'show',itemsSource:this._view,itemFormatter:function(n,t){return t?t:r.culture.FlexGridFilter.null}});this._cmbFilter.textChanged.addHandler(this._filterTextChanged,this);this._cbSelectAll.addEventListener('click',this._cbSelectAllClicked.bind(this));this.updateEditor()}return __extends(t,n),Object.defineProperty(t.prototype,"filter",{get:function(){return this._filter},enumerable:!0,configurable:!0}),t.prototype.updateEditor=function(){var t=this._filter.column,i=[],h,a,c,u,o,s,v,n;if(this._filter.uniqueValues)for(h=this._filter.uniqueValues,n=0;n<h.length;n++)u=h[n],i.push({value:u,text:u.toString()});else{var l={},f=t.collectionView?t.collectionView.sourceCollection:[],e=t.collectionView;if(e&&e.sourceCollection&&e.filter){for(a=this._filter.showValues,this._filter.showValues=null,c=[],n=0;n<f.length;n++)e.filter(f[n])&&c.push(f[n]);f=c;this._filter.showValues=a}for(n=0;n<f.length;n++)u=t._binding.getValue(f[n]),o=this._filter.dataMap?this._filter.dataMap.getDisplayValue(u):t.dataMap?t.dataMap.getDisplayValue(u):r.Globalize.format(u,t.format),l[o]||(l[o]=!0,i.push({value:u,text:o}))}if(s=this._filter.showValues,s&&Object.keys(s).length!=0){for(v in s)for(n=0;n<i.length;n++)if(i[n].text==v){i[n].show=!0;break}}else for(n=0;n<i.length;n++)i[n].show=!0;this._lbValues.isContentHtml=t.isContentHtml;this._cmbFilter.text=this._filter.filterText;this._filterText=this._cmbFilter.text.toLowerCase();this._view.pageSize=this._filter.maxValues;this._view.sourceCollection=i;this._view.moveCurrentToPosition(-1)},t.prototype.clearEditor=function(){var t,n;for(this._cmbFilter.text='',this._filterText='',this._view.refresh(),t=this._view.items,n=0;n<t.length;n++)t[n].show=!1},t.prototype.updateFilter=function(){var t=null,r=this._view.items,n,i;if(this._filterText||this._cbSelectAll.indeterminate)for(t={},n=0;n<r.length;n++)i=r[n],i.show&&(t[i.text]=!0);this._filter.showValues=t;this._filter.filterText=this._filterText},t.prototype._filterTextChanged=function(){var n=this;this._toText&&clearTimeout(this._toText);this._toText=setTimeout(function(){var t=n._cmbFilter.text.toLowerCase();t!=n._filterText&&(n._filterText=t,n._view.refresh(),n._cbSelectAll.checked=!0,n._cbSelectAllClicked())},500)},t.prototype._filterValues=function(n){return this._filterText?n&&n.text?n.text.toLowerCase().indexOf(this._filterText)>-1:!1:!0},t.prototype._cbSelectAllClicked=function(){for(var i=this._cbSelectAll.checked,t=this._view.items,n=0;n<t.length;n++)t[n].show=i;this._view.refresh()},t.prototype._updateSelectAllCheck=function(){for(var n=0,t=this._view.items,i=0;i<t.length;i++)t[i].show&&n++;n==0?(this._cbSelectAll.checked=!1,this._cbSelectAll.indeterminate=!1):n==t.length?(this._cbSelectAll.checked=!0,this._cbSelectAll.indeterminate=!1):this._cbSelectAll.indeterminate=!0},t.controlTemplate='<div><div wj-part="div-filter"><\/div><div class="wj-listbox-item"><label><input wj-part="cb-select-all" type="checkbox"> <span wj-part="sp-select-all"><\/span><\/label><\/div><div wj-part="div-values" style="height:150px"><\/div><\/div>',t}(r.Control);t.ValueFilterEditor=a;h=function(){function n(n){this._c1=new c;this._c2=new c;this._and=!0;this._col=n;this._bnd=n.binding?new r.Binding(n.binding):null}return Object.defineProperty(n.prototype,"condition1",{get:function(){return this._c1},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"condition2",{get:function(){return this._c2},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"and",{get:function(){return this._and},set:function(n){this._and=r.asBoolean(n);this._bnd=this._col&&this._col.binding?new r.Binding(this._col.binding):null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dataMap",{get:function(){return this._map},set:function(n){this._map=r.asType(n,i.DataMap,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"column",{get:function(){return this._col},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isActive",{get:function(){return this._c1.isActive||this._c2.isActive},enumerable:!0,configurable:!0}),n.prototype.apply=function(n){var t=this._col,i=this._c1,u=this._c2,f,e;return!this._bnd||!this.isActive?!0:(n=this._bnd.getValue(n),t.dataMap?n=t.dataMap.getDisplayValue(n):r.isDate(n)?(r.isString(i.value)||r.isString(u.value))&&(n=r.Globalize.format(n,t.format)):r.isNumber(n)&&(n=r.Globalize.parseFloat(r.Globalize.format(n,t.format))),f=i.apply(n),e=u.apply(n),i.isActive&&u.isActive?this._and?f&&e:f||e:i.isActive?f:u.isActive?e:!0)},n.prototype.clear=function(){this._c1.clear();this._c2.clear();this.and=!0},n.prototype.implementsInterface=function(n){return n=='IColumnFilter'},n}();t.ConditionFilter=h;v=function(n){function t(t,i){var f,u;n.call(this,t);this._filter=r.asType(i,h,!1);f=this.getTemplate();this.applyTemplate('wj-control',f,{_divHdr:'div-hdr',_divCmb1:'div-cmb1',_divVal1:'div-val1',_btnAnd:'btn-and',_btnOr:'btn-or',_spAnd:'sp-and',_spOr:'sp-or',_divCmb2:'div-cmb2',_divVal2:'div-val2'});this._divHdr.textContent=r.culture.FlexGridFilter.header;this._spAnd.textContent=r.culture.FlexGridFilter.and;this._spOr.textContent=r.culture.FlexGridFilter.or;this._cmb1=this._createOperatorCombo(this._divCmb1);this._cmb2=this._createOperatorCombo(this._divCmb2);this._val1=this._createValueInput(this._divVal1);this._val2=this._createValueInput(this._divVal2);u=this._btnAndOrChanged.bind(this);this._btnAnd.addEventListener('change',u);this._btnOr.addEventListener('change',u);this.updateEditor()}return __extends(t,n),Object.defineProperty(t.prototype,"filter",{get:function(){return this._filter},enumerable:!0,configurable:!0}),t.prototype.updateEditor=function(){var n=this._filter.condition1,t=this._filter.condition2;this._cmb1.selectedValue=n.operator;this._cmb2.selectedValue=t.operator;this._val1 instanceof u.ComboBox?(this._val1.text=r.changeType(n.value,r.DataType.String,null),this._val2.text=r.changeType(t.value,r.DataType.String,null)):(this._val1.value=n.value,this._val2.value=t.value);this._btnAnd.checked=this._filter.and;this._btnOr.checked=!this._filter.and},t.prototype.clearEditor=function(){this._cmb1.selectedValue=this._cmb2.selectedValue=null;this._val1.text=this._val2.text=null;this._btnAnd.checked=!0;this._btnOr.checked=!1},t.prototype.updateFilter=function(){var n=this._filter.column,t=this._filter.condition1,i=this._filter.condition2,f;t.operator=this._cmb1.selectedValue;i.operator=this._cmb2.selectedValue;this._val1 instanceof u.ComboBox?(f=n.dataType==r.DataType.Date?r.DataType.String:n.dataType,t.value=r.changeType(this._val1.text,f,n.format),i.value=r.changeType(this._val2.text,f,n.format)):(t.value=this._val1.value,i.value=this._val2.value);this._filter.and=this._btnAnd.checked},t.prototype._createOperatorCombo=function(n){var t=this._filter.column,f=r.culture.FlexGridFilter.stringOperators,i;return t.dataType!=r.DataType.Date||this._isTimeFormat(t.format)?t.dataType!=r.DataType.Number||t.dataMap?t.dataType!=r.DataType.Boolean||t.dataMap||(f=r.culture.FlexGridFilter.booleanOperators):f=r.culture.FlexGridFilter.numberOperators:f=r.culture.FlexGridFilter.dateOperators,i=new u.ComboBox(n),i.itemsSource=f,i.displayMemberPath='name',i.selectedValuePath='op',i},t.prototype._createValueInput=function(n){var t=this._filter.column,i=null;return t.dataType!=r.DataType.Date||this._isTimeFormat(t.format)?t.dataType!=r.DataType.Number||t.dataMap?(i=new u.ComboBox(n),i.itemsSource=this._filter.dataMap?this._filter.dataMap.getDisplayValues():t.dataMap?t.dataMap.getDisplayValues():t.dataType==r.DataType.Boolean?[!0,!1]:null):(i=new u.InputNumber(n),i.format=t.format):(i=new u.InputDate(n),i.format=t.format),i.isRequired=!1,i},t.prototype._isTimeFormat=function(n){return n?(n=r.culture.Globalize.calendar.patterns[n]||n,/[Hmst]+/.test(n)):!1},t.prototype._btnAndOrChanged=function(n){this._btnAnd.checked=n.target==this._btnAnd;this._btnOr.checked=n.target==this._btnOr},t.controlTemplate='<div><div wj-part="div-hdr"><\/div><div wj-part="div-cmb1"><\/div><br/><div wj-part="div-val1"><\/div><br/><div style="text-align:center"><label><input wj-part="btn-and" type="radio"> <span wj-part="sp-and"><\/span> <\/label>&nbsp;&nbsp;&nbsp;<label><input wj-part="btn-or" type="radio"> <span wj-part="sp-or"><\/span> <\/label><\/div><div wj-part="div-cmb2"><\/div><br/><div wj-part="div-val2"><\/div><br/><\/div>',t}(r.Control);t.ConditionFilterEditor=v;c=function(){function n(){this._op=null}return Object.defineProperty(n.prototype,"operator",{get:function(){return this._op},set:function(n){this._op=r.asEnum(n,e,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this._val},set:function(n){this._val=n;this._strVal=r.isString(n)?n.toString().toLowerCase():null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isActive",{get:function(){switch(this._op){case null:return!1;case e.EQ:case e.NE:return!0;default:return this._val!=null||this._strVal!=null}},enumerable:!0,configurable:!0}),n.prototype.clear=function(){this.operator=null;this.value=null},n.prototype.apply=function(n){var t=this._strVal||this._val;r.isString(n)&&(n=n.toLowerCase());switch(this._op){case null:return!0;case e.EQ:return r.isDate(n)&&r.isDate(t)?r.DateTime.sameDate(n,t):n==t;case e.NE:return n!=t;case e.GT:return n>t;case e.GE:return n>=t;case e.LT:return n<t;case e.LE:return n<=t;case e.BW:return this._strVal&&r.isString(n)?n.indexOf(this._strVal)==0:!1;case e.EW:return this._strVal&&r.isString(n)&&n.length>=this._strVal.length?n.substr(n.length-this._strVal.length)==t:!1;case e.CT:return this._strVal&&r.isString(n)?n.indexOf(this._strVal)>-1:!1;case e.NC:return this._strVal&&r.isString(n)?n.indexOf(this._strVal)<0:!1}throw'Unknown operator';},n}();t.FilterCondition=c,function(n){n[n.EQ=0]="EQ";n[n.NE=1]="NE";n[n.GT=2]="GT";n[n.GE=3]="GE";n[n.LT=4]="LT";n[n.LE=5]="LE";n[n.BW=6]="BW";n[n.EW=7]="EW";n[n.CT=8]="CT";n[n.NC=9]="NC"}(t.Operator||(t.Operator={}));e=t.Operator;l=function(){function n(n,t){this._owner=n;this._col=t;this._valueFilter=new s(t);this._conditionFilter=new h(t)}return Object.defineProperty(n.prototype,"filterType",{get:function(){return this._filterType!=null?this._filterType:this._owner.defaultFilterType},set:function(n){if(n!=this._filterType){var t=this.isActive;this.clear();this._filterType=r.asEnum(n,o,!0);t?this._owner.apply():this._col.grid&&this._col.grid.invalidate()}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"dataMap",{get:function(){return this.conditionFilter.dataMap||this.valueFilter.dataMap},set:function(n){this.conditionFilter.dataMap=n;this.valueFilter.dataMap=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"valueFilter",{get:function(){return this._valueFilter},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"conditionFilter",{get:function(){return this._conditionFilter},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"column",{get:function(){return this._col},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isActive",{get:function(){return this._conditionFilter.isActive||this._valueFilter.isActive},enumerable:!0,configurable:!0}),n.prototype.apply=function(n){return this._conditionFilter.apply(n)&&this._valueFilter.apply(n)},n.prototype.clear=function(){this._valueFilter.clear();this._conditionFilter.clear()},n.prototype.implementsInterface=function(n){return n=='IColumnFilter'},n}();t.ColumnFilter=l;r.culture.FlexGridFilter=window.wijmo.culture.FlexGridFilter||{ascending:'\u2191 Ascending',descending:'\u2193 Descending',apply:'Apply',clear:'Clear',conditions:'Filter by Condition',values:'Filter by Value',search:'Search',selectAll:'Select All',null:'(nothing)',header:'Show items where the value',and:'And',or:'Or',stringOperators:[{name:'(not set)',op:null},{name:'Equals',op:e.EQ},{name:'Does not equal',op:e.NE},{name:'Begins with',op:e.BW},{name:'Ends with',op:e.EW},{name:'Contains',op:e.CT},{name:'Does not contain',op:e.NC}],numberOperators:[{name:'(not set)',op:null},{name:'Equals',op:e.EQ},{name:'Does not equal',op:e.NE},{name:'Is Greater than',op:e.GT},{name:'Is Greater than or equal to',op:e.GE},{name:'Is Less than',op:e.LT},{name:'Is Less than or equal to',op:e.LE}],dateOperators:[{name:'(not set)',op:null},{name:'Equals',op:e.EQ},{name:'Is Before',op:e.LT},{name:'Is After',op:e.GT}],booleanOperators:[{name:'(not set)',op:null},{name:'Equals',op:e.EQ},{name:'Does not equal',op:e.NE}]};y=function(n){function t(t,i,u){var e=this,h,c,a,s,f;u===void 0&&(u=!0);n.call(this,t);this.filterChanged=new r.Event;this.buttonClicked=new r.Event;this._filter=r.asType(i,l);h=this.getTemplate();this.applyTemplate('wj-control wj-columnfiltereditor wj-content',h,{_divSort:'div-sort',_btnAsc:'btn-asc',_btnDsc:'btn-dsc',_divType:'div-type',_aVal:'a-val',_aCnd:'a-cnd',_divEdtVal:'div-edt-val',_divEdtCnd:'div-edt-cnd',_btnApply:'btn-apply',_btnClear:'btn-clear'});this._btnAsc.textContent=r.culture.FlexGridFilter.ascending;this._btnDsc.textContent=r.culture.FlexGridFilter.descending;this._aVal.textContent=r.culture.FlexGridFilter.values;this._aCnd.textContent=r.culture.FlexGridFilter.conditions;this._btnApply.textContent=r.culture.FlexGridFilter.apply;this._btnClear.textContent=r.culture.FlexGridFilter.clear;c=this.filter.conditionFilter.isActive||(i.filterType&o.Value)==0?o.Condition:o.Value;this._showFilter(c);a=this.filter.column;s=a.grid.collectionView;u&&s&&s.canSort||(this._divSort.style.display='none');this.updateEditor();f=this._btnClicked.bind(this);this._btnApply.addEventListener('click',f);this._btnClear.addEventListener('click',f);this._btnAsc.addEventListener('click',f);this._btnDsc.addEventListener('click',f);this._aVal.addEventListener('click',f);this._aCnd.addEventListener('click',f);this.hostElement.addEventListener('keydown',function(n){switch(n.keyCode){case r.Key.Enter:switch(n.target.tagName){case'A':case'BUTTON':e._btnClicked(n);break;default:e.updateFilter();e.onFilterChanged();e.onButtonClicked()}n.preventDefault();break;case r.Key.Escape:e.onButtonClicked();n.preventDefault()}})}return __extends(t,n),Object.defineProperty(t.prototype,"filter",{get:function(){return this._filter},enumerable:!0,configurable:!0}),t.prototype.updateEditor=function(){this._edtVal&&this._edtVal.updateEditor();this._edtCnd&&this._edtCnd.updateEditor()},t.prototype.updateFilter=function(){switch(this._getFilterType()){case o.Value:this._edtVal.updateFilter();this.filter.conditionFilter.clear();break;case o.Condition:this._edtCnd.updateFilter();this.filter.valueFilter.clear()}},t.prototype.onFilterChanged=function(n){this.filterChanged.raise(this,n)},t.prototype.onButtonClicked=function(n){this.buttonClicked.raise(this,n)},t.prototype._showFilter=function(n){n==o.Value&&this._edtVal==null&&(this._edtVal=new a(this._divEdtVal,this.filter.valueFilter));n==o.Condition&&this._edtCnd==null&&(this._edtCnd=new v(this._divEdtCnd,this.filter.conditionFilter));(n&this.filter.filterType)!=0&&(n==o.Value?(this._divEdtVal.style.display='',this._divEdtCnd.style.display='none',this._enableLink(this._aVal,!1),this._enableLink(this._aCnd,!0)):(this._divEdtVal.style.display='none',this._divEdtCnd.style.display='',this._enableLink(this._aVal,!0),this._enableLink(this._aCnd,!1)));switch(this.filter.filterType){case o.None:case o.Condition:case o.Value:this._divType.style.display='none';break;default:this._divType.style.display=''}},t.prototype._enableLink=function(n,t){n.style.textDecoration=t?'':'none';n.style.fontWeight=t?'':'bold';t?n.href='':n.removeAttribute('href')},t.prototype._getFilterType=function(){return this._divEdtVal.style.display!='none'?o.Value:o.Condition},t.prototype._btnClicked=function(n){if(n.preventDefault(),n.stopPropagation(),!r.hasClass(n.target,'wj-state-disabled')){if(n.target==this._aVal){this._showFilter(o.Value);this._edtVal.focus();return}if(n.target==this._aCnd){this._showFilter(o.Condition);this._edtCnd.focus();return}if(n.target==this._btnAsc||n.target==this._btnDsc){var t=this.filter.column,u=t.sortMemberPath?t.sortMemberPath:t.binding,i=t.grid.collectionView,f=new r.SortDescription(u,n.target==this._btnAsc);i.sortDescriptions.deferUpdate(function(){i.sortDescriptions.clear();i.sortDescriptions.push(f)})}n.target==this._btnApply?(this.updateFilter(),this.onFilterChanged()):n.target==this._btnClear&&this.filter.isActive&&(this.filter.clear(),this.onFilterChanged());this.updateEditor();this.onButtonClicked()}},t.controlTemplate='<div><div wj-part="div-sort"><a wj-part="btn-asc" href="" style="min-width:95px" draggable="false"><\/a>&nbsp;&nbsp;&nbsp;<a wj-part="btn-dsc" href="" style="min-width:95px" draggable="false"><\/a><\/div><div style="text-align:right;margin:10px 0px;font-size:80%"><div wj-part="div-type"><a wj-part="a-cnd" href="" draggable="false"><\/a>&nbsp;|&nbsp;<a wj-part="a-val" href="" draggable="false"><\/a><\/div><\/div><div wj-part="div-edt-val"><\/div><div wj-part="div-edt-cnd"><\/div><div style="text-align:right;margin-top:10px"><a wj-part="btn-apply" href="" draggable="false"><\/a>&nbsp;&nbsp;<a wj-part="btn-clear" href="" draggable="false"><\/a><\/div>',t}(r.Control);t.ColumnFilterEditor=y,function(n){n[n.None=0]="None";n[n.Condition=1]="Condition";n[n.Value=2]="Value";n[n.Both=3]="Both"}(t.FilterType||(t.FilterType={}));o=t.FilterType;p=function(){function n(n){this._showIcons=!0;this._showSort=!0;this._defFilterType=o.Both;this.filterApplied=new r.Event;this.filterChanging=new r.Event;this.filterChanged=new r.Event;var t='Missing dependency: FlexGridFilter requires ';r.assert(i!=null,t+'wijmo.grid.');r.assert(u!=null,t+'wijmo.input.');this._filters=[];this._g=r.asType(n,i.FlexGrid,!1);this._g.formatItem.addHandler(this._formatItem.bind(this));this._g.itemsSourceChanged.addHandler(this.clear.bind(this));this._g.hostElement.addEventListener('mousedown',this._mouseDown.bind(this),!0);this._g.invalidate()}return Object.defineProperty(n.prototype,"grid",{get:function(){return this._g},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"filterColumns",{get:function(){return this._filterColumns},set:function(n){this._filterColumns=r.asArray(n);this.clear()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showFilterIcons",{get:function(){return this._showIcons},set:function(n){n!=this.showFilterIcons&&(this._showIcons=r.asBoolean(n),this._g&&this._g.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showSortButtons",{get:function(){return this._showSort},set:function(n){this._showSort=r.asBoolean(n)},enumerable:!0,configurable:!0}),n.prototype.getColumnFilter=function(n,t){var u,f;for(t===void 0&&(t=!0),r.isString(n)?n=this._g.columns.getColumn(n):r.isNumber(n)&&(n=this._g.columns[n]),n=r.asType(n,i.Column),u=0;u<this._filters.length;u++)if(this._filters[u].column==n)return this._filters[u];return t&&n.binding?(f=new l(this,n),this._filters.push(f),f):null},Object.defineProperty(n.prototype,"defaultFilterType",{get:function(){return this._defFilterType},set:function(n){n!=this.defaultFilterType&&(this._defFilterType=r.asEnum(n,o,!1),this._g.invalidate(),this.clear())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"filterDefinition",{get:function(){for(var n,t,u,i={defaultFilterType:this.defaultFilterType,filters:[]},r=0;r<this._filters.length;r++)n=this._filters[r],n&&n.column&&n.column.binding&&(n.conditionFilter.isActive?(t=n.conditionFilter,i.filters.push({binding:n.column.binding,type:'condition',condition1:{operator:t.condition1.operator,value:t.condition1.value},and:t.and,condition2:{operator:t.condition2.operator,value:t.condition2.value}})):n.valueFilter.isActive&&(u=n.valueFilter,i.filters.push({binding:n.column.binding,type:'value',filterText:u.filterText,showValues:u.showValues})));return JSON.stringify(i)},set:function(n){var e=JSON.parse(r.asString(n)),f,i,s;for(this.clear(),this.defaultFilterType=e.defaultFilterType,f=0;f<e.filters.length;f++){var t=e.filters[f],u=this._g.columns.getColumn(t.binding),o=this.getColumnFilter(u,!0);if(o)switch(t.type){case'condition':i=o.conditionFilter;i.condition1.value=u.dataType==r.DataType.Date?r.changeType(t.condition1.value,u.dataType,null):t.condition1.value;i.condition1.operator=t.condition1.operator;i.and=t.and;i.condition2.value=u.dataType==r.DataType.Date?r.changeType(t.condition2.value,u.dataType,null):t.condition2.value;i.condition2.operator=t.condition2.operator;break;case'value':s=o.valueFilter;s.filterText=t.filterText;s.showValues=t.showValues}}this.apply()},enumerable:!0,configurable:!0}),n.prototype.editColumnFilter=function(n,t){var e=this,u;this.closeEditor();n=r.isString(n)?this._g.columns.getColumn(n):r.asType(n,i.Column,!1);u=new i.CellRangeEventArgs(this._g.cells,new i.CellRange(-1,n.index));this.onFilterChanging(u);if(!u.cancel){u.cancel=!0;var f=document.createElement('div'),l=this.getColumnFilter(n),s=new y(f,l,this.showSortButtons);r.addClass(f,'wj-dropdown-panel');this._g.rightToLeft&&(f.dir='rtl');s.filterChanged.addHandler(function(){u.cancel=!1;setTimeout(function(){u.cancel||e.apply()})});s.buttonClicked.addHandler(function(){e.closeEditor();e.onFilterChanged(u)});s.lostFocus.addHandler(function(){setTimeout(function(){var n=r.Control.getControl(e._divEdt);n&&!n.containsFocus()&&e.closeEditor()},10)});var c=this._g.columnHeaders,a=t?t.row:c.rows.length-1,v=t?t.col:n.index,o=c.getCellBoundingRect(a,v),h=document.elementFromPoint(o.left+o.width/2,o.top+o.height/2);h=r.closest(h,'.wj-cell');h?r.showPopup(f,h,!1,!1,!1):r.showPopup(f,o);s.focus();this._divEdt=f;this._edtCol=n}},n.prototype.closeEditor=function(){if(this._divEdt){r.hidePopup(this._divEdt,!0);var n=r.Control.getControl(this._divEdt);n&&n.dispose();this._divEdt=null;this._edtCol=null}},n.prototype.apply=function(){var n=this._g.collectionView,t;n&&(n.filter?n.refresh():n.filter=this._filter.bind(this));t=n?n.updateFilterDefinition:null;r.isFunction(t)&&t.call(n,this);this.onFilterApplied()},n.prototype.clear=function(){this._filters.length&&(this._filters=[],this.apply())},n.prototype.onFilterApplied=function(n){this.filterApplied.raise(this,n)},n.prototype.onFilterChanging=function(n){this.filterChanging.raise(this,n)},n.prototype.onFilterChanged=function(n){this.filterChanged.raise(this,n)},n.prototype._filter=function(n){for(var t=0;t<this._filters.length;t++)if(!this._filters[t].apply(n))return!1;return!0},n.prototype._formatItem=function(t,u){var f,e,a;if(u.panel.cellType==i.CellType.ColumnHeader){var s=this._g,c=s.getMergedRange(u.panel,u.row,u.col)||new i.CellRange(u.row,u.col),l=s.columns[c.col],h=s._getBindingColumn(u.panel,u.row,l);(c.row2==u.panel.rows.length-1||l!=h)&&(f=this.getColumnFilter(h,this.defaultFilterType!=o.None),this._filterColumns&&this._filterColumns.indexOf(h.binding)<0&&(f=null),f&&f.filterType!=o.None?(this._showIcons&&(n._filterGlyph||(n._filterGlyph=r.createElement('<div class="'+n._WJC_FILTER+'"><span class="wj-glyph-filter"></span></div>')),e=u.cell.querySelector('div')||u.cell,a=e.querySelector('.wj-glyph-filter'),a||e.insertBefore(n._filterGlyph.cloneNode(!0),e.firstChild)),r.toggleClass(u.cell,'wj-filter-on',f.isActive),r.toggleClass(u.cell,'wj-filter-off',!f.isActive)):(r.removeClass(u.cell,'wj-filter-on'),r.removeClass(u.cell,'wj-filter-off')))}},n.prototype._mouseDown=function(t){var o=this,u,i,e,f;t.defaultPrevented||t.button!=0||r.closest(t.target,'.'+n._WJC_FILTER)&&(u=this._g,i=u.hitTest(t),i.panel==u.columnHeaders&&(e=u.columns[i.col],f=u._getBindingColumn(i.panel,i.row,e),this._divEdt&&this._edtCol==f?this.closeEditor():setTimeout(function(){o.editColumnFilter(f,i)},this._divEdt?100:0),t.stopPropagation(),t.preventDefault()))},n._WJC_FILTER='wj-elem-filter',n}();t.FlexGridFilter=p})