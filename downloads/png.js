let file_names = {}; // Use curly braces {} to define an object, not square brackets []
file_names['B'] = ['1709485302816.png','1709485336196.png','1709485341748.png','1709485385831.png','1709485391819.png','1709485402810.png','1709485408200.png','1709485413869.png','1709485419810.png','1709485443292.png','1709485454154.png','1709485488798.png','1709485511341.png','1709485544709.png','1709485550047.png','1709485561074.png','1709485567996.png','1709485579235.png','1709485600727.png','1709485617963.png','1709485634831.png','1709485640192.png','1709485646123.png','1709485657765.png','1709485673905.png','1709485679522.png','1709485702472.png','1709485713432.png','1709485730431.png','1709485735999.png','1709485753246.png','1709485775591.png','1709485786734.png','1709485798322.png','1709485822476.png','1709485834195.png','1709485863024.png','1709485893082.png','1709485898712.png','1709485909752.png','1709485954132.png','1709485970477.png','1709485975995.png','1709485981423.png','1709486038035.png','1709486043487.png','1709486054244.png','1709486066111.png','1709486077177.png','1709486123214.png','1709486181964.png','1709486203503.png','1709486214156.png','1709486230824.png','1709486269517.png','1709486337408.png','1709486383981.png','1709486389457.png','1709486406541.png','1709486433904.png','1709486439469.png','1709486451017.png','1709486462653.png','1709486478803.png','1709486512078.png','1709486552104.png','1709486732687.png','1709486748946.png','1709486765334.png','1709486787536.png','1709486921366.png','1709486932096.png','1709486977489.png','1709486982910.png','1709487011008.png','1709487016385.png','1709487021819.png','1709487027184.png','1709487037901.png','1709487049229.png','1709487054986.png','1709487060588.png','1709487065964.png','1709487076900.png','1709487145198.png','1709487150768.png','1709487156194.png','1709487161578.png','1709487185175.png','1709487190565.png','1709487196095.png','1709487219439.png','1709487230762.png','1709487236210.png','1709487241669.png','1709487257779.png','1709487263176.png','1709487268650.png','1709487280473.png','1709487298487.png','1709487309906.png','1709487320796.png','1709487326208.png','1709487331749.png','1709487337068.png','1709487377355.png','1709487404924.png','1709487415900.png','1709487421314.png','1709487432890.png','1709487450690.png','1709487462110.png','1709487467693.png','1709487473720.png','1709487484810.png','1709487490193.png','1709487495634.png','1709487524636.png','1709487541672.png','1709487552655.png','1709487558039.png','1709487564062.png','1709487569758.png','1709487599776.png','1709487605161.png','1709487610751.png','1709487638975.png','1709487644390.png','1709487649800.png','1709487655263.png','1709487660793.png','1709487666229.png','1709487683342.png','1709487694256.png','1709487699610.png','1709487705528.png','1709487718093.png','1709487723692.png','1709487729136.png','1709487753299.png','1709487769991.png','1709487775561.png','1709487795141.png','1709487800652.png','1709487805950.png','1709487811250.png','1709487816574.png','1709487827292.png'];
file_names['A'] = ['1709335229886.png','1709335232302.png','1709335234795.png','1709335237171.png','1709335239678.png','1709335242038.png','1709335244820.png','1709335247331.png','1709335249760.png','1709335252169.png','1709335254619.png','1709335257255.png','1709335259707.png','1709335261987.png','1709335264296.png','1709335266609.png','1709335269122.png','1709335272044.png','1709335274546.png','1709335277085.png','1709335279424.png','1709335281807.png','1709335284201.png','1709335286764.png','1709335289270.png','1709335291817.png','1709335294278.png','1709335296749.png','1709335299261.png','1709335301775.png','1709335304327.png','1709335306854.png','1709335309325.png','1709335312441.png','1709335314847.png','1709335317535.png','1709335320036.png','1709335322414.png','1709335324969.png','1709335327345.png','1709335329885.png','1709335332326.png','1709335334707.png','1709335337044.png','1709335339366.png','1709335341805.png','1709335344271.png','1709335346571.png','1709335348871.png','1709335351146.png','1709335353966.png','1709335356377.png','1709335358751.png','1709335361306.png','1709335363704.png','1709335366145.png','1709335368595.png','1709335370901.png','1709335373277.png','1709335375680.png','1709335377989.png','1709335380322.png','1709335382625.png','1709335384947.png','1709335387794.png','1709335390384.png','1709335392772.png','1709335395062.png','1709335397373.png','1709335399649.png','1709335401939.png','1709335404315.png','1709335406652.png','1709335409056.png','1709335411520.png','1709335413971.png','1709335416296.png','1709335418641.png','1709335420961.png','1709335423302.png','1709335425657.png','1709335427979.png','1709335430311.png','1709335432661.png','1709335435227.png','1709335437548.png','1709335439845.png','1709335442115.png','1709335444443.png','1709335446742.png','1709335449045.png','1709335451350.png','1709335453665.png','1709335456107.png','1709335458581.png','1709335460905.png','1709335463752.png','1709335466272.png','1709335468788.png','1709335471224.png','1709335473643.png','1709335476540.png','1709335479623.png','1709335482061.png','1709335484461.png','1709335486957.png','1709335489435.png','1709335491791.png','1709335494185.png','1709335496529.png','1709335498858.png','1709335501156.png','1709335503471.png','1709335505745.png','1709335508066.png','1709335510613.png','1709335512938.png','1709335515367.png','1709335517664.png','1709335519967.png','1709335522262.png','1709335524589.png','1709335526892.png','1709335529303.png','1709335531650.png','1709335534152.png','1709335536463.png','1709335538782.png','1709335541053.png','1709335543884.png','1709335546339.png','1709335548675.png','1709335551037.png','1709335553359.png','1709335555748.png','1709335558095.png','1709335560468.png','1709335562789.png','1709335565117.png','1709335567521.png','1709335569834.png','1709335572189.png','1709335574517.png','1709335576924.png','1709335579203.png','1709335581540.png','1709335584316.png','1709335586749.png','1709335589064.png','1709335591335.png','1709335593635.png','1709335595904.png','1709335598257.png','1709335600579.png','1709335602961.png','1709335605431.png','1709335607913.png','1709335610212.png','1709335612585.png','1709335615022.png','1709335617376.png','1709335619708.png','1709335622028.png','1709335624346.png','1709335626665.png','1709335629031.png','1709335631395.png','1709335633865.png','1709335636172.png','1709335638472.png','1709335640794.png','1709335643107.png','1709335645530.png','1709335647927.png','1709335650275.png','1709335652633.png','1709335655252.png','1709335657601.png','1709335660120.png','1709335662401.png','1709335664847.png','1709335667262.png','1709335669611.png','1709335671934.png','1709335674314.png','1709335676837.png','1709335679239.png','1709335681665.png','1709335684205.png','1709335686539.png','1709335688902.png','1709335691252.png','1709335693653.png','1709335696023.png','1709335698517.png','1709335701010.png','1709335703391.png','1709335705789.png','1709335708161.png','1709335710613.png','1709335713047.png','1709335715726.png','1709335718074.png','1709335720546.png','1709335722891.png','1709335725295.png','1709335727624.png','1709335730243.png','1709335732635.png','1709335734934.png','1709335737248.png','1709335739641.png','1709335741941.png','1709335744245.png','1709335746561.png','1709335748878.png','1709335751289.png','1709335753806.png','1709335756424.png','1709335758801.png','1709335761241.png','1709335764410.png','1709335767666.png','1709335770356.png','1709335772998.png','1709335775762.png','1709335778151.png','1709335781398.png','1709335785331.png','1709335787973.png','1709335791365.png','1709335794439.png','1709335797793.png','1709335801088.png','1709335804254.png','1709335807521.png','1709335810780.png','1709335814084.png','1709335817897.png','1709335820578.png','1709335823720.png','1709335826049.png','1709335829210.png','1709335832576.png','1709335835789.png','1709335839067.png','1709335842318.png','1709335845463.png','1709335847764.png','1709335851107.png','1709335854261.png','1709335856595.png','1709335858879.png','1709335861218.png','1709335864397.png','1709335867564.png','1709335869958.png','1709335873125.png','1709335876406.png','1709335878705.png','1709335882096.png','1709335885271.png','1709335887608.png','1709335889914.png','1709335892220.png','1709335895429.png','1709335898606.png','1709335901801.png','1709335905174.png','1709335908375.png','1709335911653.png','1709335913963.png','1709335917282.png','1709335920568.png','1709335923704.png','1709335926976.png','1709335930208.png','1709335933409.png','1709335935697.png','1709335938049.png','1709335941245.png','1709335943541.png','1709335946757.png','1709335950611.png','1709335953222.png','1709335956415.png','1709335959663.png','1709335962929.png','1709335966215.png','1709335968535.png','1709335970806.png','1709335974021.png','1709335977344.png','1709335979672.png','1709335982928.png','1709335986205.png','1709335989399.png','1709335992589.png','1709335995785.png','1709335999080.png','1709336002379.png','1709336005556.png','1709336007832.png','1709336010085.png','1709336013350.png','1709336016569.png','1709336018853.png','1709336021125.png','1709336024440.png','1709336026707.png','1709336029016.png','1709336032682.png','1709336035994.png','1709336038816.png','1709336041263.png','1709336044344.png','1709336047525.png','1709336049819.png','1709336053184.png','1709336056288.png','1709336058570.png','1709336061886.png','1709336065197.png','1709336068577.png','1709336070868.png','1709336074063.png','1709336076354.png','1709336079204.png','1709336081880.png','1709336085097.png','1709336088306.png','1709336091533.png','1709336093824.png','1709336096096.png','1709336098354.png','1709336101645.png','1709336104882.png','1709336107338.png','1709336110422.png','1709336113663.png','1709336117090.png','1709336120274.png','1709336123593.png','1709336126756.png','1709336129167.png','1709336132293.png','1709336135474.png','1709336137759.png','1709336140181.png','1709336143346.png','1709336146506.png','1709336149680.png','1709336153006.png','1709336155319.png','1709336158673.png','1709336161901.png','1709336164197.png','1709336166513.png','1709336169920.png','1709336173083.png','1709336176244.png','1709336179488.png','1709336181821.png','1709336184123.png','1709336187456.png','1709336190770.png','1709336194124.png','1709336197250.png','1709336200236.png','1709336202818.png','1709336205985.png','1709336208262.png','1709336211638.png','1709336214821.png','1709336217101.png','1709336220406.png','1709336223627.png','1709336226868.png','1709336230071.png','1709336233310.png','1709336236611.png','1709336239887.png','1709336243159.png','1709336246419.png','1709336248758.png','1709336252062.png','1709336254316.png','1709336256595.png','1709336259763.png','1709336263030.png','1709336266151.png','1709336268488.png','1709336271816.png','1709336275161.png','1709336278325.png','1709336280631.png','1709336283950.png','1709336287199.png','1709336290484.png','1709336293950.png','1709336296909.png','1709336300095.png','1709336303303.png','1709336306569.png','1709336308872.png','1709336312227.png','1709336315375.png','1709336317737.png','1709336320957.png','1709336324245.png','1709336327385.png','1709336330566.png','1709336333778.png','1709336336959.png','1709336339290.png','1709336342759.png','1709336345815.png','1709336349127.png','1709336351423.png','1709336354614.png','1709336356938.png','1709336360322.png','1709336363529.png','1709336366853.png','1709336370173.png','1709336372500.png','1709336374781.png','1709336378033.png','1709336381371.png','1709336383732.png','1709336387007.png','1709336389363.png','1709336392602.png','1709336394935.png','1709336398162.png','1709336400466.png','1709336402771.png','1709336406099.png','1709336409355.png','1709336412686.png','1709336417605.png','1709336420142.png','1709336423364.png','1709336426532.png','1709336429761.png','1709336432934.png','1709336435213.png','1709336437528.png','1709336440717.png','1709336443913.png','1709336447219.png','1709336450419.png','1709336452740.png','1709336455032.png','1709336457342.png','1709336460622.png','1709336463992.png','1709336467155.png','1709336470577.png','1709336473804.png','1709336477219.png','1709336480358.png','1709336482685.png','1709336486283.png','1709336489072.png','1709336492232.png','1709336495614.png','1709336499127.png','1709336502221.png','1709336506634.png','1709336509074.png','1709336512208.png','1709336515585.png','1709336518811.png','1709336522144.png','1709336525353.png','1709336528628.png','1709336531836.png','1709336535125.png','1709336538772.png','1709336541650.png','1709336544841.png','1709336548049.png','1709336551293.png','1709336554587.png','1709336557846.png','1709336561176.png','1709336564285.png','1709336567701.png','1709336570833.png','1709336574160.png','1709336577516.png','1709336581927.png','1709336584357.png','1709336587656.png','1709336591488.png','1709336594069.png','1709336597844.png','1709336600656.png','1709336603973.png','1709336607063.png','1709336609909.png','1709336612469.png','1709336615263.png','1709336617902.png','1709336620302.png','1709336622685.png','1709336625098.png','1709336627524.png','1709336630115.png','1709336632473.png','1709336634907.png','1709336637391.png','1709336639851.png','1709336642219.png','1709336644786.png','1709336647443.png','1709336649939.png','1709336652540.png','1709336654945.png','1709336657422.png','1709336659843.png','1709336662336.png','1709336664814.png','1709336667381.png','1709336670002.png','1709336672435.png','1709336674852.png','1709336677379.png','1709336679803.png','1709336682246.png','1709336684593.png','1709336686912.png','1709336689276.png','1709336691635.png','1709336694052.png','1709336697005.png','1709336699626.png','1709336702106.png','1709336704516.png','1709336706900.png','1709336709279.png','1709336711593.png','1709336713931.png','1709336716254.png','1709336718581.png','1709336720938.png','1709336723284.png','1709336725611.png','1709336727934.png','1709336730261.png','1709336732620.png','1709336734954.png','1709336737333.png','1709336739650.png','1709336742015.png','1709336744355.png','1709336746729.png','1709336749018.png','1709336751393.png','1709336753695.png','1709336756008.png','1709336758333.png','1709336760636.png','1709336762957.png','1709336765324.png','1709336767677.png','1709336770008.png','1709336772319.png','1709336774641.png','1709336776938.png','1709336779257.png','1709336781549.png','1709336783987.png','1709336786286.png','1709336788591.png','1709336793112.png','1709336795563.png','1709336798090.png','1709336800439.png','1709336802774.png','1709336805138.png','1709336807557.png','1709336810695.png','1709336813115.png','1709336815607.png','1709336818310.png','1709336820682.png','1709336823066.png','1709336825760.png','1709336828201.png','1709336830649.png','1709336833069.png','1709336835419.png','1709336837759.png','1709336840146.png','1709336842559.png','1709336844925.png','1709336847335.png','1709336849738.png','1709336852167.png','1709336854597.png','1709336857042.png','1709336859676.png','1709336862017.png','1709336864482.png'];