Search.setIndex({envversion:50,filenames:["runlmc","runlmc.approx","runlmc.approx.interpolation","runlmc.approx.iterative","runlmc.approx.ski","runlmc.kern","runlmc.kern.identity","runlmc.kern.matern32","runlmc.kern.rbf","runlmc.kern.scaled","runlmc.kern.stationary_kern","runlmc.kern.std_periodic","runlmc.linalg","runlmc.linalg.block_diag","runlmc.linalg.block_matrix","runlmc.linalg.composition","runlmc.linalg.diag","runlmc.linalg.identity","runlmc.linalg.kronecker","runlmc.linalg.matrix","runlmc.linalg.numpy_matrix","runlmc.linalg.shur","runlmc.linalg.sum_matrix","runlmc.linalg.toeplitz","runlmc.lmc","runlmc.lmc.derivative","runlmc.lmc.exact_deriv","runlmc.lmc.grid_kernel","runlmc.lmc.kernel","runlmc.lmc.metrics","runlmc.lmc.parameter_values","runlmc.lmc.stochastic_deriv","runlmc.mean","runlmc.mean.constant","runlmc.mean.mean_function","runlmc.mean.zero","runlmc.models","runlmc.models.gpy_lmc","runlmc.models.lmc","runlmc.models.multigp","runlmc.models.optimization","runlmc.parameterization","runlmc.parameterization.model","runlmc.parameterization.param","runlmc.parameterization.parameterized","runlmc.parameterization.priorizable","runlmc.parameterization.priors","runlmc.util","runlmc.util.docs","runlmc.util.numpy_convenience","runlmc.util.testing_utils"],objects:{"":{runlmc:[0,0,0,"-"]},"runlmc.approx":{interpolation:[2,0,0,"-"],iterative:[3,0,0,"-"],ski:[4,0,0,"-"]},"runlmc.approx.interpolation":{cubic_kernel:[2,1,1,""],interp_cubic:[2,1,1,""],multi_interpolant:[2,1,1,""]},"runlmc.approx.iterative":{Iterative:[3,2,1,""]},"runlmc.approx.iterative.Iterative":{TOL:[3,3,1,""],solve:[3,4,1,""]},"runlmc.approx.ski":{SKI:[4,2,1,""]},"runlmc.approx.ski.SKI":{as_numpy:[4,5,1,""],upper_eig_bound:[4,5,1,""]},"runlmc.kern":{identity:[6,0,0,"-"],matern32:[7,0,0,"-"],rbf:[8,0,0,"-"],scaled:[9,0,0,"-"],stationary_kern:[10,0,0,"-"],std_periodic:[11,0,0,"-"]},"runlmc.kern.identity":{Identity:[6,2,1,""]},"runlmc.kern.identity.Identity":{from_dist:[6,5,1,""],kernel_gradient:[6,5,1,""],to_gpy:[6,5,1,""],update_gradient:[6,5,1,""]},"runlmc.kern.matern32":{Matern32:[7,2,1,""]},"runlmc.kern.matern32.Matern32":{from_dist:[7,5,1,""],kernel_gradient:[7,5,1,""],to_gpy:[7,5,1,""],update_gradient:[7,5,1,""]},"runlmc.kern.rbf":{RBF:[8,2,1,""]},"runlmc.kern.rbf.RBF":{from_dist:[8,5,1,""],kernel_gradient:[8,5,1,""],to_gpy:[8,5,1,""],update_gradient:[8,5,1,""]},"runlmc.kern.scaled":{Scaled:[9,2,1,""]},"runlmc.kern.scaled.Scaled":{from_dist:[9,5,1,""],kernel_gradient:[9,5,1,""],to_gpy:[9,5,1,""],update_gradient:[9,5,1,""]},"runlmc.kern.stationary_kern":{StationaryKern:[10,2,1,""]},"runlmc.kern.stationary_kern.StationaryKern":{from_dist:[10,5,1,""],kernel_gradient:[10,5,1,""],to_gpy:[10,5,1,""],update_gradient:[10,5,1,""]},"runlmc.kern.std_periodic":{StdPeriodic:[11,2,1,""]},"runlmc.kern.std_periodic.StdPeriodic":{from_dist:[11,5,1,""],kernel_gradient:[11,5,1,""],to_gpy:[11,5,1,""],update_gradient:[11,5,1,""]},"runlmc.linalg":{block_diag:[13,0,0,"-"],block_matrix:[14,0,0,"-"],composition:[15,0,0,"-"],diag:[16,0,0,"-"],identity:[17,0,0,"-"],kronecker:[18,0,0,"-"],matrix:[19,0,0,"-"],numpy_matrix:[20,0,0,"-"],shur:[21,0,0,"-"],sum_matrix:[22,0,0,"-"],toeplitz:[23,0,0,"-"]},"runlmc.linalg.block_diag":{BlockDiag:[13,2,1,""]},"runlmc.linalg.block_diag.BlockDiag":{as_numpy:[13,5,1,""],matvec:[13,5,1,""]},"runlmc.linalg.block_matrix":{SymmSquareBlockMatrix:[14,2,1,""]},"runlmc.linalg.block_matrix.SymmSquareBlockMatrix":{as_numpy:[14,5,1,""],matvec:[14,5,1,""],upper_eig_bound:[14,5,1,""]},"runlmc.linalg.composition":{Composition:[15,2,1,""]},"runlmc.linalg.composition.Composition":{matmat:[15,5,1,""],matvec:[15,5,1,""]},"runlmc.linalg.diag":{Diag:[16,2,1,""]},"runlmc.linalg.diag.Diag":{as_numpy:[16,5,1,""],matmat:[16,5,1,""],matvec:[16,5,1,""],upper_eig_bound:[16,5,1,""]},"runlmc.linalg.identity":{Identity:[17,2,1,""]},"runlmc.linalg.identity.Identity":{as_numpy:[17,5,1,""],matmat:[17,5,1,""],matvec:[17,5,1,""],upper_eig_bound:[17,5,1,""]},"runlmc.linalg.kronecker":{Kronecker:[18,2,1,""]},"runlmc.linalg.kronecker.Kronecker":{as_numpy:[18,5,1,""],matvec:[18,5,1,""],upper_eig_bound:[18,5,1,""]},"runlmc.linalg.matrix":{Matrix:[19,2,1,""]},"runlmc.linalg.matrix.Matrix":{as_linear_operator:[19,5,1,""],as_numpy:[19,5,1,""],is_square:[19,5,1,""],matmat:[19,5,1,""],matvec:[19,5,1,""],wrap:[19,4,1,""]},"runlmc.linalg.numpy_matrix":{NumpyMatrix:[20,2,1,""]},"runlmc.linalg.numpy_matrix.NumpyMatrix":{as_numpy:[20,5,1,""],matmat:[20,5,1,""],matvec:[20,5,1,""]},"runlmc.linalg.shur":{shur:[21,1,1,""]},"runlmc.linalg.sum_matrix":{SumMatrix:[22,2,1,""]},"runlmc.linalg.sum_matrix.SumMatrix":{as_numpy:[22,5,1,""],matvec:[22,5,1,""],upper_eig_bound:[22,5,1,""]},"runlmc.linalg.toeplitz":{Toeplitz:[23,2,1,""]},"runlmc.linalg.toeplitz.Toeplitz":{as_numpy:[23,5,1,""],matvec:[23,5,1,""],upper_eig_bound:[23,5,1,""]},"runlmc.lmc":{derivative:[25,0,0,"-"],exact_deriv:[26,0,0,"-"],grid_kernel:[27,0,0,"-"],kernel:[28,0,0,"-"],metrics:[29,0,0,"-"],parameter_values:[30,0,0,"-"],stochastic_deriv:[31,0,0,"-"]},"runlmc.lmc.derivative":{Derivative:[25,2,1,""]},"runlmc.lmc.derivative.Derivative":{d_logdet_K:[25,5,1,""],d_normal_quadratic:[25,5,1,""],derivative:[25,5,1,""]},"runlmc.lmc.exact_deriv":{ExactDeriv:[26,2,1,""]},"runlmc.lmc.exact_deriv.ExactDeriv":{d_logdet_K:[26,5,1,""],d_normal_quadratic:[26,5,1,""]},"runlmc.lmc.grid_kernel":{GridKernel:[27,2,1,""],gen_grid_kernel:[27,1,1,""]},"runlmc.lmc.grid_kernel.GridKernel":{interpolants:[27,5,1,""],matvec:[27,5,1,""]},"runlmc.lmc.kernel":{ApproxLMCKernel:[28,2,1,""],ExactLMCKernel:[28,2,1,""],LMCKernel:[28,2,1,""]},"runlmc.lmc.kernel.ApproxLMCKernel":{alpha:[28,5,1,""]},"runlmc.lmc.kernel.ExactLMCKernel":{alpha:[28,5,1,""],coreg_scale:[28,5,1,""]},"runlmc.lmc.kernel.LMCKernel":{alpha:[28,5,1,""],coreg_diag_gradients:[28,5,1,""],coreg_vec_gradients:[28,5,1,""],kernel_gradients:[28,5,1,""],noise_gradient:[28,5,1,""]},"runlmc.lmc.metrics":{Metrics:[29,2,1,""]},"runlmc.lmc.parameter_values":{ParameterValues:[30,2,1,""]},"runlmc.lmc.parameter_values.ParameterValues":{generate:[30,4,1,""]},"runlmc.lmc.stochastic_deriv":{StochasticDeriv:[31,2,1,""]},"runlmc.lmc.stochastic_deriv.StochasticDeriv":{N_IT:[31,3,1,""],d_logdet_K:[31,5,1,""],d_normal_quadratic:[31,5,1,""]},"runlmc.mean":{constant:[33,0,0,"-"],mean_function:[34,0,0,"-"],zero:[35,0,0,"-"]},"runlmc.mean.constant":{Constant:[33,2,1,""]},"runlmc.mean.constant.Constant":{f:[33,5,1,""],mean_gradient:[33,5,1,""],update_gradient:[33,5,1,""]},"runlmc.mean.mean_function":{MeanFunction:[34,2,1,""]},"runlmc.mean.mean_function.MeanFunction":{f:[34,5,1,""],mean_gradient:[34,5,1,""],update_gradient:[34,5,1,""]},"runlmc.mean.zero":{Zero:[35,2,1,""]},"runlmc.mean.zero.Zero":{f:[35,5,1,""],mean_gradient:[35,5,1,""],update_gradient:[35,5,1,""]},"runlmc.models":{gpy_lmc:[37,0,0,"-"],lmc:[38,0,0,"-"],multigp:[39,0,0,"-"],optimization:[40,0,0,"-"]},"runlmc.models.gpy_lmc":{GPyLMC:[37,2,1,""]},"runlmc.models.gpy_lmc.GPyLMC":{log_likelihood:[37,5,1,""],optimize:[37,5,1,""],parameters_changed:[37,5,1,""],predict:[37,5,1,""],predict_quantiles:[37,5,1,""]},"runlmc.models.lmc":{LMC:[38,2,1,""]},"runlmc.models.lmc.LMC":{EVAL_NORM:[38,3,1,""],K:[38,5,1,""],log_det_K:[38,5,1,""],log_likelihood:[38,5,1,""],normal_quadratic:[38,5,1,""],optimize:[38,5,1,""],parameters_changed:[38,5,1,""]},"runlmc.models.multigp":{MultiGP:[39,2,1,""]},"runlmc.models.multigp.MultiGP":{log_likelihood:[39,5,1,""],optimize:[39,5,1,""],parameters_changed:[39,5,1,""],predict:[39,5,1,""],predict_quantiles:[39,5,1,""]},"runlmc.models.optimization":{AdaDelta:[40,2,1,""],MovingAverage:[40,2,1,""]},"runlmc.models.optimization.AdaDelta":{noop:[40,4,1,""],opt:[40,5,1,""]},"runlmc.models.optimization.MovingAverage":{push:[40,5,1,""]},"runlmc.parameterization":{model:[42,0,0,"-"],param:[43,0,0,"-"],parameterized:[44,0,0,"-"],priorizable:[45,0,0,"-"],priors:[46,0,0,"-"]},"runlmc.parameterization.model":{Model:[42,2,1,""]},"runlmc.parameterization.model.Model":{log_likelihood:[42,5,1,""],log_likelihood_with_prior:[42,5,1,""],log_prior:[42,5,1,""],objective_function:[42,5,1,""],objective_function_gradients:[42,5,1,""]},"runlmc.parameterization.param":{Param:[43,2,1,""]},"runlmc.parameterization.param.Param":{set_prior:[43,5,1,""],unset_priors:[43,5,1,""]},"runlmc.parameterization.parameterized":{Parameterized:[44,2,1,""]},"runlmc.parameterization.parameterized.Parameterized":{link_parameter:[44,5,1,""]},"runlmc.parameterization.priors":{Prior:[46,2,1,""]},"runlmc.parameterization.priors.Prior":{domain:[46,3,1,""],lnpdf:[46,5,1,""],lnpdf_grad:[46,5,1,""]},"runlmc.util":{docs:[48,0,0,"-"],numpy_convenience:[49,0,0,"-"],testing_utils:[50,0,0,"-"]},"runlmc.util.docs":{inherit_doc:[48,1,1,""]},"runlmc.util.numpy_convenience":{begin_end_indices:[49,1,1,""],map_entries:[49,1,1,""],search_descending:[49,1,1,""],smallest_eig:[49,1,1,""],symm_2d_list_map:[49,1,1,""],tesselate:[49,1,1,""]},"runlmc.util.testing_utils":{BasicModel:[50,2,1,""],RandomTest:[50,2,1,""],SingleGradOptimizer:[50,2,1,""],check_np_lists:[50,1,1,""],exp_decr_toep:[50,1,1,""],poor_cond_toep:[50,1,1,""],rand_psd:[50,1,1,""],random_toep:[50,1,1,""],run_main:[50,1,1,""]},"runlmc.util.testing_utils.BasicModel":{log_likelihood:[50,5,1,""],parameters_changed:[50,5,1,""]},"runlmc.util.testing_utils.RandomTest":{setUp:[50,5,1,""]},"runlmc.util.testing_utils.SingleGradOptimizer":{opt:[50,5,1,""]},runlmc:{approx:[1,0,0,"-"],kern:[5,0,0,"-"],linalg:[12,0,0,"-"],lmc:[24,0,0,"-"],mean:[32,0,0,"-"],models:[36,0,0,"-"],parameterization:[41,0,0,"-"],util:[47,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:staticmethod","5":"py:method"},terms:{"\u00e1lvarez":37,"abstract":19,"case":[10,38,50],"class":[3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,25,26,27,28,29,30,31,33,34,35,37,38,39,40,42,43,44,45,46,48,50],"default":[15,16,17,19,20,37,38,39,42],"float":46,"function":[2,10,33,34,35,37,38,39,42,43,49,50],"mat\u00e9rn":7,"new":[37,38,39,44],"return":[2,3,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,37,38,39,42,46,48,49,50],"saat\u00e7i":18,"static":[3,19,30,40],"true":[2,3,28,38,39,42],"var":[37,39],_priorizableleaf:[43,45],_priorizablenod:[42,44,45],_raw_predict:[37,38,39],abov:[6,7,8,9,10,11,38,42],above:38,absolut:2,access:42,accomplish:10,accord:[10,37,39],account:[38,39],across:2,activ:33,adadelta:40,adapter:20,add:[38,42,43,44],addit:[38,43],adjust:33,algorithm:[37,38,42],all:[14,19,23,35,38,39,42,43,44,46,48,50],allow:46,along:49,alongsid:38,alpha:28,alreadi:42,ani:[2,6,7,8,9,10,11,38,39,42],anoth:[33,34,35,43],api:44,approach:2,approx:[],approxim:38,approxlmckernel:28,arbitrari:49,argument:50,around:[10,39],arr:49,arrai:[2,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,37,38,39,46,49,50],as_linear_oper:19,as_numpi:[4,13,14,16,17,18,19,20,22,23],assum:[14,19,38,39],atol:50,attribut:[42,46],automat:[37,38,39,42],auxiliari:38,avail:[37,38,39,46],avoid:10,axi:[37,39,49],base:[3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,25,26,27,28,29,30,31,33,34,35,37,38,39,40,42,43,44,46,50],basicmodel:50,bayesian:46,becaus:[10,43],befor:[38,50],begin_end_indic:49,below:38,benchmark:[38,50],between:[38,39,42],bind:42,bit:38,block:[2,10,13,14,18,38],block_diag:[],block_matrix:[],blockdiag:13,blocktoeplitz:[],bool:43,both:[45,50],bound:38,bracket:44,built:[37,38,39],call:[6,7,8,9,10,11,15,16,17,19,20,33,34,35,37,38,39,44,50],can:[2,6,7,8,9,10,11,33,34,35,42,43,44],captur:38,care:44,castabl:23,center:39,certain:[33,34,35,37,39,44],chang:[10,37,38,39,44],cheapli:38,check_np_list:50,choleski:[37,38],chunk:49,close:50,coeffici:2,collector:42,column:[19,38],command:50,common:39,composit:[],comput:[2,6,7,8,9,10,11,33,34,35,38,42,44],concaten:44,condit:50,consist:[37,38,39],constant:[],constintu:13,constitu:13,constitut:[37,38],constrain:44,constrain_posit:44,constraint:44,construct:[13,38,39,49],contain:[2,10,42,43,44,45,46,48],contigu:49,conveni:[44,49],convolut:2,copi:48,coreg_diag:30,coreg_diag_gradi:28,coreg_scal:28,coreg_vec:30,coreg_vec_gradi:28,coregion:[10,37,38],correct:50,correl:38,correspond:[6,7,8,9,10,11,13,37,38,39,43,44,49],correspondingli:38,count:38,covari:[6,38],cpu:38,creat:[2,13,14,16,18,20,23,38,49],csr:2,cubic:[2,37],cubic_kernel:2,cunningham:18,curli:44,current:[38,42],custom:43,d_logdet_k:[25,26,31],d_normal_quadrat:[25,26,31],dann:38,data:10,decompos:22,decor:48,decreas:[49,50],default_constraint:43,defin:[2,6,7,8,10,11,19,42,46],definit:[2,10,50],denot:38,dens:[15,16,17,19,20,50],densiti:46,depend:[42,44],deriv:[],descend:49,desir:[37,39],detail:[10,42,44],determin:[37,38,49],develop:43,diag:[],diagaon:16,diagon:[2,13,16,50],differ:[38,43],differenti:2,digit:2,dimension:[2,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,37,38,39],direct:[13,38,42],directli:39,dist:[6,7,8,9,10,11,50],distanc:[6,7,8,9,10,11,50],dkdt:[25,26,31],doc:[],document:[10,42,44,48],doe:[10,35,38,39,44,50],doesn:49,domain:46,done:[38,42],dot:2,doubl:[37,39],dtcvar:37,dtype:49,dure:[37,38,39,44],each:[2,6,7,8,9,10,11,33,34,35,37,38,39,46,49,50],efficient:37,eigenvalu:49,either:42,element:[2,38,49],els:[3,49],empti:[16,22,23,37,39],enabl:38,entir:38,entri:[2,6,7,8,9,10,11,18,23,33,34,35,37,38,39,50],enviorn:50,equal:[37,39,49],equispac:2,equival:[13,14,16,17,18,19,20,22,23],error:3,euclidean:[6,7,8,9,10,11],eval_norm:38,evalu:[6,7,8,9,10,11,33,34,35,49],evaluat:[33,34,35],everi:[6,7,8,9,10,11,33,34,35],everywher:38,exact:[38,44],exact_deriv:[],exactderiv:26,exactlmckernel:28,execut:50,exist:44,exp_decr_toep:50,explicit:[37,42],explicitli:42,exponenti:50,express:38,extern:45,extrapool:38,f_fp:[40,50],fact:42,factor:[37,38],fals:[3,38],familiar:43,field:44,file:10,find:[38,42],first:[18,23,37,39,46],fix:[44,48],flatten:38,float64:23,fly:38,follow:[2,38,50],formula:37,framework:42,free:38,from:[2,13,14,38,42,43,48,50],from_dist:[6,7,8,9,10,11],further:10,garbag:42,gaussian:[37,38,39],gen_grid_kernel:27,gener:[30,38,39,42,50],get:[42,44,49],gilboa:18,given:[2,6,7,8,9,10,11,38,42,43],gpcoregionalizedregress:37,gpy:[6,7,8,9,10,11,37],gpy_lmc:[],gpylmc:37,grad:[6,7,8,9,10,11,33,34,35],gradient:[6,7,8,9,10,11,33,34,35,37,38,39,42,44,46],graphic:42,greater:38,grid:[2,10,38],grid_dist:[27,28],grid_kern:28,grid_kernel:[],grid_onli:[],gridkernel:27,gridslfm:[],hadamard:38,handl:[37,38,39,42,43,44],happen:[37,38,39],have:[10,33,38,39,45],help:50,help_str:50,helper:50,here:[38,42],high:39,hold:2,hous:39,ident:[],identic:[37,39],identiti:[6,17],iid:38,image:2,immut:46,implement:[18,38,42],implicitli:[42,50],impos:33,includ:[10,42,44,49],inclus:49,incorpor:46,indep_gp:38,independ:38,index:[33,34,35,37,38,39,44,49],indic:44,individu:46,induc:[2,37,38],induce:37,inducing_gird:2,inducing_grid:2,inf:38,inform:[37,38,39],inherit:48,inherit_doc:48,initi:[33,43],input:[2,33,34,35,37,38,39,42,50],input_arrai:43,input_dim:[33,34,35],instanc:[18,22],instanti:39,instead:[37,39],integ:[37,38],intend:46,interfac:[19,38,42],intern:[13,42,45],internal:44,interp_cub:2,interpol:[],interpolantt:27,interv:[37,39],inth:10,inv_lengthscal:[7,8,11],invers:[37,38],invert:28,invoc:50,is_squar:19,isn:[20,23],iter:[],itself:44,job:35,just:[15,16,17,19,20,42,43],keep:[43,44],kei:2,kern:[],kernel:[],kernel_gradi:[6,7,8,9,10,11,28],keyword:[37,38,39],kroneck:[],ktype:27,kwarg:[37,38,39,40],larg:50,largest:[38,49],latent:42,layer:42,lcg:3,learn:38,least:50,leav:35,len:[30,49],length:[33,37,38,39,49],lenit:49,less:[2,38],let:[6,7,8,9,10,11,33,34,35,42],level:39,lexicograph:38,lie:10,light:10,like:[33,43],likelihood:[6,7,8,9,10,11,33,34,35,37,38,39,42],linalg:[],line:50,linear:[3,37,38],linearithm:38,linearoper:19,link:[37,38,39,42],link_paramet:44,lipschitz:50,list:[2,33,34,35,37,38,39,43,46,49,50],lmc:[],lmc_model:30,lmckernel:28,lnpdf:46,lnpdf_grad:46,log:[37,38,39,42,46],log_det_k:38,log_likelihood:[37,38,39,42,50],log_likelihood_gradi:[37,38,39],log_likelihood_with_prior:42,log_prior:42,magnitud:2,mai:[33,37,38,39],main:[16,38,50],make:[37,39],manag:44,manner:50,map:[2,33,34,35,42,46,49],map_entri:49,margin:[37,38,39],massiv:38,mat:15,match:[37,38,39,42,44],matern32:[],mathemat:10,matmat:[15,16,17,19,20],matric:[2,14,19,22,38,50],matrix:[],matvec:[13,14,15,16,17,18,19,20,22,23,27],max_proc:38,maximum:38,mean:[],mean_funct:[],mean_gradi:[33,34,35],meanfunct:[33,34,35],memori:38,mercer:38,method:[37,38,39,44,46,48,50],methodnam:50,metric:[0,24,28],minim:42,minimum:38,minr:3,miss:[42,48],mode:38,model:[],more:38,moreov:10,movingaverag:40,much:10,multi:[34,38,39],multi_interpol:2,multigp:[],multioutput:37,multipl:[2,6,7,8,9,10,11,33,34,35,38,39,46],multipli:[13,14,15,16,17,18,19,20,22,23],must:[14,37,38,39],mvm:19,n_d:[37,39],n_it:31,name:[6,7,8,10,11,33,34,35,37,38,39,42,43,44,50],ndarrai:[2,13,14,16,17,18,19,20,22,23,37,39,49],necessari:19,need:42,neg:42,never:10,nice:44,nickisch:38,nkernel:30,nois:[28,30,38,39],noise_gradi:28,non:16,none:[28,30,31,33,35,38,40,43,44,46,50],noop:40,normal:[33,38,39],normal_quadrat:38,note:[10,13,35,38,42],now:[38,44],nparr:[20,49],number:[3,19,37,38,39,50],numpi:[2,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,37,38,39,46,49,50],numpy_conveni:[],numpy_matrix:[],numpymatrix:20,object:[3,10,19,25,28,29,30,37,38,39,40,42,43,46,49],objective_funct:42,objective_function_gradi:42,observ:[37,38,39,42],off:18,offset:33,onli:[38,44],only:3,onto:2,onward:38,oper:[19,38,44],opt:[40,50],optim:[],optimis:[37,38,39],optimiz:[37,38,39,40,50],option:[33,38,39],order:[6,7,8,9,10,11,33,34,35,46,49],other:[22,42,46],our:38,output:[33,34,35,37,38,39,42,50],output_dim:[33,34,35,37,39],over:[2,38,44,46,49],overal:42,own:43,ownership:[38,39],pair_dist:28,paper:38,parallel:38,param:[],paramet:[2,3,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,37,38,39,42,43,44,45,46,48,49,50],parameter:[],parameter_valu:[],parameters_chang:[37,38,39,50],parametervalu:30,parametr:44,paramz:[37,38,39,40,42,43,44,50],parent:[39,48],parsimoni:[18,23],partial:[6,7,8,9,10,11,33,34,35],pass:[37,38,39,46,50],per:[2,33,34,35],perform:[37,46],period:11,place:[6,7,8,9,10,11,33,34,35,42,46],point:[2,33,34,35,37,38,39,46],pool:[28,31,38],poor_cond_toep:50,posit:[6,7,8,9,10,11,50],possibl:[13,15,16,17,19,20,22,38],posterior:[37,38,39],pre:[37,38,39],precomput:38,predict:[37,38,39],predict_quantil:[37,39],print:[44,50],prior:[],prioriz:[],probabilist:42,process:[2,37,38,39,44],produc:46,product:[13,14,15,16,17,18,19,20,22,23,38,50],program:50,provid:42,psd:[13,18,50],psdt:50,push:40,put:44,python:42,quadrat:38,quantil:[37,39],queri:46,rag:49,rais:[2,14,16,19,20,22,23,38,39,44,49],rand_psd:50,random:50,random_toep:50,randomli:50,randomtest:50,rank:[37,38],rate:[2,50],rbf:[],read:50,real:19,record:38,rectangular:[2,13,15,16,17,19,20,38],redund:10,refer:42,regard:39,regexp:44,regress:[34,37,39],reli:38,remov:38,renam:44,repeatedli:[15,16,17,19,20],replac:38,report:3,repres:[6,7,8,9,10,11,22,23,33,34,35,38,42],represent:[18,23],respect:[6,7,8,9,10,11,33,34,35,42],respons:44,result:[44,46],revers:42,right:[23,44],robert:2,routin:39,row:[2,6,7,8,9,10,11,19,23,33,34,35,37,38,39,49,50],rtol:50,run:[38,50],run_main:50,runtest:50,sai:44,same:[6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,46,49],sampl:[2,38],satisfi:23,scalabl:38,scalar:46,scale:[0,5],scipi:19,script:50,search:49,search_descend:49,second:[18,37,39],see:[10,37,38,39,42,44],seed:50,segment:49,select:44,self:[37,38,39,42],semi:[10,50],set:[38,42,43,44,50],set_prior:43,setup:50,shape:[19,23,44,49,50],share:[2,38],should:[23,37,38,39,42,43,44,46],shouldn:[37,39,45],shown:42,shur:[0,12],simpl:50,singl:[38,49],singlegradoptim:50,size:[2,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,37,39,49,50],ski:[],slfm:38,slfm_kern:38,slow:38,small:50,smaller:38,smallest:[38,49],smallest_eig:49,solut:38,solv:3,some:[6,7,8,9,10,11,33,34,35,38,44],soon:38,sort:2,sourc:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,33,34,35,37,38,39,40,42,43,44,46,48,49,50],spars:[2,19,22,37,38],sparsegpcoregionalizedregress:37,specif:[38,50],specifi:[38,50],split:49,sqrt:[],squar:[14,23],stack:38,stackoverflow:48,stand:50,standard:11,stationari:[10,37,38],stationary_kern:[],stationarykern:[6,7,8,9,10,11],std_period:[],stdout:50,stdperiod:11,stochastic_deriv:[],stochasticderiv:31,storag:23,store:42,str:[38,39],strictli:2,string:[37,50],structur:38,submodul:[],subparameterized1:44,subparameterized2:44,succintli:38,sum:[13,22,37,38,49,50],sum_matrix:[],sumgrid:[],summar:38,summari:44,summatrix:22,suppli:42,support:2,symm_2d_list_map:49,symmetr:[14,23,49,50],symmetricmatrix:[3,22],symmsquareblockmatrix:14,system:3,take:[22,33,44],taken:2,target:3,temporari:38,term:[37,38,42,50],tessel:49,test:[38,50],testcas:50,testing_util:[],than:[2,38],thei:44,them:44,therefor:44,thi:[2,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,37,38,39,42,43,44,45,46,48,50],those:[42,44,46],though:42,thought:38,threshold:49,through:37,tie:44,tie_to:44,time:[37,38,42,50],to_gpi:[6,7,8,9,10,11],todo:38,toeplitz:[],togeth:42,tol:3,toler:3,top:[21,23,49,50],total:38,track:[43,44],tree:42,tune:10,tupl:[37,39],turn:[33,34,35],twice:2,two:[18,50],type:[46,48,49],typeerror:44,typic:37,ugli:38,under:37,underli:23,unittest:50,unset:43,unset_prior:43,updat:[37,38,39,44],update_gradi:[6,7,8,9,10,11,33,34,35],upon:[38,39],upper:38,upper_eig_bound:[4,14,16,17,18,22,23],use:[37,38],user:[42,50],util:[],valid:39,valu:[2,6,7,8,9,10,11,38,39,42,44,46,49],valueerror:[2,14,16,19,20,22,23,38,39,49],variabl:[38,50],varianc:[37,38,39],variance_sampl:38,variat:37,variou:[38,50],vector:[2,6,7,8,9,10,11,13,14,15,16,17,18,19,20,22,23,33,34,35,38,46],verbos:3,verifi:50,version:[6,7,8,9,10,11],want:[33,42,44],warn:43,weakli:49,well:[37,38,39,42],whatev:10,when:[37,38,39,50],where:[37,38,39,42,44],whether:[3,38,43,49],which:[10,13,14,23,37,38,39,42,44,46,50],whose:[6,7,8,9,10,11,50],width:38,wildcard:44,wilson:38,within:38,without:42,word:[42,46],work:[38,42,49],would:[10,33],wrap:[19,37],wrapper:10,written:38,x_init:50,yield:[13,14,15,16,17,18,19,20,22,23],you:[33,42,44],your:42,zero:[]},titles:["runlmc package","runlmc.approx package","runlmc.approx.interpolation module","runlmc.approx.iterative module","runlmc.approx.ski module","runlmc.kern package","runlmc.kern.identity module","runlmc.kern.matern32 module","runlmc.kern.rbf module","runlmc.kern.scaled module","runlmc.kern.stationary_kern module","runlmc.kern.std_periodic module","runlmc.linalg package","runlmc.linalg.block_diag module","runlmc.linalg.block_matrix module","runlmc.linalg.composition module","runlmc.linalg.diag module","runlmc.linalg.identity module","runlmc.linalg.kronecker module","runlmc.linalg.matrix module","runlmc.linalg.numpy_matrix module","runlmc.linalg.shur module","runlmc.linalg.sum_matrix module","runlmc.linalg.toeplitz module","runlmc.lmc package","runlmc.lmc.derivative module","runlmc.lmc.exact_deriv module","runlmc.lmc.grid_kernel module","runlmc.lmc.kernel module","runlmc.lmc.metrics module","runlmc.lmc.parameter_values module","runlmc.lmc.stochastic_deriv module","runlmc.mean package","runlmc.mean.constant module","runlmc.mean.mean_function module","runlmc.mean.zero module","runlmc.models package","runlmc.models.gpy_lmc module","runlmc.models.lmc module","runlmc.models.multigp module","runlmc.models.optimization module","runlmc.parameterization package","runlmc.parameterization.model module","runlmc.parameterization.param module","runlmc.parameterization.parameterized module","runlmc.parameterization.priorizable module","runlmc.parameterization.priors module","runlmc.util package","runlmc.util.docs module","runlmc.util.numpy_convenience module","runlmc.util.testing_utils module"],titleterms:{approx:[1,2,3,4],block_diag:13,block_matrix:14,composit:15,constant:33,content:[0,1,5,12,24,32,36,41,47],deriv:25,diag:16,doc:48,exact_deriv:26,gpy_lmc:37,grid_kernel:27,ident:[6,17],interpol:2,iter:3,kern:[5,6,7,8,9,10,11],kernel:28,kroneck:18,linalg:[12,13,14,15,16,17,18,19,20,21,22,23],lmc:[24,25,26,27,28,29,30,31,38],matern32:7,matrix:19,mean:[32,33,34,35],mean_funct:34,metric:29,model:[36,37,38,39,40,42],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],multigp:39,numpy_conveni:49,numpy_matrix:20,optim:40,packag:[0,1,5,12,24,32,36,41,47],param:43,parameter:[41,42,43,44,45,46],parameter_valu:30,prior:46,prioriz:45,rbf:8,runlmc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],scale:9,shur:21,ski:4,stationary_kern:10,std_period:11,stochastic_deriv:31,submodul:[1,5,12,24,32,36,41,47],subpackag:0,sum_matrix:22,testing_util:50,toeplitz:23,util:[47,48,49,50],zero:35}})