/*
* ABS select 自定义组件
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
  var defualtOptions = {
    width: 120,
    selectName: '', // 默认为空
    selectedName: "", // 初始化组件时的checkbox的选中状态,  注意，这边字符串的分割方式为分号，因为考虑到选项中存在用逗号标示的字符串,默认为空
    height: '', // height是固定的或者...
    isAll: true,  // 是否需要生成含有“全部”选项的select下拉组件，默认为true
    trigger: 'click',
    isSearch:  false,   // 是否需要支持检索功能, true支持，false不支持，默认为false
    isUnified: false    // option的文本内容是否与值一致, false为不一致，true则为一致, 默认为false
    // optionData: ['全部', '银监会', '证监会', '保监会', '交易协会', '其他']  // 从上下文环境中获取就好了
  }

  /*
  * ABS 自定义select组件
  * @options： 配置参数
  */
  function ABSelect(el, options){
    //  console.log(options);
    // 合并配置项参数
    this.$element = el;
    this.options = $.extend({}, defualtOptions, options || {});
    this.optionData = this.getOptionData();
    this.init();
  }

  var selectFn = ABSelect.prototype;

  selectFn.init = function (){
    this.$element.hide();
    this.buildSelect();
    this.bind();
  }

  selectFn.buildSelect = function (){
    // 自定义select的字最外部容器
    var selectBox = $('<div class="select-box"></div>');
    // 宽设置
    var wClass = "w-" + this.options.width;
    var wDe20 = (this.options.width - 20) + 'px';
    var wDe15 = (this.options.width - 16) + 'px';

    // 自定义select的文本显示区域
    var selectHead = $('<div class="select-head ' + wClass + '"></div>');
    var headStr = "";
    // 是否需要默认选中“全部”选项
    // true: 默认选中了“全部”的选项
    // false： 展示用户的历史操作选项，取值自selectedName
    if (this.options.isAll){
      // 如果需要处理值和显示的内容不一致的情况
      var hiddenValue = "全部";
      if (this.options.isUnified){
        hiddenValue = "-1";
      }

      headStr = "<span style='width:" + wDe15 + ";' title='全部'>全部</span><input id='hidCon_" + this.options.selectName + "' type='hidden' value='" + hiddenValue + "' name='" + this.options.selectName + "' /><i class='select-tri'></i>";

    }
    else{
      var hiddenValue = this.options.selectedName;
      if (this.options.isUnified){
        hiddenValue = this.mapOptions(this.options.selectedName);
      }
      headStr = "<span style='width:" + wDe15 + ";' title='" + this.options.selectedName + "'>" + this.options.selectedName + "</span><input id='hidCon_" + this.options.selectName + "' type='hidden' value='" + hiddenValue + "' name='" + this.options.selectName + "' /><i class='select-tri'></i>";
    }
    selectHead.append(headStr);

    // 自定义select的下拉选项区域
    // 是否需要展示检索框
    // true： 需要加入一个检索框
    // false： 不需要检索功能
    var selectBody = $('<article class="select-ul"></article>');  // 可能包含一个检索框以及一定包含一些ul列表
    if (this.options.isSearch){
      var inputStr = "<input type='text' class='filter' placeholder='输入查找内容' />";
      selectBody.append(inputStr);
    }
    // 生成ul的下拉选项菜单， 这边应该根据用户的历史操作，渲染之前选中过的选项
    var selectUl = $('<ul></ul>');
    var len = this.optionData.length;
    var data = this.optionData;
    var liStr = "";

    // 说明是全部选中状态，直接渲染全部选中状态的列表就可以了
    if (this.options.isAll){
      for (var i=0;i<len;i++){
        var li = "";
        if (this.options.isUnified && i == 0){
          li = "<li><label title='" +  data[i] + "'><input type='checkbox' checked='checked' data-act='-1' value='" + data[i] + "' data-index='" + i + "'><i></i>" + data[i] + "</label></li>";
        }
        else{
          li = "<li><label title='" +  data[i] + "'><input type='checkbox' checked='checked' data-act='" + (i-1) + "' value='" + data[i] + "' data-index='" + i + "'><i></i>" + data[i] + "</label></li>";
        }

        liStr += li;
      }
    }
    else{
      // 这边就是需要将用户选中的那些进行选中状态处理，其余不需要
      // 这边应该考虑到
      for (var i=0;i<len;i++){
        var inputObj = $("<input type='checkbox' data-index='" + i + "' />");
        var inputStr = "";
        // 如果是值和显示的值不同的时候需要处理的——不然的话，是不是就不需要进行处理了呢？

        if (this.options.isUnified && i == 0){
          inputObj.attr('data-act', '-1');
        }
        else{
          inputObj.attr('data-act', (i - 1));
        }

        inputObj.attr('value', data[i]);

        // 下面其实就是进行状态的选中，，，我是不是可以区分开来呢，
        //  这个需要怎么考虑？

        var selectedData = this.options.selectedName;
        var selectedArr = selectedData.split(';');  // 约定以分号分隔

        for (var j=0;j<selectedArr.length;j++){
          if (selectedArr[j] == data[i]){
            inputObj.attr('checked', 'checked');
            inputObj.addClass('active');
          }
        }

        inputStr = inputObj.get(0).outerHTML;  // 这个应该不会有什么问题把？

        var li = "<li><label title='" + data[i] + "'>" + inputStr + "<i></i>" + data[i] + "</label></li>";
        liStr += li;
      }
    }
    selectUl.append(liStr);
    selectBody.append(selectUl);
    selectBox.append(selectHead);
    selectBox.append(selectBody);

    this.$element.parent().append(selectBox);
  }

  // 从上下文环境中获得select各项options的值，
  // 这边要考虑的是， 如果option的value值和option显示的值不同，应该要怎么处理呢？
  // 这种情况还是需要考虑到了，因为本身就是不可避免的情形呀~~~~
  selectFn.getOptionData = function (){
    var optionData = [];
    // 之后放弃使用each函数
    this.$element.find('option').each(function (){
      optionData.push($(this).val());
    });

    return optionData;
  }


  // 数字和名字做映射
  // @nameArr：
  //  不知道会不会有意外，我暂时想不到有啥意外发生
  selectFn.mapOptions = function (nameArr){
    var result = [];
    if (nameArr && nameArr != ""){
      var name = nameArr.split(';');
      this.$element.find('option').each(function (){
        var val = $(this).val();
        for (var i=0;i<name.length;i++){
          if (val == name[i]){
            result.push($(this).attr('data-act'));
          }
        }
      });
    }
    console.log('abselect result is: ');
    console.log(result);
    return result.join(';');
  }

  // select的事件处理, 这边暂时还是处理成这个样子了，不知道怎么将事件与对象解绑
  selectFn.bind = function (){
    var self = this;

    // 处理多选框的选择逻辑关系
    var headObj = self.$element.siblings('.select-box').find('.select-head');
    var spanObj = headObj.find('span');
    var hidInputObj = headObj.find('input');
    var ulObj = self.$element.siblings('.select-box').find('.select-ul');
    var ulList = ulObj.find('ul');
    var filterInput = ulObj.find('.filter');
    this.$element.parent().delegate('.select-ul input','click', function (e){
      var inputObj = $(e.target);

      // 展开下来选项
      inputObj.parents('.select-ul').show();
      var inputIndex = inputObj.attr('data-index');
      var vStr = "";
      var vNum = "";
      // 说明当前点击的是“全部”选项
      if (inputIndex == 0){
        if (inputObj.prop('checked')){
          ulList.find('li input').prop('checked', true);
          inputObj.addClass('active');
          vStr = "全部";
          vNum = "-1";
        }
        else{
          // 默认处理： 无法直接对“全部”选项做操作
          ulList.find('li input').prop('checked', false);
          inputObj.removeClass('active');
          vStr = "全部";
          vNum = "-1";
        }
      }
      else{  // 当前点击了别的选项, 这边应该要判断是否全部都没有选中了，如果都没有选中的话，需要默认选中“全部”选项
        ulList.find('li:eq(0) input').prop('checked', false);
        var all = self.getCheckboxState(ulObj); // 判断，点击当前选项时，其余选项是否都处于选中状态
        var unall = self.getCheckboxAllState(ulObj); // 判断，点击当前选项时，其余选项是否都处于未选中状态
        if (all){
          ulList.find('li input').prop('checked', true);
          vStr = "全部";
          vNum = "-1";
        }
        else{
          vStr = self.getCheckboxParam(ulObj, 1);
          vNum = self.getCheckboxParam(ulObj, 2);
        }
        if (unall){
          vStr = "全部";
          vNum = "-1";
        }

        // 添加选项选中的状态active
        if (inputObj.prop('checked')){
          inputObj.addClass('active');
        }
        else{
          inputObj.removeClass('active');
        }
      }
      spanObj.text(vStr);
      if (self.options.isUnified){
        hidInputObj.val('').val(vNum);
      }
      else{
        hidInputObj.val('').val(vStr);
      }
      console.log('the val are: ' + vStr);
      console.log('the vNum are: ' + vNum);
      headObj.find('span').attr('title', vStr);
      e.stopPropagation();
    }).delegate('.select-head', 'click', function (e){  // 处理select的展开与折叠逻辑
      var ele = $(e.currentTarget);
      $('body').find('.select-ul').hide();
      if (ele.hasClass('active')){
        ulObj.hide();
        ele.removeClass('active');
      }else{
        ulObj.show();
        ele.addClass('active');
      }
      e.stopPropagation();
    });

    // 用户输入事件的监听, 检索查找内容
    filterInput.on('input', function (e){
      var ele = $(e.target);
      var txt = ele.val();
      // console.log('the current entering is: ' + txt);

      // 还原全部检索选项. 那是不是应该也是需要将文本框中的内容清除掉的呀？
      // 先清除掉，再看看效果看,清除掉之后产生了问题：会覆盖之前的选择，我应该怎么处理呢？
      ulList.find('li').show();

      ulList.find('li input').each(function (){
        // 如果没有active（用户之前有选择过）, 则取消它的选中状态
        if (!$(this).hasClass('active')){
          $(this).prop('checked', false);
        }
      });
      ulList.find('li').each(function (){
        var val = $(this).find('input').val();
        if (val.indexOf(txt) != -1){
          $(this).show();
        }
        else{
          $(this).hide();
        }
      });

    });


    $('body').on('click', function (){
      headObj.removeClass('active');
      ulObj.hide();
    });
  }

  // 获取select选择数据
  // @flag : 为1的时候获取val的值，为2的时候获取data-act的值
  selectFn.getCheckboxParam = function (ulObj, flag){
    var vArr = [];
    ulObj.find('li:not(li:eq(0)) input').each(function (){
      var self = $(this);
      if (self.prop('checked')){
        if (flag == 1){
          vArr.push(self.val());
        }
        else if (flag == 2){
          vArr.push(self.attr('data-act'));
        }
      }
    });

    return vArr.join(';');
  }

  // 判断当checkbox处于一个都没有选中的状态时，重新默认选中“全部”选项
  selectFn.getCheckboxAllState = function (ulObj){
    var flag = true;
    ulObj.find('li:not(li:eq(0)) input').each(function (){
      if ($(this).prop('checked')){
        flag = false;
        return false;
      }
      else{
        flag = true;
      }
    });
    // console.log('the flag is: ' + flag);
    return flag;
  }

  // 判断checkbox是否是处理全选状态的
  selectFn.getCheckboxState = function (ulObj){
    var flag = true;
    // 你要判断是否每一个都选中了，应该要怎么做呢？
    ulObj.find('li:not(li:eq(0)) input').each(function (){
      if ($(this).prop('checked')){
        flag = true;
      }
      else{
        flag = false;
        return false;  // return false;退出each循环，return;退出本次each循环，并进行下一次循环
      }
    });
    return flag;
  }

  $.fn.ABSelects = function (options){
    var abselect = new ABSelect(this, options);
    return abselect;
  }
}));
