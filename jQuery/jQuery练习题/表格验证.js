
    $(function(){
        $("form :input.required").each(function(){
          var $required = $("<strong class='high'> *</strong>");                                             //����Ԫ��
                                                                                                        //$(this).parent().append($required); //��õ�ǰԪ�صĸ�Ԫ�أ�Ȼ���Ǻű�ʶ׷�ӵ��ڸ�Ԫ�ص��ڲ�ĩβ
                                                                                                         //$(this).after($required);//ֱ���ڵ�ǰԪ�صĺ�������Ǻ�
            $required.insertAfter(this);                                                                        //���ǺŲ��뵽��ǰԪ�صĺ���
        }).blur(function(){                                                                                 //�ı���ʧȥ�����
                                                                                                              // $(this).parent().children(".formtips").remove();                                                     //�����ǰ����ʾ��Ϣ
            $(this).nextAll(".formtips").remove();
                                                                                                                             //��֤�û���
            if( $(this).is('#username') ){
                if( this.value=="" || this.value.length < 6 ){
                    var errorMsg = '����������6λ���û���.';
                    $(this).next().after('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
                    var okMsg = '������ȷ.';
                    $(this).next().after('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
            }
            //��֤�ʼ�
            if( $(this).is('#email') ){
                if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                    var errorMsg = '��������ȷ��E-Mail��ַ.';
                    $(this).next().after('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
                    var okMsg = '������ȷ.';
                    $(this).next().after('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
            }
        }).keyup(function(){
            $(this).triggerHandler("blur");
        }).focus(function(){
            $(this).triggerHandler("blur");
        });//end blur


        //�ύ��������֤��
        $('#send').click(function(){
            $("form :input.required").trigger('blur');
            var numError = $('form .onError').length;
            if(numError){
                return false;
            }
            alert("ע��ɹ�,�����ѷ����������,�����.");
        });

        //����
        $('#res').click(function(){
            $(".formtips").remove();
        });
    });