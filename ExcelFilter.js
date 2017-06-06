/*
* ABS Excel Filter 自定义组件
* @
*/
(function (factory){
  if (typeof define == 'function' && define.cmd){
    define(function (require){   // 这边其实，就是以何种方式去获取jQuery的依赖
      var $ = reqiure('jquery');
      factory($, window, document);
    });
  }
  else{
    factory($, window, document);
  }
}(function ($, widnow, document){

  /*
  * ABS 自定义select组件
  * @options： 默认配置参数
  */
  var defualtOptions = {
    category: '',
    excelFilterWrap: 'excel-filter-wrap',  // 外部盛放excel-filter的父容器
    width: 120,
    height: '', // height是固定的或者...
    left: '',
    top: '',
    isAll: true,  // 是否需要生成含有“全部”选项的select下拉组件，默认为true
    trigger: 'click',
    isUnified: false,    // option的文本内容是否与值一致, false为不一致，true则为一致, 默认为false
    norm: 'num',         // 指标的类型，共三类 ，分别为“文本：text”， “数字：num”， “日期： date”, 默认为文本
    textDataList: ['无条件', '包含', '不包含', '等于', '不等于', '为空', '不为空'],
    dateDataList: ['无条件', '为空', '不为空', '等于', '之前', '之后', '介于', '今天', '明天', '下周', '本周', '上周', '下月', '本月', '上月', '下季度', '本季度', '上季度', '去年', '本年度截止到现在', '期间所有日期'],
    numDataList: ['无条件', '为空', '不为空', '等于', '不等于', '大于', '不大于', '大于或等于', '小于', '小于或等于', '节约', '10个最大的值', '高于平均值', '低于平均值'],
    searchDataList: ['全部', '银监会', '证监会', '保监会', '交易商协会']    // 这边的数据源，应该是从加载这个的地方获取过来的。至于具体的细节，之后再看看,这边的“全部”让数据里面的拼接出来好了
  }

  function ExcelFilter(el, options){
    this.$element = el;
    this.options = $.extend({}, defualtOptions, options || {});
    console.log('the current category is ' + this.options.category);
    // this.optionData = this.getOptionData();   获取select-ul中的数据应该怎么考虑呢？
    this.init();
  }

  var excelfilterFn = ExcelFilter.prototype;

  excelfilterFn.init = function (){

    this.parentContainer = $('.' + this.options.excelFilterWrap);

    this.buildMainExcelFilter();
    this.buildSubExcelFilter();

    // 父容器对象
    this.excelFilterObj = $('#filter' + this.options.category);

    this.ASCButton = this.excelFilterObj.find('.sort-asc');   // 升序按钮
    this.DESCButton = this.excelFilterObj.find('.sort-desc');;  // 降序按钮
    this.MoreCondiButton = this.excelFilterObj.find('.icon-morecondi');;   // 条件筛选按钮
    this.SubFilterObj = this.excelFilterObj.find('.sub-filter');           // 条件筛选弹框

    this.FilterInput = this.excelFilterObj.find('filter');             // input 过滤框
    this.SelectUl = this.excelFilterObj.find('.excel-con-filter .select-ul');   // checkbox

    this.bindPartOne();
    this.bindPartTwo();
  }

  // 创建main-filter部分
  excelfilterFn.buildMainExcelFilter = function (){
    // 最外部的容器
    var left = this.options.left;
    var top = this.options.top;
    var category = this.options.category;
    var excelFilterDiv = $('<div id="filter' + category + '" class="excel-filter" style="left: '+ left + 'px; top: ' + top + 'px;"></div>');
    var ascButton = $('<p class="sort-asc sort-condi selected" data-cate="' + category + '">升序排列</p>');
    var descButton = $('<p class="sort-desc sort-condi" data-cate="' + category + '">降序排列</p>');
    var moreCondi = $('<p class="more-condi">条件筛选<i class="icon-morecondi"></i></p>');

    excelFilterDiv.append(ascButton);
    excelFilterDiv.append(descButton);
    excelFilterDiv.append(moreCondi);

    // 创建条件筛选
    var subFilterDiv = this.buildSubExcelFilter();
    excelFilterDiv.append(subFilterDiv);

    // 创建检索部分
    var excelConFilterDiv = this.buildExcelConFilter();
    excelFilterDiv.append(excelConFilterDiv);

    this.parentContainer.append(excelFilterDiv);
    // this.parentContainer.show();
  }

  // 创建sub-filter部分，即，点击“条件筛选”出来的部分
  excelfilterFn.buildSubExcelFilter = function (){
    var subData = null;
    var subWdithClass = "w-100";
    if (this.options.norm == "text"){
      subData = this.options.textDataList;
    }
    else if (this.options.norm == "num"){
      subData = this.options.numDataList;
      subWdithClass = "w-168";
    }
    else if (this.options.norm == "date"){
      subData = this.options.dateDataList;
      subWdithClass = "w-168";
    }

    console.log('the current sub data is: ');
    console.log(subData);

    var subFilterDiv = $('<div class="sub-filter"></div>');
    subFilterDiv.addClass(subWdithClass);
    var ulDiv = $('<ul></ul>');
    var liStr = "";
    for (var i=0;i<subData.length;i++){
      var li = "<li>" + subData[i] + "</li>";
      liStr += li;
    }
    ulDiv.append(liStr);
    subFilterDiv.append(ulDiv);
    return subFilterDiv;
  }

  // 考虑一下这部分是否需要独立出去，因为不然的话，会使得这个过于庞大的，
  // 先写在一起吧，过后再考虑独立出去好了
  excelfilterFn.buildExcelConFilter = function (){
    // 这部分的最外层父容器
    var excelConFilterDiv = $('<div class="excel-con-filter"></div>');
    var articleDiv = $('<article class="select-ul"></article>');
    var inputObj = $('<input type="text" name="" class="filter" value="" placeholder="请输入查找内容" />');
    var ulDiv = $('<ul></ul>');

    articleDiv.append(inputObj);
    // 这部分的数据源需要考虑
    var data = this.options.searchDataList;
    var liStr = "";
    for (var i=0;i<data.length;i++){
      var li = "";
      if (i == 0){
        li = "<li><label title='" + data[i] + "'><input type='checkbox' checked='checked' data-index='" + i + "' data-cate='-1' value='" + data[i] + "' /><i></i>" + data[i] + "</label></li>";
      }
      else{
        li = "<li><label title='" + data[i] + "'><input type='checkbox' checked='checked' data-index='" + i + "' data-cate='" + (i - 1) + "' value='" + data[i] + "' /><i></i>" + data[i] + "</label></li>";
      }
      liStr += li;
    }
    ulDiv.append(liStr);
    articleDiv.append(ulDiv);

    excelConFilterDiv.append(articleDiv);
    return excelConFilterDiv;
  }

  // 显示 excel-filter
  excelfilterFn.showExcelFilter = function (){

  }

  // 隐藏 excel-filter
  excelfilterFn.hideExcelFilter = function (){

  }

  // 事件绑定中心
  excelfilterFn.bindPartOne = function (){
    var self = this;
    //  组件主体的事件绑定
    // 升序按钮
    self.ASCButton.on('click', function (e){
      var ele = $(e.target);
      var cate = ele.attr('data-cate');
      console.log('the asc button represents: ' + cate);
    });

    // 降序按钮
    self.DESCButton.on('click', function (e){
      var ele = $(e.target);
      var cate = ele.attr('data-cate');
      console.log('the desc button represents: ' + cate);
    });

    // 条件筛选
    // 选完之后关闭，以及再次点击关闭
    // 要考虑到，如果整个关闭弹窗，也是需要将active移除的！！！！！！！！！！！！！！！！！！！！！！！！1
    self.MoreCondiButton.on('click', function (e){
      var ele = $(e.target);
      if (ele.hasClass('active')){
        // 如果有active则，表明sub-filter已经展开
        self.SubFilterObj.hide();
        ele.removeClass('active');
      }
      else{
        self.SubFilterObj.show();
        ele.addClass('active');
      }
    });

    // checkbox这边的交互
    self.SelectUl.find('input').on('click', function (e){
      //  当前的checkbox的对象
      var checkboxObj = $(e.target);
      var dataIndex = checkboxObj.attr('data-index');

      if (dataIndex == 0){
        // 为0则表示是“全部”
        
      }
      else{
        // 其余子选项

      }

    });

  }

  excelfilterFn.bindPartTwo = function (){
    // 为检索部分的事件绑定
  }

  $.fn.ExcelFilter = function (options){
    var excelfilter = new ExcelFilter(this, options);
    return excelfilter;
  }
}));
