<template>
  <div>
    <p text-40px text-center>{{ dudes[0].x }}</p>
    <p>{{ strapidata.werk.data.attributes.bgcolor }}</p>
  </div>
</template>

<script setup>
const supabase = useSupabase();
let { data: dudes, error } = await supabase.from('dudes').select('x');

const graphql = useStrapiGraphQL();
const { data: strapidata } = await graphql(`
	query {
		werk(id: 2) {
			data {
				attributes {
					bgcolor
				}
			}
		}
	}
`);
</script>
