$(function(){
    $('.btn-update').click(function () {
        layer.open({
            title:'修改',
            content:'tables.html',
            type:2,
            area:['800px','350px']
        });
    });
    $('.btn-insert').click(function () {
        layer.open({
            title:'录入',
            content:'tables.html',
            type:2,
            area:['800px','350px']
        });
    });
    $('.btn-start').click(function(){
        layer.confirm('确定要开盘吗?', {icon: 3, title:'提示'}, function(index){
            layer.msg('开盘')
        });
    })
    $('.btn-stop').click(function(){
        layer.confirm('确定要封盘吗?', {icon: 3, title:'提示'}, function(index){
            layer.msg('封盘')
        });
    })
    $('.btn-del').click(function(){
        layer.confirm('确定要删除吗?', {icon: 2, title:'提示'}, function(index){
            layer.msg('删除')
        });
    })
    $('#submit-btn').submit(function () {
        var index = parent.layer.getFrameIndex(window.name);
        $(this).ajaxSubmit({
            success:function(){
                parent.layer.msg('提交成功！', {icon: 1,title:'提示'})
                parent.layer.close(index);
            },
            error:function(){
                parent.layer.alert('提交失败！', {icon: 2,title:'提示'})
                parent.layer.close(index);
            }
        });
        return false;
    });
    $('#optradio3').change(function(){
        var the=$(this);
        if(the.is(':checked')){
            $('.chek').prop('checked','');
        }else{
            $('.chek').eq(0).prop('checked',true);
            $('.chek').eq(2).prop('checked',true);
        }
    });
})