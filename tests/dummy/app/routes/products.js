/*jshint multistr: true */
import Ember from 'ember';
import MakeMetaHash from '../mixins/make_meta_hash';

export default Ember.Route.extend(MakeMetaHash,{
  mackbook_description: "The MacBook is a brand of notebook computers manufactured by Apple Inc. from May 2006 to \
  February 2012, and relaunched in 2015. It replaced the iBook series and 12-inch PowerBook series of notebooks as a\
  part of the Apple-Intel transition from PowerPC. Positioned as the low end of the MacBook family, below the premium\
  ultra-portable MacBook Air and the powerful MacBook Pro, the MacBook was aimed at the consumer and education markets.\
  It was the best-selling Macintosh ever. For five months in 2008, it was the best-selling laptop of any brand in US\
  retail stores.[3] Collectively, the MacBook brand is the `world's top-selling line of premium laptops.`There have been\
  four separate designs of the MacBook. The original model used a combination of polycarbonate and fiberglass casing which\
  was modeled after the iBook G4. The second type was introduced in October 2008 alongside the 15-inch MacBook Pro; the MacBook\
  shared the more expensive laptop's unibody aluminum casing, but omitted FireWire. A third design, introduced in late 2009,\
  had a polycarbonate unibody casing.",
  iphone_description: "IPhone (/ˈaɪfoʊn/ EYE-fohn) is a line of smartphones designed and marketed by Apple Inc. They run\
  Apple's iOS mobile operating system. The first generation iPhone was released on June 29, 2007, and there have been \
  multiple new hardware iterations since.Apple has released ten generations of iPhone models, each accompanied by one of \
  the ten major releases of the iOS operating system. The original 1st-generation iPhone was a GSM phone and established \
  design precedents, such as a button placement that has persisted throughout all releases and a screen size maintained \
  for the next four iterations. The iPhone 3G added 3G network support, and was followed by the 3GS with improved hardware,\
  the 4 with a metal chassis, higher display resolution and front-facing camera, and the 4S with improved hardware and \
  the voice assistant Siri.",
  playstation_description: "PlayStation is a gaming brand that consists of four home video game consoles, as well as a media center\
  , an online service, a line of controllers, two handhelds and a phone, as well as multiple magazines. It is created and owned by \
  Sony Interactive Entertainment since December 3, 1994, with the launch of the original PlayStation in Japan.\
  The original console in the series was the first video game console to ship 100 million units, 9 years and 6 months after its\
  initial launch.[2] Its successor, the PlayStation 2, was released in 2000. The PlayStation 2 is the best-selling home console to \
  date, having reached over 155 million units sold as of December 28, 2012.[3] Sony's next console, the PlayStation 3, was released \
  in 2006 and has sold over 80 million consoles worldwide as of November 2013.[4] Sony's latest console, the PlayStation 4, was \
  released in 2013, selling 1 million consoles in its first 24 hours on sale, becoming the fastest selling console in history.",
  uncharted_description: "Uncharted is an action-adventure third-person shooter platform video game series developed by Naughty Dog \
  and published by Sony Interactive Entertainment for PlayStation consoles. The series follows protagonist Nathan `Nate` Drake (portrayed\
  by Nolan North through voice and motion capture) a charismatic yet rebellious treasure hunter who journeys across the world to uncover \
  various historical mysteries. The main series began with Uncharted: Drake's Fortune released on the PlayStation 3 in 2007, followed by \
  its sequels Uncharted 2: Among Thieves (2009), Uncharted 3: Drake's Deception (2011), with the final installment Uncharted 4: A Thief's \
  End released in 2016 on the PlayStation 4. A prequel, Uncharted: Golden Abyss, was released for Sony's PlayStation Vita handheld system \
  in 2011, followed by the card game spin-off Uncharted: Fight for Fortune.",
  setupController: function(controller,model){
    this._super(controller,model);
    Ember.$('body').animate({ scrollTop: 0 });
    switch(Number(model.pid)){
      case 1:
        controller.set('data', this.mackbook_description);
        controller.set('heading', 'Macbook Pro');
        this.set('title', 'Macbook Pro');
        break;
      case 2:
        controller.set('data', this.iphone_description);
        controller.set('heading', 'Iphone');
        this.set('title', 'Apple iphone 6');
        break;
      case 3:
        controller.set('data', this.playstation_description);
        controller.set('heading', 'Playstation');
        this.set('title', 'Sony PS4');
        break;
      case 4:
        controller.set('data', this.uncharted_description);
        controller.set('heading', 'Uncharted');
        this.set('title', 'Uncharted');
        break;
    }
  }
});
