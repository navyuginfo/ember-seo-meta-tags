import Ember from 'ember';
import MakeMetaHash from '../mixins/make_meta_hash';

export default Ember.Route.extend(MakeMetaHash,{
  setupController: function(controller,model){
    this._super(controller,model);
  }
});
