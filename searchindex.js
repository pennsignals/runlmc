Search.setIndex({envversion:50,filenames:["runlmc","runlmc.kern","runlmc.kern.identity","runlmc.kern.rbf","runlmc.kern.stationary_kern","runlmc.linalg","runlmc.linalg.kronecker","runlmc.linalg.numpy_matrix","runlmc.linalg.psd_matrix","runlmc.linalg.sum_matrix","runlmc.linalg.toeplitz","runlmc.mean","runlmc.mean.constant","runlmc.mean.mean_function","runlmc.mean.zero","runlmc.models","runlmc.models.exact","runlmc.models.lmc","runlmc.models.multigp","runlmc.parameterization","runlmc.parameterization.model","runlmc.parameterization.param","runlmc.parameterization.parameterized","runlmc.parameterization.priorizable","runlmc.parameterization.priors","runlmc.util","runlmc.util.docs","runlmc.util.interpolation","runlmc.util.numpy_convenience","runlmc.util.testing_utils"],objects:{"":{runlmc:[0,0,0,"-"]},"runlmc.kern":{identity:[2,0,0,"-"],rbf:[3,0,0,"-"],stationary_kern:[4,0,0,"-"]},"runlmc.kern.identity":{Identity:[2,1,1,""]},"runlmc.kern.identity.Identity":{from_dist:[2,2,1,""],kernel_gradient:[2,2,1,""],to_gpy:[2,2,1,""],update_gradient:[2,2,1,""]},"runlmc.kern.rbf":{RBF:[3,1,1,""]},"runlmc.kern.rbf.RBF":{from_dist:[3,2,1,""],kernel_gradient:[3,2,1,""],to_gpy:[3,2,1,""],update_gradient:[3,2,1,""]},"runlmc.kern.stationary_kern":{StationaryKern:[4,1,1,""]},"runlmc.kern.stationary_kern.StationaryKern":{from_dist:[4,2,1,""],kernel_gradient:[4,2,1,""],to_gpy:[4,2,1,""],update_gradient:[4,2,1,""]},"runlmc.linalg":{kronecker:[6,0,0,"-"],numpy_matrix:[7,0,0,"-"],psd_matrix:[8,0,0,"-"],sum_matrix:[9,0,0,"-"],toeplitz:[10,0,0,"-"]},"runlmc.linalg.kronecker":{Kronecker:[6,1,1,""]},"runlmc.linalg.kronecker.Kronecker":{as_numpy:[6,2,1,""],eig:[6,2,1,""],matvec:[6,2,1,""],upper_eig_bound:[6,2,1,""]},"runlmc.linalg.numpy_matrix":{NumpyMatrix:[7,1,1,""]},"runlmc.linalg.numpy_matrix.NumpyMatrix":{as_numpy:[7,2,1,""],eig:[7,2,1,""],matvec:[7,2,1,""],upper_eig_bound:[7,2,1,""]},"runlmc.linalg.psd_matrix":{PSDDecomposableMatrix:[8,1,1,""],PSDMatrix:[8,1,1,""]},"runlmc.linalg.psd_matrix.PSDDecomposableMatrix":{eig:[8,2,1,""],upper_eig_bound:[8,2,1,""]},"runlmc.linalg.psd_matrix.PSDMatrix":{as_linear_operator:[8,2,1,""],as_numpy:[8,2,1,""],matmat:[8,2,1,""],matvec:[8,2,1,""]},"runlmc.linalg.sum_matrix":{SumMatrix:[9,1,1,""]},"runlmc.linalg.sum_matrix.SumMatrix":{APPROX_EIG_METHODS:[9,3,1,""],approx_eigs:[9,2,1,""],as_numpy:[9,2,1,""],matvec:[9,2,1,""]},"runlmc.linalg.toeplitz":{Toeplitz:[10,1,1,""]},"runlmc.linalg.toeplitz.Toeplitz":{as_numpy:[10,2,1,""],eig:[10,2,1,""],matvec:[10,2,1,""],upper_eig_bound:[10,2,1,""]},"runlmc.mean":{constant:[12,0,0,"-"],mean_function:[13,0,0,"-"],zero:[14,0,0,"-"]},"runlmc.mean.constant":{Constant:[12,1,1,""]},"runlmc.mean.constant.Constant":{f:[12,2,1,""],mean_gradient:[12,2,1,""],update_gradient:[12,2,1,""]},"runlmc.mean.mean_function":{MeanFunction:[13,1,1,""]},"runlmc.mean.mean_function.MeanFunction":{f:[13,2,1,""],mean_gradient:[13,2,1,""],update_gradient:[13,2,1,""]},"runlmc.mean.zero":{Zero:[14,1,1,""]},"runlmc.mean.zero.Zero":{f:[14,2,1,""],mean_gradient:[14,2,1,""],update_gradient:[14,2,1,""]},"runlmc.models":{exact:[16,0,0,"-"],lmc:[17,0,0,"-"],multigp:[18,0,0,"-"]},"runlmc.models.exact":{ExactLMC:[16,1,1,""]},"runlmc.models.exact.ExactLMC":{log_likelihood:[16,2,1,""],optimize:[16,2,1,""],parameters_changed:[16,2,1,""],predict:[16,2,1,""],predict_quantiles:[16,2,1,""]},"runlmc.models.lmc":{LMC:[17,1,1,""]},"runlmc.models.lmc.LMC":{K_SKI:[17,2,1,""],TOL:[17,3,1,""],log_det_K:[17,2,1,""],log_likelihood:[17,2,1,""],normal_quadratic:[17,2,1,""],parameters_changed:[17,2,1,""]},"runlmc.models.multigp":{MultiGP:[18,1,1,""]},"runlmc.models.multigp.MultiGP":{log_likelihood:[18,2,1,""],optimize:[18,2,1,""],parameters_changed:[18,2,1,""],predict:[18,2,1,""],predict_quantiles:[18,2,1,""]},"runlmc.parameterization":{model:[20,0,0,"-"],param:[21,0,0,"-"],parameterized:[22,0,0,"-"],priorizable:[23,0,0,"-"],priors:[24,0,0,"-"]},"runlmc.parameterization.model":{Model:[20,1,1,""]},"runlmc.parameterization.model.Model":{log_likelihood:[20,2,1,""],log_likelihood_with_prior:[20,2,1,""],log_prior:[20,2,1,""],objective_function:[20,2,1,""],objective_function_gradients:[20,2,1,""]},"runlmc.parameterization.param":{Param:[21,1,1,""]},"runlmc.parameterization.param.Param":{set_prior:[21,2,1,""],unset_priors:[21,2,1,""]},"runlmc.parameterization.parameterized":{Parameterized:[22,1,1,""]},"runlmc.parameterization.parameterized.Parameterized":{link_parameter:[22,2,1,""]},"runlmc.parameterization.priors":{Prior:[24,1,1,""]},"runlmc.parameterization.priors.Prior":{domain:[24,3,1,""],lnpdf:[24,2,1,""],lnpdf_grad:[24,2,1,""]},"runlmc.util":{docs:[26,0,0,"-"],interpolation:[27,0,0,"-"],numpy_convenience:[28,0,0,"-"],testing_utils:[29,0,0,"-"]},"runlmc.util.docs":{inherit_doc:[26,4,1,""]},"runlmc.util.interpolation":{cubic_kernel:[27,4,1,""],interp_cubic:[27,4,1,""]},"runlmc.util.numpy_convenience":{map_entries:[28,4,1,""],search_descending:[28,4,1,""],smallest_eig:[28,4,1,""],tesselate:[28,4,1,""]},"runlmc.util.testing_utils":{RandomTest:[29,1,1,""],SingleGradOptimizer:[29,1,1,""],check_np_lists:[29,4,1,""],exp_decr_toep:[29,4,1,""],poor_cond_toep:[29,4,1,""],rand_psd:[29,4,1,""],random_toep:[29,4,1,""],run_main:[29,4,1,""]},"runlmc.util.testing_utils.RandomTest":{setUp:[29,2,1,""]},"runlmc.util.testing_utils.SingleGradOptimizer":{opt:[29,2,1,""]},runlmc:{kern:[1,0,0,"-"],linalg:[5,0,0,"-"],mean:[11,0,0,"-"],models:[15,0,0,"-"],parameterization:[19,0,0,"-"],util:[25,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0le":[],"4ab":[],"abstract":8,"b\u00f6ttcher":[],"case":[17,29],"class":[2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,21,22,23,24,26,29],"default":[16,17,18,20],"float":24,"function":[4,12,13,14,16,17,18,20,21,27,28,29],"int":[16,18],"new":[16,17,18,22],"return":[2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,24,26,27,28,29],"saat\u00e7i":6,"true":[8,16,17,18,20,27],"try":[],"var":[16,18],_and_:[],_priorizableleaf:[21,23],_priorizablenod:[20,22,23],_raw_predict:[16,17,18],_thought:[],abov:[2,3,4,6,7,8,10,17,20],above:17,absolut:[6,7,8,10,27],access:20,accomplish:4,accord:[4,16,18],account:[17,18],activ:12,actual:[8,9,16,18],adadelta:[16,18],adapter:7,add:[20,21,22],add_observ:[],addit:[10,17,21],adher:8,adjust:12,admit:9,affect:[],after:[16,18],algorithm:[16,20],all:[10,14,17,18,20,21,22,24,26,29],allow:[8,24],along:28,alreadi:20,altern:[],ani:[2,3,4,9,17,18,20,27],anoth:[12,13,14,21],another:[],answer:[],anymor:[],anyth:[16,18],api:[8,22],approach:27,approx_eig:9,approx_eig_methods:9,approxim:[6,7,8,9,10,17],arbitrari:28,aren:6,argument:29,around:[4,18],arrai:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,24,27,28,29],as_linear_oper:8,as_numpi:[6,7,8,9,10],asdf:[],aslinearoper:8,assum:[7,10,17,18],atol:29,attribut:[20,24],automat:[16,17,18,20],avail:24,avoid:9,awar:[],axi:[16,18,28],base:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,21,22,24,29],bayesian:24,becaus:21,been:[],befor:[17,29],begin:[],benchmark:29,best:9,between:[17,18,20],bfg:[16,18],bind:20,bit:17,block:[4,6,17],boldsymbol:[],bool:[16,18,21],both:[9,23,29],bound:[6,7,8,9,10,17],bracket:22,built:17,calcul:9,call:[2,3,4,8,12,13,14,16,17,18,22,29],can:[2,3,4,6,7,8,9,10,12,13,14,16,18,20,21,22,27],captur:17,care:22,castabl:10,center:18,certain:[12,13,14,16,18,22],chang:[4,16,17,18,22],check:[16,18],check_np_list:29,check_psd:[],chunk:28,circl:[6,7,8,10],clear:[16,18],clear_after_finish:[16,18],close:29,code:[16,18],coeffici:27,collector:20,column:17,combinator:9,command:29,common:18,comput:[2,3,4,6,7,8,9,10,12,13,14,20,22,27],concaten:22,condit:[6,7,8,10,29],consid:[8,9],consist:[16,17,18],constant:[],constitut:[16,17],constrain:22,constrain_posit:22,constraint:22,construct:[17,18],contain:[4,20,21,22,23,24,26,27],contigu:28,contribut:[],conveni:[9,22,28],convert:8,convolut:27,copi:26,coregion:[16,17],correct:29,correctli:8,correl:17,correspond:[2,3,4,16,17,18,21,22,28],correspondingli:17,counterpart:[],covari:2,creat:[6,7,10,17,28],cubic:[16,27],cubic_kernel:27,cunningham:6,curli:22,current:[9,17,20],custom:21,cutoff:[6,7,8,10],dann:17,data:4,debug:10,decompos:9,decor:26,decreas:[6,7,8,10,28,29],default_constraint:21,defin:[2,3,4,8,20,24,27],definit:[4,8,27,29],deleg:[],denot:17,dens:29,densiti:24,depend:[20,22],deriv:[2,3,4,12,13,14,17,20],descend:28,desir:[16,18],detail:[4,20,22],determin:[6,7,8,9,10,17,28],develop:21,diagon:29,differ:[17,21],differenti:27,digit:27,dimens:[],dimension:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,27],direct:[17,20],directli:18,displai:[16,18],dist:[2,3,4],distanc:[2,3,4,29],doc:[],document:[4,20,22,26],doe:[4,8,9,14,17,18,22,29],doesn:[8,28],domain:24,don:[],done:[9,17,20],dot:[8,27],doubl:[16,18],dure:[16,17,18,22],each:[2,3,4,9,12,13,14,16,17,18,24,28,29],easi:9,effici:[6,7,8,10],eig:[6,7,8,10],eigendecompos:9,eigendecomposit:[8,9],eigendecompost:9,eigenvalu:[6,7,8,9,10,28],either:[9,16,18,20],element:[9,28],elementari:[],els:28,empir:9,empti:[9,10,16,18],enabl:17,end:[],entir:17,entri:[2,3,4,6,10,12,13,14,16,17,18,27,29],enviorn:29,epsilon:[],equal:[16,18,28],equispac:27,equival:[6,7,8,9,10],ert:[],euclidean:[2,3,4],evalu:[2,3,4,12,13,14,16,18,28],evaluat:[12,13,14],everi:[2,3,4,12,13,14],everyth:17,ewcommand:[],exact:[],exactlmc:16,exampl:[16,18],execut:29,exist:22,exp_decr_toep:29,expect:8,explicit:[16,20],explicitli:20,exponenti:29,expos:8,express:17,extent:8,extern:23,f_fp:29,fact:20,factor:16,fairli:[6,7,8,10],fals:[16,18],familiar:21,field:22,file:4,find:[6,7,8,10,17,20],first:[6,10,16,18,24],fix:[22,26],flatten:17,float64:10,follow:[8,17,27,29],formal:[],former:[],formula:16,frac:[],framework:20,from:[17,20,21,26,27,29],from_dist:[2,3,4],fulli:10,further:4,garbag:20,gaussian:[16,17,18],gener:[6,7,8,10,17,18,20,29],gershgorin:[6,7,8,10],get:[20,22,28],gilboa:6,given:[2,3,4,9,20,21,27],global:[],goal:[],good:[6,7,8,10],gpy:[2,3,4],grad:[2,3,4,12,13,14],gradient:[2,3,4,12,13,14,16,17,18,20,22,24],graphic:20,greater:9,greedi:9,greedy_fiedl:9,greedy_weyl:9,grid:[4,17,27],grudski:[],guarante:[6,7,8,9,10],hadamard:17,handl:[16,18,20,21,22],happen:[16,17,18],have:[9,12,17,18,23],help:29,help_str:29,helper:29,here:[16,17,18,20],hermitian:[],heteroscedast:[],high:18,hold:[6,7,8,10,27],hous:18,howev:9,http:[],ident:[],identic:[16,18],identiti:2,ight:[],iid:17,image:27,immut:24,impement:[6,7,8,10],implement:[6,10,17,20],impli:[6,7,8,10],implicitli:[20,29],impos:12,includ:[4,16,18,20,22,28],inclus:28,incorpor:24,index:[12,13,14,16,17,18,22,28],indic:22,individu:24,induc:[10,17],inform:[16,17,18],inherit:26,inherit_doc:26,init:[],initi:[12,21],input:[12,13,14,16,17,18,20,27,29],input_arrai:21,input_dim:[12,13,14],instanc:[6,8,9],instanti:18,instead:[16,18],integ:16,intend:24,interfac:[8,20],intern:[20,23],internal:22,interp_cub:27,interpol:[],interpret:8,interv:[16,18],inv_lengthscal:3,invers:16,invoc:29,ipynb:[16,18],ipython:[16,18],ipython_notebook:[16,18],isn:[7,10],iter:[2,3,4,28],itself:[9,22],job:14,just:[8,16,18,20,21],k_q:[],k_ski:17,k_sum:[],keep:[21,22],kei:27,kern:[],kernel:[2,3,4,16,17,21,27,29],kernel_gradi:[2,3,4],keyword:[16,18],kroneck:[],kwarg:[16,18],larg:29,largest:[6,7,8,10,17,28],latent:20,law:8,layer:20,lbfg:[],lbfgsb:[16,18],learn:17,least:29,leav:14,left:[],len:8,length:[12,16,17,18,28],lenit:28,less:[17,27],let:[2,3,4,12,13,14,20],level:18,lexicograph:17,lie:4,light:4,like:[12,21],likelihood:[2,3,4,12,13,14,16,17,18,20],linalg:[],line:29,linear:[16,17],linearithm:17,linearoper:8,link:[16,17,18,20],link_paramet:22,list:[12,13,14,16,17,18,21,24,28,29],listen:[],lmc:[],lnpdf:24,lnpdf_grad:24,local:[],locat:[],log:[6,7,8,9,10,16,17,18,20,24],log_det_k:17,log_det_sum:[],log_det_sum_bound:[],log_likelihood:[16,17,18,20],log_likelihood_gradi:[16,18],log_likelihood_with_prior:20,log_prior:20,logdet:[],logger:10,lower:9,magnitud:[6,7,8,10,27],mai:[12,16,17,18],main:[17,29],make:[16,18],maksimenko:[],manag:22,manifest:8,manner:29,map:[12,13,14,20,24,28],map_entri:28,margin:[16,17,18],massiv:17,match:[16,17,18,20,22],math:[],mathemat:[4,8],mathoverflow:[],matic:[6,7,8,10],matmat:8,matric:[6,7,8,9,10,17,29],matrix:[4,6,7,8,9,10,17,27,28,29],matvec:[6,7,8,9,10],max_it:[16,18],maxim:9,maximum:[16,17,18],mean:[],mean_funct:[],mean_gradi:[12,13,14],meanfunct:[12,13,14],memori:17,mercer:17,messag:[16,18],method:[9,16,17,18,22,24,26,29],methodnam:29,min_eig:9,minim:[9,20],minimum:17,miss:[20,26],mode:10,model:[],more:17,moreov:4,much:4,multi:[13,17,18],multigp:[],multioutput:16,multipl:[2,3,4,6,7,8,10,12,13,14,17,18,24],multipli:[6,7,8,9,10],must:[10,16,17,18],n_d:[16,18],name:[2,3,4,8,10,12,13,14,16,17,18,20,21,22,29],ndarrai:[6,7,8,9,10,16,18,27,28],necessari:8,need:20,neg:20,net:[],never:4,nice:22,nickisch:17,nois:[17,18],non:[],none:[9,12,14,17,21,22,24,29],normal:[12,17,18],normal_quadrat:17,notat:[],note:[4,14,20],notebook:[16,18],now:[17,22],nparr:[7,28],number:[8,16,17,18,29],numpi:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,24,27,28,29],numpy_conveni:[],numpy_matrix:[],numpymatrix:7,object:[4,8,16,17,18,20,21,24],objective_funct:20,objective_function_gradi:20,observ:[16,17,18,20],observabl:[],off:6,offer:8,offset:12,onli:[6,7,8,10,17,22],onto:[],oper:[8,17,22],opt:29,optim:[16,17,18,20,21,22,24,29],optimis:[16,17,18],optimiz:[16,18,29],option:[9,12,16,17,18],order:[2,3,4,6,7,8,10,12,13,14,24,28],org:[16,18],other:[8,9,20,24],otim:[],our:17,output:[12,13,14,16,17,18,20,29],output_dim:[12,13,14,16,18],over:[17,22,24,27,28],overal:20,overflow:9,own:[16,18,21],ownership:[17,18],paper:17,param:[],paramet:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,21,22,23,24,26,27,28,29],parameter:[],parameters_chang:[16,17,18],parametr:22,paramz:[16,18,20,21,22,29],parent:[18,26],parsimoni:[6,10],partial:[2,3,4,12,13,14],particular:9,pass:[16,18,24,29],per:[12,13,14,27],perform:[16,24],place:[2,3,4,12,13,14,20,24],point:[12,13,14,16,17,18,24,27],poor_cond_toep:29,posit:[2,3,4,7,8,10,29],possibl:[8,9,17],posterior:[16,17,18],predict:[16,17,18],predict_quantil:[16,18],print:[22,29],prior:[],prioriz:[],probabilist:20,problem:[],procedur:[],process:[16,17,18,22,27],processes_:[],produc:24,product:[6,7,8,9,10,17,29],program:29,proof:[],properti:[8,9],provid:20,psd:[6,7,8,10,29],psd_matrix:[],psddecomposablematrix:[6,7,8,9,10],psdmatrix:[8,9],psdt:29,psuedo:9,put:22,python:20,qa_qa_q:[],quadrat:17,qualifi:10,quantil:[16,18],queri:24,question:[],rac:[],rag:28,rais:[6,7,8,9,10,17,18,22,27,28],rand_psd:29,random:29,random_toep:29,randomli:29,randomtest:29,rank:[16,17],rate:[27,29],rbf:[],read:29,real:8,rectangular:[8,17],redund:[],refer:20,regard:18,regexp:22,region:[],regress:[13,16,18],regular:8,reli:[6,7,8,10,17],removed:[],renam:22,repeat:[6,7,8,10],repeatedli:8,replac:17,repres:[2,3,4,8,9,10,12,13,14,17,20],represent:[6,10],respect:[2,3,4,12,13,14,20],respons:22,restrict:8,result:[9,22,24],revers:20,right:[10,22],robert:27,routin:18,row:[2,3,4,6,7,8,10,12,13,14,16,17,18,27,28,29],rprop:[16,18],run:29,run_main:29,runtest:29,runtimerror:10,sai:22,same:[2,3,4,6,7,8,9,10,12,13,14,24,28],sampl:27,satisfi:10,scalabl:17,scalar:24,scale:29,scg:[16,18],scipi:8,script:29,search:28,search_descend:28,second:[6,16,18],section:[],see:[4,16,18,20,22],seed:29,segment:28,select:22,self:[16,17,18,20],semant:8,semi:[4,8,29],semidefinit:[],set:[9,10,17,20,21,22,29],set_prior:21,setup:29,shape:[8,10,22,28,29],share:17,should:[10,16,17,18,20,21,22,24],shouldn:[16,18,23],shown:20,simpl:29,simplex:[16,18],simultan:[],simultaneous_diag:9,singl:[17,28],singlegradoptim:29,size:[2,3,4,6,7,8,9,10,16,18,27,28,29],ski:17,small:29,smaller:9,smallest:[9,17,28],smallest_eig:28,solut:[],solv:[],some:[2,3,4,9,12,13,14,17,22],sort:27,sourc:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,21,22,24,26,27,28,29],space:[],spars:[8,9,17],special:9,specif:[17,29],specifi:29,split:28,squar:[6,7,8],stack:17,stackoverflow:26,stand:29,stationari:[4,16,17],stationary_kern:[],stationarykern:[2,3,4],stdout:29,storag:10,store:20,str:[16,17,18],strategi:9,strictli:27,string:[16,29],structur:17,sub:[],submodul:[],subparameterized1:22,subparameterized2:22,succintli:17,sum:[6,7,8,9,10,16,17,28,29],sum_:[],sum_ia_i:[],sum_matrix:[],summari:22,summatrix:9,suppli:20,support:27,sure:[],symmetr:[7,8,29],take:[9,12,22],taken:27,term:[16,17,20,29],tessel:28,test:29,testcas:29,testing_util:[],than:[9,17,27],thei:22,them:22,themselv:8,theorem:[6,7,8,10],therefor:22,therfor:9,thi:[2,3,4,6,7,8,9,10,12,13,14,16,17,18,20,21,22,23,24,26,29],those:[20,22,24],though:[6,7,8,10,20],thought:17,threshold:28,through:[],tie:22,tie_to:22,tight:[6,7,8,10],time:[16,17,20,29],tnc:[16,18],to_gpi:[2,3,4],todo:[16,17,18],toeplitz:[],togeth:20,tol:17,top:[10,28,29],total:17,track:[21,22],transform:[],tree:20,tune:4,tupl:[16,18],turn:[12,13,14],twice:27,two:[6,29],type:[24,26,28],typeerror:22,under:16,underli:10,unittest:29,unprim:[],unset:21,unset_prior:21,updat:[16,17,18,22],update:[],update_gradi:[2,3,4,12,13,14],upon:[17,18],upper:[6,7,8,9,10,17],upper_eig_bound:[6,7,8,10],use:16,user:[20,29],using:9,util:[],valid:18,valu:[2,3,4,17,18,20,22,24,27,28],valueerror:[6,7,8,9,10,17,18,27,28],variabl:[17,29],varianc:[3,16,17,18],variou:29,vector:[2,3,4,6,7,8,9,10,12,13,14,17,24,27],veri:8,verifi:29,version:[2,3,4],visit:[],visit_gradi:[],wai:9,want:[12,20,22],warn:21,weakli:28,well:[6,7,8,10,16,18,20],what:8,whatev:4,when:[16,17,18,29],where:[16,17,18,20,22],whether:[6,7,8,10,16,18,21,28],which:[4,6,7,8,9,10,16,17,18,20,22,24,29],whose:[2,3,4,29],widget:[16,18],width:17,wildcard:22,wilson:17,within:17,without:20,word:[8,20,24],work:[8,20,28],would:12,wrapper:4,written:17,x_init:29,yield:[6,7,8,9,10],you:[12,20,22],your:[16,18,20],zero:[]},titles:["runlmc package","runlmc.kern package","runlmc.kern.identity module","runlmc.kern.rbf module","runlmc.kern.stationary_kern module","runlmc.linalg package","runlmc.linalg.kronecker module","runlmc.linalg.numpy_matrix module","runlmc.linalg.psd_matrix module","runlmc.linalg.sum_matrix module","runlmc.linalg.toeplitz module","runlmc.mean package","runlmc.mean.constant module","runlmc.mean.mean_function module","runlmc.mean.zero module","runlmc.models package","runlmc.models.exact module","runlmc.models.lmc module","runlmc.models.multigp module","runlmc.parameterization package","runlmc.parameterization.model module","runlmc.parameterization.param module","runlmc.parameterization.parameterized module","runlmc.parameterization.priorizable module","runlmc.parameterization.priors module","runlmc.util package","runlmc.util.docs module","runlmc.util.interpolation module","runlmc.util.numpy_convenience module","runlmc.util.testing_utils module"],titleterms:{constant:12,content:[0,1,5,11,15,19,25],doc:26,exact:16,ident:2,interpol:27,kern:[1,2,3,4],kroneck:6,linalg:[5,6,7,8,9,10],lmc:17,log_det_sum:[],mean:[11,12,13,14],mean_funct:13,model:[15,16,17,18,20],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],multigp:18,numpy_conveni:28,numpy_matrix:7,packag:[0,1,5,11,15,19,25],param:21,parameter:[19,20,21,22,23,24],prior:24,prioriz:23,psd_matrix:8,rbf:3,runlmc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],stationary_kern:4,submodul:[1,5,11,15,19,25],subpackag:0,sum_matrix:9,testing_util:29,toeplitz:10,util:[25,26,27,28,29],zero:14}})