/* Function to get fetch file names to sort */
import _ from 'lodash'

export const fetchFiles = {
    data() {
        return {
            filters: [],
        }
    },
    methods: {
        updateFilters(tags) {
            this.filters = _.cloneDeep(tags);
        },
    },
    computed: {
        getFetched() {
            return this.$store.getters.getFetched(this.ID);
        },
        filteredFetch() {
            let vm = this;
            
            if (this.filters.length === 0) {
              return this.getFetched;
            };
            
            let temp = {};
            let filenames = Object.keys(this.getFetched);
            
            this.filters.forEach(tag => {
              filenames.forEach(name => {
                if (this.getFetched[name].tags.indexOf(tag) > -1) {
                  temp[name] = this.getFetched[name];
                }
              })
            })
            
            return temp;
        },
    }
}